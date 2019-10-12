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
    editOne:any = [];
    editted:any;
    picked:boolean;
    playing:any = [];

    constructor(private _httpService: HttmService) { }
    ngOnInit() {
        this.getAllPlayers();
        this.newPlayer = {name:"", gold: 0}

    }

    createNewPlayer() {
        let observable = this._httpService.createPlayer(this.newPlayer);
        observable.subscribe(data => {
            console.log("new player", data);
            this.newPlayer = {name: "", gold: 0};
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
    deletePlayer(params:string){
        let observable = this._httpService.deletePlayer(params);
        observable.subscribe(deleted =>{
            console.log("user deleted");
            this.getAllPlayers();
        })
    }
    getPlayer(param: string){
        let observable = this._httpService.getPlayer(param);
        observable.subscribe(editData => {
            this.editOne = editData;
        })
    }
    editPlayer(param: string){
        let observable = this._httpService.editPlayer(param, this.editOne);
        observable.subscribe(newName => {
            console.log('made it here', newName)
        })
        this.editOne = [];
        this.getAllPlayers();

    }
    pickPlayer(param:string){
        let observable = this._httpService.getPlayer(param);
        observable.subscribe(playerPicked => {
            this.picked = true;
            this.playing = playerPicked;
        })
    }
 
}
