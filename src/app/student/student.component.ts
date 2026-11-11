import { Component, inject } from '@angular/core';
import { of } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(){
    of(10,20,30).subscribe(value=>{
      console.log(value)
    })
  }

  studentService=inject(StudentService);

  addStudent(){
    this.studentService.addStudent('vishnu');
  }
}
