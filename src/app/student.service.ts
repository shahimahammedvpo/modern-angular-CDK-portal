import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students=signal<string[]>([
    'shahim',
    'ronaldo',
    'messi'
  ]);

  addStudent(name:string){
this.students.update(list=>[...list,name]);
  }
}
