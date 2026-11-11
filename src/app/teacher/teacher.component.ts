import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
count=signal(0);

increase(){
  this.count.update(value=>value+1)
}

decrease(){
  this.count.update(value=>value-1);
}

reset(){
  this.count.set(0);
}

}
