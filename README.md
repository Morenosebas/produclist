# README

## Descripción

Este es un proyecto sencillo que cumple con los requerimientos pedidos en los siguientes dos puntos:

1. Crear una interfaz gráfica en React que permita al usuario crear productos y visualizarlos en una lista. Es libre la cantidad de vistas que necesite crear, los colores, navegadores, etc.

2. Los productos deben tener los siguientes campos y tipos de datos: código (number), nombre (text), descripción (text), cantidad (number), creación (date).

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- framer-motion: ^10.12.4
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.10.0
- react-scripts: 5.0.1

## Scripts

El proyecto incluye los siguientes scripts:

- start: inicia la aplicación en modo de desarrollo.
- build: construye la aplicación para producción.
- test: ejecuta los tests de la aplicación.
- eject: expulsa la configuración de la aplicación de React.

## EslintConfig

La configuración de Eslint extendida para la aplicación es:

{
"extends": [
"react-app",
"react-app/jest"
]
}

## Instrucciones

Para correr el proyecto, sigue estos pasos:

1. Clona el repositorio a tu computadora.
2. Instala las dependencias utilizando el comando `npm install` en la raíz del proyecto.
3. Ejecuta la aplicación en modo de desarrollo con el comando `npm start`.
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en acción.
