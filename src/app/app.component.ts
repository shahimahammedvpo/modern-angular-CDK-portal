import { Component,  ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day5';

@ViewChild('container',{read:ViewContainerRef})
container !: ViewContainerRef;

showStudent(){
  this.container.clear();
  this.container.createComponent(StudentComponent)
}

showTeacher(){
  this.container.clear();
  this.container.createComponent(TeacherComponent);
}


}
