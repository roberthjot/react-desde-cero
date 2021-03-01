import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (

<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://edteam-media.s3.amazonaws.com/courses/medium/2749490f-acde-46b8-8c57-ac6e948b77e2.png" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">El futuro es hoy</p>
        <p> Tu futuro te esta esperando</p>
        <a href="https://ed.team" className="button">Probar</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid mgrid-3">
    <Curso />
    <Curso />
    <Curso />
</div>
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