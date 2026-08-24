# atao-group

crea un portal web con varias páginas:

¡perfecto! Aquí tienes la **arquitectura UX** y el **diseño de estructura** para la nueva web corporativa de **ATAO Group** (B2B/B2G + retail), incorporando el catálogo actual de Qurago (Odoo) y cuidando SEO, accesibilidad y conversión.

---

# Mapa del sitio (IA) y navegación

**Header (sticky)**

* Logo (inicio)
* Menú primario: Inicio · Nosotros · Servicios · Calidad · Catálogo · Contáctanos
* CTAs: **Solicitar cotización** (B2B/B2G) · **Comprar ahora** (minorista)
* Buscador global (con autosuggest por categoría/producto)
* Acceso rápido: WhatsApp / Teléfono / Idioma (ES)

**Footer**

* Enlaces: Nosotros · Servicios · Calidad · Catálogo · Contáctanos · Términos · Privacidad
* Certificaciones y alianzas (logos) · Métodos de pago B2B · Cobertura nacional
* Datos legales (RUC), redes, horarios de atención

---

# Páginas y estructura de contenidos

## 1) Inicio

**Objetivo:** Presentar propuesta de valor de ATAO Group y guiar a dos flujos: **Empresas/Gobierno (cotización)** y **Usuarios finales (compra)**.

**Secciones**

1. **Hero** (H1 + subtítulo + CTAs)

   * H1: *“Equipos médicos confiables para empresas, gobierno y profesionales en todo el Perú”*
   * CTA primario: *Solicitar cotización* · Secundario: *Ver catálogo*
2. **Segmentos atendidos**

   * Empresas y clínicas · Gobierno · Profesionales de la salud · Usuarios finales
   * Cada card → llevó a flows distintos (cotizar / comprar)
3. **Categorías destacadas del catálogo**

   * 6–8 categorías clave (ej. *Mobiliario médico, Dispositivos de medición, Enfermería, Rehabilitación, Ortesis, Suministros desechables*) con ver más → Catálogo
4. **Marcas y calidad**

   * Logos de marcas/aliados · breve texto de estándares/certificaciones (slots para ISO/DIGEMID)
5. **Beneficios diferenciales**

   * Entrega nacional, stock verificado, soporte técnico, garantía, trazabilidad documental
6. **Casos/Clientes & Sectores**

   * Mini casos (card: problema → solución → resultado)
7. **CTA final**

   * Bloque “¿Cotizamos hoy?” + formulario corto (nombre, RUC, rubro, requerimiento, adjuntos)

**SEO base**

* Title: *ATAO Group | Equipos médicos para empresas y gobierno en Perú*
* Meta desc: beneficios + cobertura + catálogo

---

## 2) Nosotros

**Objetivo:** Confianza y trayectoria.

**Secciones**

1. **Propósito y posicionamiento**

   * “Aliado de confianza para profesionales de la salud y usuarios finales”
2. **Historia y cobertura**

   * Línea de tiempo + mapa de cobertura nacional
3. **Equipo y cultura**

   * Comité técnico / comercial / operaciones (cards)
4. **Infraestructura y logística**

   * Almacenes, tiempos de entrega, SLA de despacho
5. **Cumplimiento y afiliaciones** *(slots)*

   * Espacios para registros, certificaciones, miembros de gremios (sin afirmar nada no confirmado)
6. **CSR / Sostenibilidad** *(opcional)*

   * Programas y donaciones

---

## 3) Servicios

**Objetivo:** Claridad en el portafolio B2B/B2G y postventa.

**Secciones**

1. **Abastecimiento mayorista y licitaciones**

   * Abastecimiento a clínicas, hospitales, municipalidades, ministerios
   * Botón: *Solicitar ficha técnica / proforma*
2. **Asesoría técnica y preventa**

   * Selección de equipamiento, normativas aplicables
3. **Instalación y puesta en marcha** *(si aplica)*
4. **Capacitación de uso y mantenimiento** *(si aplica)*
5. **Garantías, repuestos y soporte**

   * Flujos de RMA / atención en campo / tiempos estándar
6. **Documentación y trazabilidad**

   * Entrega de fichas técnicas, hojas de seguridad, manuales
7. **CTA segmentado**

   * Empresas/Gobierno: *Pedir cotización* · Profesionales: *Contactar asesor*

---

## 4) Calidad

**Objetivo:** Respaldar la promesa de calidad con procesos y evidencias.

**Secciones**

1. **Política de calidad**

   * Principios, alcance, mejora continua
2. **Estándares y certificaciones** *(slots para evidencias)*

   * Espacios para ISO 9001 / ISO 13485 / registros sanitarios / DIGEMID / conformidades (subir PDF)
3. **Trazabilidad y control**

   * Lote, serie, controles de recepción, checklist de despacho
4. **Gestión de garantías**

   * Procedimiento, tiempos, qué cubre
5. **Seguridad y cumplimiento**

   * Procedimientos de almacenamiento, transporte, calibración (si aplica)
6. **Auditorías internas/externas** *(slots)*

   * Próximas auditorías, certificadoras

---

## 5) Contáctanos

**Objetivo:** Conversión multicanal con enrutamiento inteligente.

**Secciones**

1. **Formulario inteligente** (selección de motivo → forma dinámica):

   * *Cotización B2B/B2G* (campos: empresa, RUC, rubro, lista de requisitos; adjuntar bases/TER)
   * *Soporte/garantía* (N° de serie/lote, fecha compra, evidencia)
   * *Consulta comercial retail* (producto, distrito, canal preferido)
2. **Contacto directo**

   * Teléfono · WhatsApp oficial · Email · Dirección con mapa
3. **Horarios y SLA de respuesta**
4. **FAQ de contacto** (plazos, cobertura, entregas, devoluciones)

---

# Catálogo (integración Odoo)

**Estrategia:** Mantener el **catalogador en Odoo** (Qurago) y exponerlo en la web de ATAO mediante:

* **Subdominio o ruta**: `catalogo.ataogroup.pe` o `/catalogo` (reverse proxy)
* **Búsqueda unificada**: caja de búsqueda del sitio consulta índice (algolia/opensearch) que indexa Odoo
* **Filtros (facetas)**: categoría → subcategoría → atributo (marca, talla, material, uso, registro sanitario, disponibilidad)
* **Ficha de producto**: Nombre, SKU/Código, categoría, marca, atributos, fotos, ficha PDF, manual PDF, **registro sanitario (slot)**, garantía, stock, precio (si aplica retail), CTA *Añadir al carro* (retail) y *Solicitar proforma* (B2B/B2G).

**Categorías disponibles hoy en Qurago (Odoo)** — base para IA de navegación y filtros:

* **Ayuda biomecánica** (andadores, bastones, muletas, sillas de ruedas y accesorios)
* **Dispositivos médicos** (instrumental quirúrgico, línea hipodérmica, terapia respiratoria, etc.)
* **Ergonomía y descanso**
* **Fisioterapia** (bolsas/compresas, electroestimulación, rehabilitación, frío/calor)
* **Indumentarios médicos** (EPP, uniformes)
* **Instrumentos quirúrgicos**
* **Línea médica** (plantillas y taloneras, antiembólicas, várices)
* **Material médico / laboratorio**
* **Medicina deportiva**
* **Mobiliario médico** (cama clínica, camillas, biombos, mesas, porta suero, vitrinas)
* **Ortesis / Prótesis** (miembro inferior/superior)
* **Productos antisépticos**
* **Suministros desechables / cuidados del paciente**. ([qurago.odoo.com][1])

> Nota: La estructura anterior se extrajo del menú de categorías del *shop* de Qurago (Odoo) y sirve como **guía de taxonomía** para ATAO Group. Ajustaremos nombres/agrupaciones para consistencia editorial y SEO.

**Flujos**

* **B2B/B2G**: Catálogo → Ficha → *Solicitar proforma* → formulario con multi-SKU y adjuntos → CRM
* **Retail**: Catálogo → Ficha → *Añadir al carrito* → checkout Odoo

---

# Componentes UI esenciales (Design System)

* **Cards** de categoría y producto (imagen 4:3 / 1:1, nombre ≤ 2 líneas, precio opcional, badges: *Nuevo*, *Stock*, *Registro sanitario*).
* **Facetas**: panel lateral con colapsables y contador.
* **Comparador** de productos (hasta 4).
* **Descarga de fichas** (PDF) y manuales.
* **Alertas**: *Consultar stock*, *Producto bajo pedido*, *Precio referencial*.
* **Módulo de evidencia**: subir certificados/constancias (Calidad).
* **Microcopy** claro (ej.: “Entrega nacional en 24–72 h según zona y stock”).

---

# Reglas UX y accesibilidad

* **WCAG 2.2 AA**: contraste, focus visible, teclado, etiquetas ARIA en filtros y carruseles.
* **Rendimiento**: Core Web Vitals (LCP <2.5s; CLS <0.1); imágenes WebP/AVIF; lazy load.
* **Formularios**: validación en línea, estados (enviando, éxito, error), guardado parcial.
* **Búsqueda**: tolerancia a errores (typo-tolerance) y sinónimos (ej. “bastón”/“baston”).

---

# SEO técnico y contenido

* **Schema.org**:

  * `Organization` (ATAO Group), `Product` (fichas), `BreadcrumbList`, `FAQPage` (Calidad/Soporte), `LocalBusiness` (si procede).
* **URLs limpias**:

  * `/nosotros`, `/servicios`, `/calidad`, `/catalogo`, `/contacto`, `/catalogo/<categoria>/<slug-producto>`
* **On-page**:

  * H1 único, H2 por bloque, meta title ≤ 60, meta desc ≤ 155, datos clave visibles “above the fold”.
* **Contenido guía**:

  * Artículos “cómo elegir/usar” para categorías críticas (captación orgánica).

---

# Modelos de copy (breve)

**Inicio — Hero**
*Equipos médicos confiables para empresas, gobierno y profesionales.*
*Distribución nacional, stock verificado y soporte técnico especializado.*
[CTA] *Solicitar cotización* · [CTA] *Ver catálogo*

**Servicios — Abastecimiento y licitaciones**
*Desde proformas multi-SKU hasta acompañamiento en especificaciones técnicas. Gestionamos entregas, garantías y trazabilidad documental.*

**Calidad — Política**
*Trabajamos bajo estándares internacionales y procedimientos documentados para asegurar la seguridad, desempeño y conformidad de cada producto.*
*(Aquí se adjuntan certificados y registros correspondientes.)*

---

# Formularios (campos clave)

* **Cotización B2B/B2G**: Empresa, RUC, razón social, sector, contacto, teléfono, distrito, **requerimiento (lista de SKU o descripción)**, adjuntos (bases/TER), urgencia.
* **Soporte/RMA**: N° serie/lote, fecha compra, evidencia (foto/video), descripción, centro de atención preferido.
* **Consulta retail**: Producto, distrito, canal de respuesta (WhatsApp/Email).

---

# Roadmap de implementación (técnico)

1. **Taxonomía**: normalizar categorías Odoo → árbol ATAO (máx. 3 niveles).
2. **Indice de búsqueda**: indexar productos (nombre, código, categoría, marca, atributos, etiquetas de cumplimiento) + sinónimos.
3. **Componente Catálogo**: listados con facetas, ordenación (relevancia, precio, nombre, stock).
4. **Ficha**: galería, atributos tabulados, **bloque de cumplimiento** (registro sanitario/garantía), documentos descargables, CTAs duales (B2B/B2C).
5. **CMS**: páginas corporativas editables (Nosotros, Servicios, Calidad, FAQ).
6. **Integraciones**: CRM para leads B2B/Gobierno, WhatsApp oficial, analítica (GTM/GA4), pixel de ads.
7. **Medición**: eventos clave (ver categoría, aplicar filtro, ver ficha, descargar ficha, enviar cotización, añadir carrito, checkout).

---

## ¿Qué te entrego si avanzamos?

* **Wireframes de alta fidelidad** (Inicio, Nosotros, Servicios, Calidad, Catálogo, Ficha, Contacto).
* **Matriz de taxonomía** (mapping Odoo → ATAO).
* **Guía de contenido & microcopy** (SEO ready).
* **Especificación funcional** de filtros, búsqueda, comparador y formularios.

Si te sirve, preparo los **wireframes en Figma** y el **site copy** inicial para publicar versión 1.0.

[1]: https://qurago.odoo.com/shop "Products | Atao Group SAC"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://atao-group.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c7fc7071-508f-4fd0-af45-cff0e1a17354).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
