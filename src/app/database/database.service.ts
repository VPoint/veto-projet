import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
}
