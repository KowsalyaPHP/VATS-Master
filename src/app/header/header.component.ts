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
   ngAfterViewInit() {
    setTimeout(() => {
      var sessionId = sessionStorage.getItem("uniqueSessionId");
      if(sessionId){      
        this.Session=true;
      }     
    }, 1);
  }
   isLoggedIn(){
    var sessionId = sessionStorage.getItem("uniqueSessionId");
    if(sessionId){      
      return true;
    }
    else{
      return false;
    }
  }
  
  ngOnInit() {
  }

}
