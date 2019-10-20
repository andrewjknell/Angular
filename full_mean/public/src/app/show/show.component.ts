import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    constructor(
        private http: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }
    zero: boolean = false;
    id: any;
    objToShow: any = [];

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.getObjToShow(this.id);
        })

    }

    getObjToShow(id) {
        const ob = this.http.getObj(id)
        ob.subscribe(data => {
            this.objToShow = data;
            if(this.objToShow.qty == 0){
                this.zero = true;
            } else {
                this.zero = false;
            }

        })
    }
    deleteObj(id) {
        const ob = this.http.deleteObj(id)
        ob.subscribe(data => {
            this.gotHome();
        })
    }
    gotHome() {
        this._router.navigate(['/products'])
    }

}
