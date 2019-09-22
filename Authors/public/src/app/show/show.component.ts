import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    constructor(
        private http: AuthorService,
        private _route: ActivatedRoute,
        private _router: Router
        ) { }
    authors: any = [];

    ngOnInit() {

        this.getAllAuthors()
    }

    getAllAuthors() {
        const all = this.http.getAuthors()
        all.subscribe(data => {
            this.authors = data;
        })
    }
    deleteOne(id){
        const deleted = this.http.deleteAuthor(id)
        deleted.subscribe(data => console.log('deleted'))
        this.getAllAuthors();
    }

}
