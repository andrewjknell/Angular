import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }
    getObjs() { return this.http.get('/obj') }
    getObj(id) { return this.http.get('/obj/' + id) }
    createObj(obj) { return this.http.post('/obj', obj) }
    editObj(id, obj) { return this.http.put('/obj/' + id, obj) }
    deleteObj(id) { return this.http.delete('/obj/' + id) }

    getDatas() { return this.http.get('/data') }
    getData(id) { return this.http.get('/data/' + id) }
    createData(objId, data) { return this.http.post('/data/' + objId, data) }
    editData(id, data) { return this.http.put('/data/' + id, data) }
    deleteData(id) { return this.http.delete('/data/' + id) }
}
