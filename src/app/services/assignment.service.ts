import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignement } from '../modele/assignement';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000/';

  addAssignment(assignment: Assignement): Observable<any> {
    return this.http.post<Assignement>(this.uri + 'assignment', assignment);
  }

  updateAssignment(assignment: Assignement): Observable<any> {
    //return of("Assignment modifié avec succès");
    return this.http.put<Assignement>(this.uri + "assignment/" + assignment._id, assignment);
  }

  getAssignmentByPromotion(id_promotion : Number): Observable<any> {
    //return of("Assignment modifié avec succès");
    return this.http.get<Assignement>(this.uri + "/assignment" + id_promotion);
  }

  getAssignmentByMatiere(id_matiere : Number): Observable<any> {
    //return of("Assignment modifié avec succès");
    return this.http.get<Assignement>(this.uri + "assignment/" + id_matiere);
  }

}
