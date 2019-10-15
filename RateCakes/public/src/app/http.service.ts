import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getcake() {
    return this.http.get('/cake');
  }

  getTask(id) {
    return this.http.get('/cake/' + id);

  }

  createTask(task) {
    return this.http.post('/cake', task);
  }

  editTask(id, task) {
    return this.http.put('/cake/' + id, task);
  }

  deleteTask(id) {
    return this.http.delete('/cake/' + id);
  }
  postToServer(num) {
    return this.http.post('/cake', num);
  }

}
