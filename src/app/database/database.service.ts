import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DatabaseService {
  private apiUrl = 'http://localhost:8000/api/';  // URL to web API
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAll(table: string): Promise<any> {
    return this.http
      .get(this.apiUrl + table, {headers: this.headers})
      .toPromise()
      .then(res => res )
      .catch(err => console.log(err));
  }

  getSome(table: string, id: string ): Promise<any> {
    return this.http
      .get(this.apiUrl + table + '/' + id, {headers: this.headers})
      .toPromise()
      .then(res => res )
      .catch(err => console.log(err));
  }

  create(table: string, data): Promise<any> {
    return this.http
      .post(this.apiUrl + table + '/create', data, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  update(table: string, id: string, data): Promise<any> {
    return this.http
      .put(this.apiUrl + table + '/update/' + id, data, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  delete(table: string, id: string): Promise<any> {
    return this.http
      .get(this.apiUrl + table + '/delete/' + id, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }
}

interface Result {
  result: string;
  data?: object[];
}
