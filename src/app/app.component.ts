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
  personas:any = [
    {nombre: 'Bruno', edad: 18},
    {nombre: 'Javier', edad: 19},
    {nombre: 'Henry', edad: 20},
    {nombre: 'Oscar', edad: 16},
    {nombre: 'John', edad: 21}
  ];
  constructor() {

  }
}
