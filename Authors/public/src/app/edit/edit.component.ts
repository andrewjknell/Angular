import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    constructor(
        private http: AuthorService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    id: any;
    authorToEdit: any = [];

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.id = params['id']; 
            this.getAuthorToEdit(this.id);         
        })
    }

    getAuthorToEdit(id) {
        const author = this.http.getAuthor(this.id)
        author.subscribe(data => {
            this.authorToEdit = data;
        })
    }
    editThisAuthor(){
        const edit = this.http.editAuthor(this.id, this.authorToEdit)
        edit.subscribe(data => {
            this.authorToEdit = {
                name: ""
            }
            this.gotHome();
        })
    }
    gotHome(){
        this._router.navigate(['/home'])
    }


}
