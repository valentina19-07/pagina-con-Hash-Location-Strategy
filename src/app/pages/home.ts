import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <span class="tag">{{ estrategia }}</span>
      <h1>Bienvenidos a DevHub</h1>
      <p class="lead">
        Aplicación Angular desplegada automáticamente con GitHub Actions
        y publicada en GitHub Pages.
      </p>
      <a class="btn" routerLink="/projects">Ver proyectos</a>
      <a class="btn btn-outline" routerLink="/contact">Contacto</a>
    </section>
  `,
})
export class Home {
  readonly estrategia = 'HashLocationStrategy';
}

