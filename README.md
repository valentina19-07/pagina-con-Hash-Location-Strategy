# DevHub: Angular con Hash Location Strategy

Laboratorio de Pipelines, Arquitectura de Software, Unidad Central del Valle del Cauca.

## Integrantes
- Juan Fernando Vargas
- Valentina Gonzales Mejia

## Enlaces
- Aplicación desplegada: https://valentina19-07.github.io/pagina-con-Hash-Location-Strategy/
- Repositorio: https://github.com/valentina19-07/pagina-con-Hash-Location-Strategy

## Estrategia de enrutamiento
Usa `withHashLocation()`. Las rutas llevan `#` (`/#/home`, `/#/projects`, `/#/contact`).
El fragmento después de `#` nunca llega al servidor, por eso GitHub Pages no devuelve 404
y no se necesita configuración adicional.

## Pipeline (`.github/workflows/deploy.yml`)
Checkout → Node 24 → `npm ci` → pruebas unitarias → build con `--base-href` → publicación en GitHub Pages.

## Comandos
`npm install` · `npm start` · `npm test` · `npm run build`
