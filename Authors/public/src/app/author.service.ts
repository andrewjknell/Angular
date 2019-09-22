import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(){return this.http.get('/author')}
  getAuthor(id){return this.http.get('/author/'+id)}
  makeAuthor(author){return this.http.post('/author', author)}
  editAuthor(id, author){return this.http.put('/author/'+id, author)}
  deleteAuthor(id){return this.http.delete('/author/'+id)}
}
