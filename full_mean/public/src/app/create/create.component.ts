import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    newObj: any = {
        name: "",
        qty: Number,
        price: Number
    };
    errors = [];

    constructor(
        private http: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
    }
    postObj() {
        const ob = this.http.createObj(this.newObj)
        ob.subscribe((data: any) => {
            if (data.message === 'lose') {
                this.errors = this.errorHelper(data.err.errors);
            }
            else {
                this.errors = [];
                this.newObj = {
                    name: "",
                    qty: Number,
                    price: Number
                }
                this.goHome();
            }
        })
    }
    goHome() {
        this._router.navigate(['/products'])
    }
    errorHelper(errorMessage: any) {
        const errorArr = [];
        // tslint:disable-next-line:forin
        for (const error in errorMessage) {
            errorArr.push({message: errorMessage[error].message });
        }
        return errorArr;
    }

}
