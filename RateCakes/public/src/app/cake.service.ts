import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { }

  getCakes(){return this.http.get('/cake')}
  getCake(id){return this.http.get('/cake/'+id)}
  makeCake(cake){return this.http.post('/cake', cake)}
  editCake(id, cake){return this.http.put('/cake/'+id, cake)}
  deleteCake(id){return this.http.delete('/cake/'+id)}

  getRatings(){return this.http.get('/rating')}
  getRating(id){return this.http.get('/rating')}
  makeRating(rating){return this.http.post('/rating/', rating)}
  editRating(id, rating){return this.http.put('/rating/'+id, rating)}
  deleteRating(id){return this.http.delete('/rating/'+id)}

}
