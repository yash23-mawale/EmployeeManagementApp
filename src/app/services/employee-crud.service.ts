import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiResponseSingleEmp, empaddup, employee, patchJson} from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(private http:HttpClient) { }

  //Get all employee
  getAllEmployee():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`http://192.168.1.239:5271/api/employee`)
  }

  //Get employee by id
  getEmployeeById(id:number):Observable<ApiResponseSingleEmp>{
    return this.http.get<ApiResponseSingleEmp>(`http://192.168.1.239:5271/api/Employee/${id}`)

  }

  //Post employee in database
  addEmployee(emp:empaddup):Observable<empaddup>{
    return this.http.post<empaddup>(`http://192.168.1.239:5271/api/Employee`,emp)
  }

  //Delete employee by id
  deleteEmployeeById(id:number):Observable<employee>{
    return this.http.delete<employee>(`http://192.168.1.239:5271/api/Employee/${id}`)
  }

  //Update whole employee object
  updateEmployee(employee:employee,id:number):Observable<employee>{
    return this.http.put<employee>(`http://192.168.1.239:5271/api/Employee/${id}`,employee)
  }

  //Update name/department/salary of employee by id
  UpdateEmployeeNameOrDepartmentOrSalary(patchJson:patchJson[],id:number):Observable<employee>{
    return this.http.patch<employee>(`http://192.168.1.239:5271/api/Employee/${id}`,patchJson)
  }
}
