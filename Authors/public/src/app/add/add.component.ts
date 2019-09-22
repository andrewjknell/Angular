import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    newAuthor:any = {
        name: ""
    }
    constructor(
        private http: AuthorService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
    }
    addAuthor(){
        const author = this.http.makeAuthor(this.newAuthor)
        author.subscribe(data => {
            this.newAuthor = { name: ""};
            this.gotHome();
        })
    }
    gotHome(){
        this._router.navigate(['/home'])
    }

}
