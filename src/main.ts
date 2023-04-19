import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import  { FormsModule } from "./forms/forms.module"

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <form-a></form-a>
  `,
})
export class App {
  name = 'Angular';
  

}

bootstrapApplication(App);
