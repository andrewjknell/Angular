import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttmService {

  constructor(private _http: HttpClient) { }
  
  getPlayers() {
    return this._http.get('/players');
  }

  getPlayer(id) {
    return this._http.get('/player/' + id);

  }

  createPlayer(player) {
    console.log("new player");
    return this._http.post('/player', player);
  }

  editPlayer(id, player) {
    return this._http.put('/player/' + id, player);
  }

  deletePlayer(id) {
    return this._http.delete('/player/' + id);
  }


}
