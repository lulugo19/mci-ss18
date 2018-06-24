import { Component, OnInit } from '@angular/core';

import { borrowers, keys } from '../../../dat/borrowers';

// 14 std -> hours the building is open (?)
const OVERDUE = 14*60*60*1000

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {

  search        = false
  noKeys        = false
  borrowers     = borrowers.map(elem => {
    return {
      name      : elem.name.toUpperCase(),
      matNr     : elem.matNr.toUpperCase(),
      searchTxt : elem.name.toUpperCase() + ", " +
                  elem.matNr.toUpperCase(),
      keys      : elem.keys,
    }
  })
  keys          = keys
  matches       = []
  filteredKeys  = []
  borrower      = null
  overdueTransp = []

  constructor() { }

  ngOnInit() {}

  _trg_sign_pop() {
    document.getElementById('popup-sign').style.display =
      'grid'
    document.getElementById('gc').style.filter =
      'grayscale(0.5) blur(10px)'
  }

  _sign() {
    document.getElementById('popup-sign').style.display =
      'none'
    document.getElementById('popup-lend').style.display =
      'grid'

    setTimeout(() => {
      this._reset()
      document.getElementById('popup-lend').style.display =
        'none'
      document.getElementById('gc').style.filter = 'none'
    }, 2000 )
  }

  _reset() {
    this.search        = false
    this.noKeys        = false
    this.matches       = []
    this.filteredKeys  = []
    this.borrower      = null
    this.overdueTransp = []

    document.getElementById('borrower').value = ''
    document.getElementById('rtnr').value = ''
    document.getElementById('gc').style.filter = 'none'
    document.getElementById('popup-ret-transp').style
      .display = 'none'
    document.getElementById('popup-lend').style.display =
      'none'
  }

  _giveBackTransponder(id) {
    this.keys = this.keys.map(x => {
      if(x.id === id) { x.lend = false }
      return x
    })
    this.overdueTransponders()
  }

  overdueTransponders() {
    this.overdueTransp = this.filteredKeys.filter(
      x => {
        if (!x.lend) { return }
        return x.lend.toUpperCase() === this.borrower.name
               && x.lendTime < Date.now() - OVERDUE
      }
    )

    if ( this.overdueTransp.length > 0 ) {
      // display popup-ret-transp
      document.getElementById('popup-ret-transp')
        .style.display = 'block'
      // set gc.style = blur
      document.getElementById('gc').style.filter =
        'grayscale(0.5) blur(10px)'
    } else {
      // don't display popup-ret-transp
      document.getElementById('popup-ret-transp')
        .style.display = 'none'
      // set gc.style = none
      document.getElementById('gc').style.filter = 'none'
    }
  }

  _search(borrower) {

    const borrower = borrower.toUpperCase()
    this.search = false
    this.noKeys = false
    this.matches = []
    this.filteredKeys = []
    document.getElementById('rtnr').value = ''

    if ( !(borrower === '') ) {
      this.borrowers.forEach(bor => {
        // the borrower exists -> display his keys or error
        // message if borrower has transponders that are
        // overdue
        if(borrower === bor.searchTxt){

          this.borrower = this.borrowers.filter(
            x => x.searchTxt == borrower
          )[0]

          this._filterKeys(false)

          // show popup if borrower needs to return a
          // transponder
          this.overdueTransponders()

          this.search = true
          this.matches = []
        }
        // the borrower value is part of concat -> show
        // it in the autocomplete list
        else if ( bor.searchTxt.includes(borrower) ) {
          this.matches.push({
            input   : borrower,
            data    : bor.searchTxt,
            iter    : bor.searchTxt[Symbol.iterator](),
          })
        }
      })
    }
  }

  _setBor(entry, borrowerInput) {
    this._search(entry)
    borrowerInput.value = entry
  }

  _filterKeys(keyOrRoom) {
    if (keyOrRoom || keyOrRoom === '') {
      this.noKeys = false
      this.filteredKeys = this.keys.filter(
        x => (
          x.id.includes(keyOrRoom)
          ||
          x.opens.filter(y => y.includes(keyOrRoom))
            .length != 0
          ) && this.borrower.keys.includes(x.id)
      )
    } else {
      this.filteredKeys = this.keys.filter(
        x => this.borrower.keys.includes(x.id)
      )
    }

    if ( this.filteredKeys.length == 0) {
      this.noKeys = true
    }

  }
}
