# Guía de configuración para el desarrollo local.

Para desplegar este sitio web localmente, es necesario compilar extensiones nativas de Ruby. Se recomienda encarecidamente utilizar `rbenv` para gestionar tu versión de Ruby, evitando el uso de versiones instaladas vía `snap` o paquetes globales del sistema.

## Pasos de instalación

1. **Instalar dependencias del sistema:**

Asegúrate de tener las herramientas de compilación necesarias:
```bash
sudo apt update
sudo apt install build-essential libssl-dev libreadline-dev zlib1g-dev libyaml-dev libffi-dev
```

2. **Instalar `rbenv` (Administrador de versiones):**

 Guía Oficial: https://github.com/rbenv/rbenv

3. **Instalar Ruby**

Instala una versión estable y compatible (se recomienda 3.3.x):

```bash
rbenv install 3.3.0
rbenv global 3.3.0
```

4. **Instalar dependencias del proyecto:**

Dentro de la carpeta raíz del proyecto, instala el gestor de paquetes y las gemas necesarias:

```bash
gem install bundler
bundle install
```

5. **Ejecutar el proyecto:**

Una vez instalado, puedes iniciar el servidor local con:

```bash
npm run serve
```

## Scripts

### Desarrollo

```bash
npm run watch
```

### Cache

```bash
npm run clean
```

### Producción

```bash
npm run build
```
