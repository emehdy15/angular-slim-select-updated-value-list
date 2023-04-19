import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import SlimSelect from 'slim-select';

@Component({
  selector: 'slim-select',
  templateUrl: './slim-select.component.html' 
})
export class SlimSelectComponent implements OnChanges  {
@ViewChild('slim') slimSelect: any;
@Input()  options:any[]=[];
@Input()  form:any={};
@Input()  fld:string="";
@Input()  empty:string="--select--";
@Input()  disabled= false;
@Input()  showSearch= true;
@Input()  searchPlaceholder= 'Search';
@Input()  searchText= 'No Results';
  constructor() { } 
  slimInstance :SlimSelect ;
  ngAfterViewInit() {
    let data=[];
    data.push({ text: this.empty, value: ""} )
    this.options.forEach(o=>data.push({text: o.name, value:o.id }))
     
   this.slimInstance= new SlimSelect({
      select: this.slimSelect.nativeElement,data:data,
      settings: {
        disabled:this.disabled,
        showSearch:this.showSearch,
        searchPlaceholder:this.searchPlaceholder,
        searchText:this.searchText,

      },
      events: { afterChange: (opts) => this.form[this.fld]=opts[0].value  }
    });
    this.slimInstance.setSelected  ( this.form[this.fld]); 
    
    
  }
setSelected(val)
{

}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.form && this.slimInstance ) {
      this.slimInstance.setSelected  ( this.form[this.fld]);
    }
  }

}