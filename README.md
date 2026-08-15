# Plantilla Base para Comercios Locales (Astro)

Esta base está preparada para reutilizar el sitio en distintos comercios locales manteniendo el mismo motor técnico. El contenido del cliente vive en configuración; los componentes son motor reutilizable.

## Arquitectura

- **Motor** (no tocar salvo cambio de lógica): componentes en `src/components/`, layout SEO en `src/layouts/Layout.astro`, sistema de horarios, badge de estado, render de íconos Lucide.
- **Contenido de cliente** (editar por proyecto): `src/config/business.ts` + assets en `public/` y `src/assets/`.

## Onboarding: nuevo cliente en 20 min

### 1. Clonar y limpiar
```bash
git clone <repo> nuevo-cliente
cd nuevo-cliente
npm install
```

### 2. Configurar identidad y contacto (`src/config/business.ts`)
| Sección | Qué editar |
|---|---|
| `site` | `siteUrl` (dominio final), `basePath` (subpath si usa GitHub Pages), `locale` |
| `name`, `fullName`, `tagline` | Nombre corto, nombre completo, eslogan |
| `branding.logoAlt` | Texto alt del logo |
| `phone`, `phoneFormatted` | WhatsApp en formato internacional y legible |
| `address` | Dirección completa, ciudad, región, país, códigos |
| `instagram`, `instagramUrl`, `whatsappUrl`, `googleMapsUrl`, `googleMapsPlaceUrl`, `googleMapsEmbedUrl` | URLs de redes y mapas |
| `geo` | Lat/lng para SEO local y mapa |
| `googlePlaceId` | Place ID de Google Maps |
| `hours.schedule` + `hours.closedDaysLabel` | Horarios flexibles (partido o corrido) |
| `navigation` | Labels y anchors del menú + CTA |
| `hero` | Headline, ubicación, subtitle, CTAs, trust items |
| `sections` | Labels de cada sección (servicios, ubicación, footer) |
| `servicesCatalog` | Catálogo de servicios con íconos Lucide |
| `seo` | `schemaType` (ej. `LocalBusiness`, `Restaurant`, `VeterinaryCare`), títulos, descripción, tags, serviceType, priceRange, etc. |
| `manifest` | Nombre, descripción, colores, shortcuts PWA |
| `features.catalogEnabled` | `true` si el cliente quiere catálogo de productos |

### 3. Assets del cliente
- Reemplazar `src/assets/images/logo.png` (logo principal).
- Reemplazar `public/og-image.jpg` (1200x630 para Open Graph).
- Reemplazar íconos PWA en `public/images/icon-*.png` (192/512, maskable).
- Favicons en `public/favicon.ico`, `public/favicon-*.png`, `public/apple-touch-icon.png`.

### 4. Variables de deploy
Crear `.env` en la raíz:
```env
PUBLIC_SITE_URL=https://tudominio.com
PUBLIC_BASE_PATH=/
```
Si usa GitHub Pages en subpath: `PUBLIC_BASE_PATH=/repo-name/`.

### 5. Catálogo de productos (opcional)
Si `features.catalogEnabled = true`:
- Editar `src/data/products.json` con productos, precios, imágenes, variantes.
- Las imágenes van en `public/images/products/`.
- El componente `ProductCard` usa `business.whatsappMessages.consultarProducto` y `consultarProductoColor`.

### 6. Validar y publicar
```bash
npm run build
npm run preview
```
Checklist rápido:
- [ ] Build sin errores.
- [ ] Horarios renderizan bien en sección Horarios y badge del Hero (probar horario partido y corrido).
- [ ] JSON-LD válido en [Rich Results Test](https://search.google.com/test/rich-results) (revisar `openingHoursSpecification`).
- [ ] Manifest y robots correctos en `dist/`.
- [ ] Deploy de prueba con `PUBLIC_SITE_URL`/`PUBLIC_BASE_PATH` reales.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura de configuración clave

```text
src/config/business.ts          # Contrato único de cliente
src/components/                 # Motor reutilizable
src/layouts/Layout.astro        # SEO + JSON-LD genérico
src/pages/index.astro           # Página principal (solo slots)
astro.config.mjs                # site/base por env
public/manifest.json            # PWA base (se sobreescribe por config en build si se automatiza)
public/robots.txt               # Sitemap base
```

## Notas
- El motor no cambia entre clientes; solo config + assets.
- `hours.schedule` soporta horario partido (mañana/tarde) y corrido (un bloque).
- `schemaType` en SEO permite `LocalBusiness`, `Restaurant`, `VeterinaryCare`, `MedicalBusiness`, etc.
- `features.catalogEnabled` activa/desactiva módulo de productos sin deuda técnica.
