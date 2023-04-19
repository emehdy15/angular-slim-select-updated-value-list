import { Component, OnInit } from '@angular/core';
import { concatMap, from, of } from 'rxjs';
 

@Component({
  selector: 'form-a',
  templateUrl: './form-a.component.html' 
})
export class FormAComponent implements OnInit {
  data:any={id:3};
  constructor() { }
  options= [
    
    { name: 'Value 1', id: 1},
    { name: 'Value 2', id: 2},
    { name: 'Value 3', id: 3 },
    { name: 'Value 4', id: 4 },
  
  ];
  ngOnInit() {
    from([ this.func1  ]).pipe(
      concatMap(promiseFn => promiseFn())
    ).subscribe(v=>this.data=v)

  }
    func1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({id:2,msg:'Promise resolved after 3 seconds'});
      }, 3000);
    });
  }
}