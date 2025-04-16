# Getting Started with LINCtype

Quick start:
Install dependencies: npm install
Start the server: npm start
Start the DB server: npm run json-server
Build on production: npm run build

## Available Scripts

In the project directory, you can run several commands: `npm start`, `npm run json-server`, `npm test`, `npm run build`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
# Typing Challenge App

Una pequeña aplicación de práctica de tipeo donde se calcula la velocidad, precisión y puntaje del usuario a medida que escribe una palabra o frase.

##  Tecnologías

- React
- TypeScript
- Context API
- Jest + React Testing Library
- Chakra UI

## Funcionalidades

- Detección de letras correctas e incorrectas en tiempo real.
- Cálculo de WPM (Palabras por minuto).
- Ranking de scores.
- Control del estado de tipeo con React Context.
- Testeos unitarios.

## Instalación

```bash
git clone https://github.com/endyleyms/linctype.git
cd linctype
npm install
npm run start

-Correr el db json
npx json-server --watch db.json --port 3001

-Correr los test
npm run test.
