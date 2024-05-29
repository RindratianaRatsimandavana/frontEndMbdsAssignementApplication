import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignement } from '../modele/assignement';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  uri = 'https://expressbackmbdsmadagascar2024.onrender.com/assignment/';

  addAssignment(assignment: Assignement): Observable<any> {
    return this.http.post<Assignement>(this.uri, assignment);
  }

  // updateAssignment(assignment: Assignement): Observable<any> {
  //   //return of("Assignment modifié avec succès");
  //   return this.http.put<Assignement>(this.uri + assignment._id, assignment);
  // }

  // getAssignmentByPromotion(id_promotion : Number): Observable<any> {
  //   //return of("Assignment modifié avec succès");
  //   return this.http.get<Assignement>(this.uri + id_promotion);
  // }

  // getAssignmentByMatiere(id_matiere : Number): Observable<any> {
  //   //return of("Assignment modifié avec succès");
  //   return this.http.get<Assignement>(this.uri +id_matiere);
  // }

  getAssignmentById(id : String): Observable<any> {
    return this.http.get<Assignement>(this.uri +"id/"+id);
  }

  getAssignmentByProf(): Observable<any> {
    return this.http.get<Assignement>(this.uri + "prof");
  }

}
