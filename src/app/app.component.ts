import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 idly: number = 12;
 date = new Date();
 items=[
   {id:1,name:'Idly'},
   {id:2,name:'Dosa'},
   {id:3,name:'Poori'},
   {id:4,name:'Chapathi'},
   {id:5,name:'Naan'}
 ]

  validateLength()
  {
    if(this.idly >= 5) return true;

    return false;

  }
}
