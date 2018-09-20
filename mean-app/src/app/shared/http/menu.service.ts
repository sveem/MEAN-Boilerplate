import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMongoData(): Observable<any> {
    const url = '/api/menu/mongo';
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });

    return this.http.get<any>(url, { headers: headers });
  }
}
