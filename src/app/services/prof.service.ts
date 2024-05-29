import { Injectable } from '@angular/core';
import { Prof } from '../modele/prof';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http: HttpClient) { }

  uri = 'https://expressbackmbdsmadagascar2024.onrender.com/';


  loginProf(credentials: { email: string | null | undefined; password: string | null | undefined; }): Observable<any> {
    return this.http.post<any>(this.uri + 'loginProf', credentials);
  }

  logOutProf(): Observable<any> {
    return this.http.get<any>(this.uri + 'logoutProf');
  }


}
