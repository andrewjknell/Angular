import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  title ="hello";
  constructor() { }
  ngOnInit() {
  }

}
