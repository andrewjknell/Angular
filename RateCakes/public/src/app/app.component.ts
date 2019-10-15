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
    cakeDisplay:any;
    avgg:number;
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
            // console.log("new cake", data);
            this.newCake = { baker: "", image: "" };
            this.getAllCakes();
        });
    }
    makeRating(cakeId) {
        const cakeUpdate = cakeId;
        // console.log("components", this.newRating);
        const addRating = this.http.makeRating(this.newRating)
        addRating.subscribe(newRate => {
            // console.log("completed", newRate)
            this.updateCake(cakeUpdate, newRate);
        })
    
    }

    updateCake(id, newRate) {
        const cakeRate = this.http.editCake(id, newRate)
        cakeRate.subscribe(data => {
            // console.log("finally did it!!", data)
        })
        this.newRating = {
            rating: "",
            stars: ""
        };
        
    }
    cakeShow(id){
        const avg = id
        const showCake = this.http.getCake(id)
        showCake.subscribe(data => {
            //  console.log("got the cake to show", data);
             this.cakeDisplay = data;
        
        })
        this.cakeAvg(avg)
    }
    cakeAvg(avg){ 
        const getCakeAvg = this.http.getCake(avg)
        getCakeAvg.subscribe((data:any) => {
            let sum = 0;
            for(let i = 0; i < data.ratings.length; i++){
                sum += data.ratings[i].stars;
            }
            let average = sum/data.ratings.length;
            this.avgg = average
            console.log(this.avgg)
           
        })
    }
}
