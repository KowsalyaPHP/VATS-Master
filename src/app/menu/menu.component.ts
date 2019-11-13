import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  my_menus = [
    {menu: "Menu 1", submenu: ["submenu1", "submenu2"]}, 
    {menu: "Menu 2", submenu: ["submenua", "submenub"]},
    {menu: "Menu 3", submenu: [""]}
  ];
  current: number = 0;
  items: Array<any>;

  objectKeys = Object.keys;
   my_menu = [
    {menu:[{main:'Menu 1', submenu: [{sub:'Sub Menu 1', route:'/home1'}, {sub:'Sub Menu 2', route:'/home2'}]}]},
    {menu:[{main:'Menu 2',submenu: [{sub:'Sub Menu 1', route:'/about'}, {sub:'Sub Menu 2', route:'about1'}, {sub:'Sub Menu 3',route:'about2'}]}]},
    {menu:[{main:'Menu 3',submenu:[]}]}
  ];
  menuList = [];

  constructor(private MenuServices: MenuService,private routerObj: Router) { 
    this.getRoleBasedMenu();
  }

  ngOnInit() {
  }

  getRoleBasedMenu() {
   this.MenuServices.getMenuList().subscribe(
      response => {
        if (response != "No data") {
          if (response == "Session MisMatch") {
            this.routerObj.navigate(["/login"]);
          } else {     
            this.menuList = response;

          }
        } else {
            console.log("something is wrong with Service Execution");
        }
      },
      error => console.log(error)
    );
  }
}
