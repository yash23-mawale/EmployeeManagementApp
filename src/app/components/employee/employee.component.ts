import { Component, inject } from '@angular/core';
import { EmployeeCrudService } from '../../services/employee-crud.service';
import { ApiResponse, ApiResponseSingleEmp, empaddup, employee, patchJson } from '../../model/interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  {
  
  http = inject(EmployeeCrudService)
  arr:employee[] = []

  emp:empaddup={
    name:"",
    department:"",
    salary:0
  }
  employee:employee={
    id:0,
    name:"",
    department:"",
    salary:0
  }
  patchJson:patchJson[]=[{
    op:"replace",
    path:"",
    value:""
  }]

  //Get all employee
  getAllEmployee(): void{
    this.http.getAllEmployee().subscribe((res:ApiResponse)=>{
      this.arr=res.data
      console.log(this.arr)
    })
  }

  //Get employee by id
  getempid:number=0
  getEmployeeById(id:number):void{
    this.http.getEmployeeById(id).subscribe((res:ApiResponseSingleEmp)=>{
      this.employee=res.data
      console.log(res)
    })
  }

  //Post employee in database
  addEmployee(f:NgForm):void{

    console.log(f.value)
    this.emp.name=f.value.name
    this.emp.department=f.value.department
    this.emp.salary=f.value.salary

    this.http.addEmployee(this.emp).subscribe((res:empaddup)=>{
      console.log(res)
      alert("Employee Added !")
      this.getAllEmployee()
    })
  }

  //Delete employee by id
  deleteempid:number=0;
  deleteEmployeeById(id:number):void{
    this.http.deleteEmployeeById(id).subscribe((res:employee)=>{
      console.log(res)
      alert("Employee Deleted !")
      this.getAllEmployee()
    })
  }

  //Update whole employee
  updateEmployee(f:NgForm):void{

    console.log(f.value)
    this.employee.id=f.value.id
    this.employee.name=f.value.name
    this.employee.department=f.value.department
    this.employee.salary=f.value.salary

    this.http.updateEmployee(this.employee,f.value.id).subscribe((res:employee)=>{
      console.log(res)
      alert("Employee Info Updated")
      this.getAllEmployee()
    })
  }

  //Update name/department/salary of employee by id
  UpdateEmployeeNameOrDepartmentOrSalary(f:NgForm):void{
    console.log(f.value)
    this.patchJson[0].path=f.value.path
    this.patchJson[0].value=f.value.value

    this.http.UpdateEmployeeNameOrDepartmentOrSalary(this.patchJson,f.value.id).subscribe((res:employee)=>{
      console.log(res)
      alert("Employee "+this.patchJson[0].path+" Updated !")
      this.getAllEmployee()
    })
  }
}
