import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
    constructor(
        private http: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    id: any;
    objToEdit: any = {
        name: "",
        qty: Number,
        price: Number
    };
    errors: any = [];
    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.getObjToEdit(this.id);
        })
    }
    getObjToEdit(id) {
        const edit = this.http.getObj(id)
        edit.subscribe(data => {
            this.objToEdit = data;
        })
    }
    // postObj(id) {
    //     const edit = this.http.editObj(this.id, this.objToEdit)
    //     edit.subscribe(data => {
    //         this.objToEdit = {
    //             name: "",
    //             qty: Number,
    //             price: Number
    //         }
    //         this.gotHome();
    //     })
    // }
    postObj(id) {
        const ob = this.http.editObj(this.id, this.objToEdit)
        ob.subscribe((data: any) => {
            if (data.message === 'lose') {
                this.errors = this.errorHelper(data.err.errors);
            }
            else {
                this.errors = [];
                this.objToEdit = {
                    name: "",
                    qty: Number,
                    price: Number
                }
                this.goHome();
            }
        })
    }
    reset(id) {
        const edit = this.http.getObj(id)
        edit.subscribe(data => {
            this.objToEdit = data;
        })
    }

    goHome() {
        this._router.navigate(['/products'])
    }
    errorHelper(errorMessage: any) {
        const errorArr = [];
        // tslint:disable-next-line:forin
        for (const error in errorMessage) {
            errorArr.push({ message: errorMessage[error].message });
        }
        return errorArr;
    }

}
