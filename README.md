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

## Publicación en Cloudflare Workers

El Worker `joaquincaldera` está conectado a este repo con Workers Builds: cada push a `main` compila y publica solo.

- Dirección: https://joaquincaldera.jcaldera2001.workers.dev
- Comando de build: `npm run build`
- Comando de deploy: `npx wrangler deploy` (lee `wrangler.jsonc`)
- Node: lo toma de `.node-version` (24)
