import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <h1>Proyectos</h1>
    <p class="lead">Algunos de los trabajos que hemos desarrollado en el curso.</p>
    <div class="grid">
      <article class="card">
        <span class="tag">Angular</span>
        <h3>Portafolio personal</h3>
        <p>Sitio web de una sola página con navegación entre secciones.</p>
      </article>
      <article class="card">
        <span class="tag">CI/CD</span>
        <h3>Pipeline de despliegue</h3>
        <p>Construcción y publicación automática con GitHub Actions.</p>
      </article>
      <article class="card">
        <span class="tag">Arquitectura</span>
        <h3>Enrutamiento SPA</h3>
        <p>Comparación entre estrategias Hash y Path en hosting estático.</p>
      </article>
    </div>
  `,
})
export class Projects {}
