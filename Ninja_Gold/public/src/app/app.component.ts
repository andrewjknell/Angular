import { Component, OnInit } from '@angular/core';
import { HttmService } from './httm.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    players: any = [];
    newPlayer: any;


    constructor(private _httpService: HttmService) { }

    editOne:any = [];
    ngOnInit() {
        this.newPlayer = {name:""}

    }

    createNewPlayer() {
        let observable = this._httpService.createPlayer(this.newPlayer);
        observable.subscribe(data => {
            console.log("new player", data);
            this.newPlayer = {name: ""};
            this.getAllPlayers();
        });
    }
    getAllPlayers() {
        let observable = this._httpService.getPlayers();
        observable.subscribe(allData => {
            console.log("all players", allData);
            this.players = allData;
        })

    }
    deletePlayer(params:String){
        let observable = this._httpService.deletePlayer(params);
        observable.subscribe(deleted =>{
            console.log("user deleted");
            this.getAllPlayers();
        })
    }
    getPlayer(param: String){
        let observable = this._httpService.getPlayer(param);
        observable.subscribe(editData => {
            this.editOne = editData;
        })
    }
    editPlayer(id: String,param: String){
        let observable = this._httpService.editPlayer(id,param)
    }
}
