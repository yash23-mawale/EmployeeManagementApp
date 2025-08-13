import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCrudService {

  constructor(private http:HttpClient) { }

    //Get all student
    getAllStudent():Observable<any[]>{
      return this.http.get<any[]>(`http://192.168.1.230:5221/api/students`)
    }

    // //Get student by id
    // getStudentById():Observable<>{

    // }
  
}
