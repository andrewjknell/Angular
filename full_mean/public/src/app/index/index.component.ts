import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http: HttpService) { }

  all: any = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const obs = this.http.getObjs()
    obs.subscribe(data => {
      this.all = data;
    })
  }

  deleteObj(id) {
    const ob = this.http.deleteObj(id)
    ob.subscribe(data => {
      this.getAll();
    })
  }
}
