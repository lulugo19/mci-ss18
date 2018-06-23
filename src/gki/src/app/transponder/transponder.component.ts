import { Component, OnInit } from '@angular/core';

import { borrowers, keys } from '../../../dat/borrowers';

// 14 std -> hours the building is open (?)
const OVERDUE = 14*60*60*1000

@Component({
  selector: 'app-transponder',
  templateUrl: './transponder.component.html',
  styleUrls: ['./transponder.component.css']
})
export class TransponderComponent implements OnInit {

  keys         = keys.filter(x => x.lend)
    .map(x => {
      if ( Date.now() - x.lendTime > OVERDUE ) {
        x['time'] = ( Math.floor(
          (Date.now() - x.lendTime - OVERDUE)/1000/60/60
        ) as string ) + " hour(s) overdue"
        x['overdue'] = true
      } else {
        x['time'] = ( Math.floor(
          (Date.now() - x.lendTime) / 1000 / 60 / 60
        ) as string ) + " hour(s) ago"
        x['overdue'] = false
      }
      return x
    })
  filteredKeys = this.keys
  borrowers    = borrowers
  filLen = 0

  constructor() { }

  ngOnInit() { console.log(Date.now()) }

  _filterKeys(tnr) {
    if ( tnr === '' ) {
      this.filteredKeys = this.keys
    } else {
      this.filteredKeys = this.keys.filter(
        x => x.id.includes(tnr) || x.lend.includes(tnr)
      )
    }
  }
}
