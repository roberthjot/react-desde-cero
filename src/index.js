import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//hecho con react todo y es hecho con jsx

const root = document.getElementById("root")

//const elemento = React.createElement(componente, propiedades, hijos)

//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo")

ReactDOM.render(<App />, root);

