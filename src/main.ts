import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from './forms/forms.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>angular-slim-select-updated-value-list
    </h1>
     
    <form-a></form-a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
