import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dirModel';
  nombre = "";
  nombre2 = "";

  cambiarNombre(): void {
    this.nombre = this.nombre.toLowerCase();
    this.nombre = this.nombre.toUpperCase();
  }

  cambiarNombre2(): void {
    this.nombre2 = this.nombre2.toLowerCase();
    this.nombre2 = this.nombre2.toUpperCase();
  }
}
