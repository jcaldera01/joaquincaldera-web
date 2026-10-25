# joaquincaldera-web

Sitio comercial de Joaquín Caldera (Toay, La Pampa): vende sitios web a comercios locales. Joaquín no programa; los cambios los hace Claude.

- Stack: Astro 7 + Tailwind CSS 4 (vía `@tailwindcss/vite`), sitio 100 % estático, publicado en Cloudflare Pages (`joaquincaldera.pages.dev`, configurado desde el panel, sin `wrangler.jsonc`); cada push a `main` publica solo.
- Astro 7 pide Node >= 22.23.4. Si el Node del entorno es más viejo, compilar con `npx -y node@24 node_modules/astro/bin/astro.mjs build`.
- Textos en español rioplatense (voseo). Las demos usan negocios ficticios y mandan los mensajes al WhatsApp de Joaquín con el prefijo `[DEMO]`.
- Datos de contacto en `src/config.ts`. Colores de marca en `src/styles/global.css` (`monte` verde, `arena` beige).
- Revisar cada cambio en celular (390 px) y escritorio antes de publicar.
- Componentes reutilizables para sitios de clientes en `src/components/`: `PedidoMenu` (carrito a WhatsApp), `ReservaTurno`, `ReservaMesa`, `Catalogo`, `Horarios` (abierto/cerrado). Se tematizan con las variables CSS `--accent`, `--accent-dark` y `--soft` del contenedor.
- `src/pages/propuestas/` tiene propuestas para comercios reales a los que Joaquín les va a ofrecer el servicio: llevan `PropuestaBar` ("no es el sitio oficial"), `noindex`, prefijo `[PROPUESTA]`, no se enlazan desde el inicio y no inventan opiniones ni datos (solo datos públicos de su ficha de Google; el resto, marcado como ejemplo).
