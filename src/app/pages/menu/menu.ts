import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // Selector de la página de menú.
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  // Lógica para mostrar las opciones del menú.
}
