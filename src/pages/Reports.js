import React from 'react';
import Reci1 from "./img/La Trinitaria.jpeg";
import Reci2 from "./img/La trinitaria 2.jpeg";
import Reci3 from "./img/La trinitaria 3.jpeg";
import Reci4 from "./img/La trinitaria 4.jpeg";


function Reports() {
  return (
    <div className='reports'>
      
      <div>
        <center><h1>Lugar de Recidencia</h1></center>
        <h2>La Trinitaria Chiapas.</h2>
        <li><a>Calle Central S/N, Barrio Guadalupe Yalixhao</a></li>
        <li><a>Actualmente radico en el barrio Guadalupe Yalixhao Municipio De 
        La Trinitaria Chiapas, a 100 metros antes de llegar a la escuela 
        primaria Lic. Benito Juárez García de la colonia Nuevo Saltillo</a></li>

        <center><div ><img src={Reci1} id="imge" alt="Perfil" width="200" height="200" />
        <img src={Reci2} id="imge" alt="Perfil" width="200" height="200" /></div>
        <div ><img src={Reci3} id="imge" alt="Perfil" width="200" height="200" />
        <img src={Reci4} id="imge" alt="Perfil" width="200" height="200" /></div></center>
      </div>

    </div>
  );
}

export default Reports;
