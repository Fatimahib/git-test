import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-ng';
  name: string = 'Your Name';
  age: number = 25;
   isStudent: boolean = true;
  skills: string[] = ['TypeScript', 'Angular', 'HTML'];

    count: number = 0;

  incrementCount(): void {
      //this.count = "one"; 

    this.count++;
  }
}
