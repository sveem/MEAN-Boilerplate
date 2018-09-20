import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFireBaseData(): Observable<any> {
    const url = '/api/home/firebase';
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });

    return this.http.get<any>(url, { headers: headers });
  }
}
