import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  response:any = [];
  firstLetter:any;
  menuList:[];
  username:any;

  constructor(private MenuServices: MenuService,private routerObj: Router) { 
    this.getRoleBasedMenu();
  }

  ngOnInit() {
  }

  getRoleBasedMenu() {

    this.response =JSON.parse(sessionStorage.getItem('Menudetails'));    

    if (this.response != "") {  
        this.menuList = this.response;    
        this.username = sessionStorage.getItem('userName');
        this.firstLetter = sessionStorage.getItem('USERCATEGORY');
      
    } else {
        console.log("something is wrong with Service Execution");
    }
      
    error => console.log(error)
    
  }
}
