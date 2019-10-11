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
        let pokeAbility = '';
        const bulb = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        bulb.subscribe(data => {
            console.log("my favorite pokemon is ", data['name']);

            for (let x of data['abilities']) {
                console.log("ability: ", x.ability.name)
            }
            pokeAbility = data['abilities'][1].ability.url;
            const pokies = this._http.get(pokeAbility);
            pokies.subscribe(pokes => {
                console.log(pokes['pokemon'].length + " pokemon have the same ability");
                for (let y of pokes['pokemon']){
                    console.log('pokemon name: ', y.pokemon.name);   
                }
            })
        });
    }
}
