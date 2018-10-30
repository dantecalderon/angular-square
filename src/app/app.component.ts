import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSquare'
  lugares:any = [
    {active: true, nombre: 'Floreria la gardenia'},
    {active: false, nombre: 'Donas la pasadita'},
    {active: true, nombre: 'Veterinaria'},
    {active: true, nombre: 'Alfabetería'},
    {active: false, nombre: 'YOutube'},
    {active: true, nombre: 'otra cosa'}
  ];
  lat: number = 4.6560663;
  lng: number = -74.0595918;
  constructor() {

  }
}
