import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import CardEnlace from './Components/CardEnlace';
import CardGrupo from './Components/CardGrupo';

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <div className='div-titulo'>
          <h1>Luis Hurtado</h1>
          <h5>Desarrollador</h5>
        </div>
        <div className='div-navegacion'>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </header>
      
      <body className="App-body">
        <br/><br/>
        <Card imageUrl='./fondocard.jpg' title='Hola, me llamo Luis Hurtado soy Desarrollador Junior'   description='Desarrollo Apps con lenguajes de programación como JavaScript o TypeScript y librerías como React y Bootstrap' />
        <br/><br/>
        <h1>Proyectos</h1>
        <br/><br/>
        <CardEnlace imagen='./img/Proyecto-tienda.png' titulo='Proyecto 1' texto='Tienda Virtual desarrollada con React, Bootstrap y Typescript' enlace='#'/>
        <br/><br/>
        <CardEnlace imagen='./img/Componente-dado.png' titulo='Proyecto 2' texto='App Dado Virtual desarrollada con Recat y Js' enlace='#'/>
        <br/><br/>
        <h1>Conocimientos y Habilidades</h1>
        <br/><br/>
        <CardGrupo />
        <br/><br/>
        
      </body>

      <footer className="App-footer">
        <h3>Luis Hurtado © 2024</h3>
      </footer>
    </div>
  );
}

export default App;