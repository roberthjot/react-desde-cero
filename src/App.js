import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import Banner from "./Banner"
import Formulario from "./Formulario"

/*const curso = [
  {
    "titulo": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, {
    "titulo": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  }, {
    "titulo": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/e737f2e3-92b3-400e-8d82-1b19e0277012.png",
    "price": 50,
    "profesor": "Alexis Lozada"
  }, {
    "titulo": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": 10,
    "profesor": "Alvaro Felipe"
  }
]*/ //codigo de arrays para crear cajas de cursos con react

const App = () => (

  <>
    <Banner />
    <Formulario name="EDteam"/>
  </>

  /*<>
    <div className="saludo">
       <h1>Hola Mundo</h1>
       <p>Hola, saludando desde mi componente</p>
    </div>
    <div>
     <img src="https://lh3.googleusercontent.com/zjVdQyGuj_5EKaT3ubIQ3xdl9avwtDN3MTkbb7ay-nGhAIG9ASakr3fjwCm_fr7G4ipTDkylJktmr40ScjfYduEmoA=w640-h400-e365-rj-sc0x00ffffff"/>
    </div>
  </>*/
)

export default App;


// Reglas JSX
// 1: Toda etiqueta debe cerrarse 
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => classname
// 7: for => htmlfor