import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Session=false;
  constructor() { 

   }

   isLoggedIn(){
    var sessionId = sessionStorage.getItem("uniqueSessionId");
    if(sessionId){
      this.Session=true;
      return true;
    }
    else{
      return false;
    }
  }
  
  ngOnInit() {
  }

}
