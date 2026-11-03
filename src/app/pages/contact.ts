import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h1>Contacto</h1>
    <p class="lead">Somos el equipo detrás de este laboratorio.</p>
    <div class="grid">
      <article class="card">
        <h3>Juan Fernando Vargas</h3>
        <p>Estudiante de Ingeniería de Sistemas</p>
        <p><a href="https://github.com/juanvargas-code">GitHub</a></p>
      </article>
      <article class="card">
        <h3>Valentina Gonzales Mejia</h3>
        <p>Estudiante de Ingeniería de Sistemas</p>
        <p><a href="https://github.com/valentina19-07">GitHub</a></p>
      </article>
    </div>
    <p class="muted">Arquitectura de Software · Unidad Central del Valle del Cauca</p>
  `,
})
export class Contact {}
