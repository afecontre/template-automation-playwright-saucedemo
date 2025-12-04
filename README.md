# 🧪 Template de Automatización E2E con Playwright (SauceDemo)

Plantilla base para pruebas end-to-end usando **Playwright Test + TypeScript**, con:

- Page Object Model (POM)
- Helpers reutilizables
- Fixture de login automático
- Separación por capas (data, helpers, page-objects, tests)

Aplicado sobre: https://www.saucedemo.com

---

## 🎯 Objetivo

Este template está pensado para:

- Crear proyectos E2E con Playwright de forma rápida
- Reutilizar Login y flujos comunes
- Tener una estructura limpia y escalable
- Ser usado como **Template Repository** en GitHub

---

## 📁 Estructura del proyecto

```text
├─ data/
│  └─ users.ts                # Datos de usuarios y mensajes
├─ helpers/
│  └─ auth.ts                 # Helper de login
├─ page-objects/
│  ├─ BasePage.ts             # Página base reutilizable
│  ├─ LoginPage.ts
│  ├─ ProductsPage.ts
│  ├─ CartPage.ts
│  └─ CheckoutPage.ts
├─ tests/
│  ├─ fixtures/
│  │   └─ base.ts             # Fixture con login automático (loggedPage)
│  ├─ login.spec.ts           # Escenarios de login
│  ├─ cart.spec.ts            # Escenarios de carrito
│  └─ checkout.spec.ts        # Escenarios de checkout
├─ playwright.config.ts       # Configuración global de Playwright
├─ package.json
└─ README.md
⚙️ Configuración
En playwright.config.ts se define la URL base y opciones generales:

ts
Copy code
use: {
  baseURL: 'https://www.saucedemo.com',
  headless: true,
  viewport: { width: 1366, height: 768 },
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
},
🔧 Instalación
bash
Copy code
npm install
▶️ Ejecución de pruebas
Ejecutar toda la suite
bash
Copy code
npx playwright test
Ejecutar solo login
bash
Copy code
npx playwright test tests/login.spec.ts
Ejecutar con vista del navegador
bash
Copy code
npx playwright test tests/login.spec.ts --headed
Ver reporte HTML
bash
Copy code
npx playwright show-report
🧪 Diseño de pruebas
Login
Usuario estándar (éxito)

Usuario bloqueado

Credenciales inválidas

Campos vacíos

Estos tests usan el test original de Playwright para validar el formulario completo.

Carrito
Agregar un producto al carrito

Validar el contador del carrito

Estos tests usan el fixture loggedPage para iniciar siempre con un usuario ya autenticado.

Checkout
Flujo completo de compra:

Login

Selección de producto

Navegar al carrito

Checkout

Confirmación de la orden

🧱 Buenas prácticas aplicadas
Page Objects separados por responsabilidad

Helpers para flujos comunes (auth.ts)

Fixture de login reutilizable (loggedPage)

Tests cortos, legibles y enfocados en el negocio

Selectores basados en data-test (estables)

👨‍💻 Autor
Andrés Felipe Contreras Muñoz
QA Automation Engineer
GitHub: https://github.com/afecontre








