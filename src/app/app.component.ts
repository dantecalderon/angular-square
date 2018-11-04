import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSquare'
  lugares:any = [
    { plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia'},
    { plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pasadita'},
    { plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria'},
    { plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Alfabetería'},
    { plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'YOutube'},
    { plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'otra cosa'}
  ];
  lat: number = 4.6560663;
  lng: number = -74.0595918;
  constructor() {

  }
}
