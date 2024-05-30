import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contenu } from '../modele/contenu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenuService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000/';

  addContenu(formData: FormData): Observable<any> {
    console.log('ici fromdta ',formData)
    return this.http.post<Contenu>(this.uri + 'contenu', formData);
  }

  updateContenu(contenu: Contenu): Observable<any> {
    return this.http.put<Contenu>(this.uri + "contenu/" + contenu._id, contenu);
  }

  updateNoteContenu(credentials: { note: string | null | undefined }, contenuId: Number): Observable<any> {
    return this.http.patch<Contenu>(this.uri + "contenu/" + contenuId, credentials);
  }

  getContenuById(id_: Number): Observable<any> {
    return this.http.get<Contenu>(this.uri + "contenu/" + id_);
  }

  getContenuByEleveByAssignment(id_eleve: Number, id_assignment: Number): Observable<any> {
    return this.http.get<Contenu>(this.uri + "contenu/eleve/" + id_eleve + "/assignment/" + id_assignment);
  }
  
  getContenuByAssignment(id_assignment: Number): Observable<any> {
    return this.http.get<Contenu>(this.uri + "contenu/assignment/" + id_assignment);
  }
}
