import { Component, OnInit, Input } from '@angular/core';
import { CakeService } from '../cake.service';


@Component({
    selector: 'app-cakes',
    templateUrl: './cakes.component.html',
    styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
    @Input() cakeShow: any;
    @Input() average: number;
    constructor(private http: CakeService) { }

    ngOnInit() {
    }

}
