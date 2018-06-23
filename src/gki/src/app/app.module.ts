import { BrowserModule  } from '@angular/platform-browser';
import { NgModule       } from '@angular/core';
import { RouterModule   } from '@angular/router';

import { AppComponent   } from './app.component';
import { LoginComponent } from './login/login.component';
import { LendComponent  } from './lend/lend.component';
import {
  TransponderComponent
} from './transponder/transponder.component';

const routes = [
  { path: '',            component: LoginComponent       },
  { path: 'lend',        component: LendComponent        },
  { path: 'transponder', component: TransponderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LendComponent,
    TransponderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
