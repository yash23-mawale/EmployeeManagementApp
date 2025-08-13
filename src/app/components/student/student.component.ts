import { Component, inject } from '@angular/core';
import { StudentCrudService } from '../../services/student-crud.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  http = inject(StudentCrudService)

  // Get all student
  getAllStudent(): void{
      this.http.getAllStudent().subscribe((res:any[])=>{
        console.log(res)
      })
    }
}
