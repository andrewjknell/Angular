import { Component, OnInit } from "@angular/core";
import { CakeService } from "./cake.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    constructor(private http: CakeService) { }
    cakes: any = [];
    newCake: any = {
        baker: "",
        image: ""
    };
    newRating: any = {
        rating: "",
        stars: ""
    };
    ngOnInit() {
        this.getAllCakes();
    }

    getAllCakes() {
        const cakes = this.http.getCakes();
        cakes.subscribe(cakes => {
            this.cakes = cakes;
            // console.log("all cakes");
        });
    }
    addCake() {
        const makeCake = this.http.makeCake(this.newCake);
        makeCake.subscribe(data => {
            console.log("new cake", data);
            this.newCake = { baker: "", image: "" };
            this.getAllCakes();
        });
    }
    makeRating(cakeId) {
        const cakeUpdate = cakeId;
        console.log("components", this.newRating);
        const addRating = this.http.makeRating(this.newRating)
        addRating.subscribe(newRate => {
            console.log("completed", newRate)
            this.updateCake(cakeUpdate, newRate);
        })
    }

    updateCake(id, newRate) {
        const cakeRate = this.http.editCake(id, newRate)
        cakeRate.subscribe(data => {
            console.log("finally did it!!", data)
        })
        this.newRating = {
            rating: "",
            stars: ""
        };
    }
}
