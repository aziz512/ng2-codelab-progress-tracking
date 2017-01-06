import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  rawFeedbackList: Array<any> = [];
  currentFeedbackList = [];
  dates:Array<string> = [''];

  constructor(private angularFire: AngularFire) { }

  ngOnInit() {
    this.angularFire.auth.login().then(authData => {
      this.angularFire.database.list('/feedback_test').subscribe(list => {
        list.forEach((val, ind) => {
          if(typeof val.state === 'string')
          {
            val.state = JSON.parse(val.state);
          }
          let stringDate = new Date(val.timestamp).toDateString();
          if(this.dates.indexOf(stringDate) < 0){
            this.dates.push(stringDate);
          }
        });
        this.dates.sort((a,b) => {
          return new Date(a).getTime() - new Date(b).getTime();
        });
        this.rawFeedbackList = list;
        this.currentFeedbackList = this.rawFeedbackList;
      });
    });
  }

  filterByDate(date:string){
    this.currentFeedbackList = date ? this.rawFeedbackList.filter(x => new Date(x.timestamp).toDateString() === date) : this.rawFeedbackList;
  }

  simulateFeedback(id){
      var win = window.open('http://localhost:4200/#simulate='+id, '_blank');
      win.focus();
  }
}
