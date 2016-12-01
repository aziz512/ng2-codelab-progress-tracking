import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyBDg_JEXDrn7iuvGR-xrcU1bmjWc-uxmgA",
  authDomain: "ng2-codelab.firebaseapp.com",
  databaseURL: "https://ng2-codelab.firebaseio.com",
  storageBucket: "ng2-codelab.appspot.com",
  messagingSenderId: "554098956955"
};
const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
