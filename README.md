# joaquincaldera-web

Sitio de Joaquín Caldera (páginas web para comercios de Toay y Santa Rosa) con tres demos:

- `/demos/rotiseria` — menú con carrito que arma el pedido por WhatsApp.
- `/demos/peluqueria` — reserva de turnos por WhatsApp.
- `/demos/veterinaria` — servicios, guardia y pet shop con buscador.

Hecho con [Astro](https://astro.build) y Tailwind CSS. Es un sitio estático: no usa base de datos.

## Comandos

Requiere Node.js 24 o superior.

```sh
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Datos de contacto

El número de WhatsApp y los datos de contacto están en `src/config.ts`.

## Publicación en Cloudflare

Cloudflare → Workers & Pages → Crear → Importar un repositorio de GitHub → elegir este repo.

- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Variable de entorno: `NODE_VERSION` = `24` (si Cloudflare no toma `.node-version`)

Cada push a `main` vuelve a publicar el sitio solo.
