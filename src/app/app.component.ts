import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPipes';
  name:string='meryem onbasi ugurlu'
  date:string=Date()
  currency:number=230000.50

  filterText:string='';

  users:{name:string,lastName:string}[]=[
    {name:'Taner',lastName:"Saydam"},
    {name:'Mansur',lastName:"Yavas"},
    {name:'Tarkan',lastName:"Kutlu"},
    {name:'Tugay',lastName:"Yavas"},
  ]
}
