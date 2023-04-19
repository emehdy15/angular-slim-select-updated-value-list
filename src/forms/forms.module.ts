import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAComponent } from "./form-a/form-a.component"
import { SlimSelectComponent } from './slim-select/slim-select.component';
 

@NgModule({
  exports:[FormAComponent,SlimSelectComponent],
  imports: [
    CommonModule
  ],
  declarations: [FormAComponent,SlimSelectComponent]
})
export class FormsModule { }