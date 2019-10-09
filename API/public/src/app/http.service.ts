import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
        this.getPokemon();
    }
    getPokemon() {
        let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        pokemon.subscribe(data => {
            console.log("my favorite pokemon is ", data['name']);

            for (let x of data['abilities']) {
                console.log("ability: ", x.ability.name)
            }
        });
    }
}
