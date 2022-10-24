import React from 'react';
import * as AiIcons from 'react-icons/ai';
import Per from "./img/Foto De Perfil.jpeg";


function Home() {
  return (
    <div className='home'>

      <div>
        <center><h1>ACERCA DE MI</h1></center>


        <p>Mi nombre es Julio Andres Sanchez Hernandez cuento la la experiencia de desarrollo en entorno web
          y como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia
          y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en
          equipo y fomentar valores como los del compañerismo.</p>

        <h4>Nombre: Julio Andres Sanchez Hernande</h4>
        <h4>Carrera: Ingenieria en Sistemas Comutacionales</h4>
        <h4>Numero de control: 19700077</h4>
        <h4>Materia: Topicos web</h4>
        <h4>Semestre: 7mo</h4>
        <h4>Edad: 21</h4>
        <AiIcons.AiFillPhone /> <h4>+52 9631817004</h4>
        <AiIcons.AiFillMessage /><a href="mailto:juliosanchezhernandez80@email.com"><h4>juliosanchezhernandez80@gmail.com</h4></a><br></br><br></br>
        <center><div ><img src={Per} id="perfil" alt="Perfil" width="500" height="400" /></div></center><br></br><br></br>

        <br></br><br></br><center><h1>FORMACION ACADEMICA</h1></center>
        <h2>Prescolar</h2>
        <li><a>Jardin de niños Nezahualcóyotl</a></li>
        <li><a>Ubicada en el barrio Guadalupe Yalixhao, Municipio de la Trinitaria,Chiapas</a></li>

        <br></br><h2>Primaria</h2>
        <li><a>Lic. Benito Juarez Garcia</a></li>
        <li><a>Se ubica en la colonia nuevo saltillo, Municipio de la Trinitaria,Chiapas</a></li>

        <br></br><h3>Secundaria</h3>
        <li><a>Escuela Secundaria Tecnica No.44</a></li>
        <li><a>Especialidad En Informatica</a></li>
        <li><a>Actualmente esta ubicada en el barrio San Jose, Municipio de la Trinitaria,Chiapas</a></li>

        <br></br><h3>Bachillerato</h3>
        <li><a>Colegio De Estudios Cientificos Y Tecnologicos Del Estado De Chiapas Cecyt 08.</a></li>
        <li><a>Especialidad En: Soporte y Mantenimiento En Equipos De Computo</a></li>
        <li><a>Se ubica en Calzada Jose Patrocinio Gonzalez Garrido, Municipio de la Trinitaria,Chiapas</a></li>

        <br></br><h3>Universidad</h3>
        <li><a>Instituto Tecnologico De Comitan</a></li>
        <li><a>Carrera: Ingeneria En Sistemas Computacionales</a></li>
        <li><a>Se ubica en Periferico, los Sabinos, Municipio de Comitan De Dominguez,Chiapas</a></li>

      </div>
    </div>
  );
}

export default Home;

//icon: <AiIcons.AiFillPhone />
//icon: <IoIcons.IoMdPeople />
