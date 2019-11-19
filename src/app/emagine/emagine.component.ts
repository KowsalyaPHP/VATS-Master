import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emagine',
  templateUrl: './emagine.component.html',
  styleUrls: ['./emagine.component.css']
})
export class EmagineComponent implements OnInit {

  constructor(private routerObj: Router) { }

  ngOnInit() {
  }

}
