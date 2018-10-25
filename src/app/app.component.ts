import { Component, OnChanges,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,OnDestroy {
  title = 'ng6-http-auth';

  constructor(){
    console.log("constructor");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnInit(){
    console.log("ngOnInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }


}
