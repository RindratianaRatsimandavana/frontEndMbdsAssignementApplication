import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000/';


  loginEleve(credentials: { email: string | null | undefined; password: string | null | undefined; }): Observable<any> {
    return this.http.post<any>(this.uri + 'loginEleve', credentials);
  }

  logOutEleve(): Observable<any> {
    return this.http.get<any>(this.uri + 'logoutEleve');
  }
}
