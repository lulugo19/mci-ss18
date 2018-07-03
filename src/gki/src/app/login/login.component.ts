import { Component, OnInit, Renderer} from '@angular/core';
import { Router } from '@angular/router';

import { gkCredentials } from '../../../dat/gkcredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valid    = true
  redirect = false

  constructor(
    private router: Router,
    private renderer: Renderer
  ) {
    renderer.listenGlobal('document', 'keydown', (event)=>{
      if(event.keyCode === 13) {
        let mail = document.getElementById('mail').value
        let pw   = document.getElementById('pw').value
        this.auth(mail, pw)
      }
    }
  }

  ngOnInit() {}

  auth(mail, pw) {

    if ( gkCredentials.some(x => {
      return x.mail === mail && x.pw === pw
    }) ) {
      this.valid = true
      this.redirect = true
      // do redirect
      this.router.navigate(['lend'])
    } else {
      this.valid = false
    }
  }
}
