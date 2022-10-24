import React from 'react';
import Hob1 from "./img/Ciclismo.jpeg";
import Hob2 from "./img/Ciclismo 2.jpeg";
import Hob3 from "./img/Ciclismo 3.jpeg";
import Hob4 from "./img/Atardecer.jpeg";
import Hob5 from "./img/Atardecer 2.jpeg";
import Hob6 from "./img/Atardecer 3.jpeg";
import Hob7 from "./img/Futbool.jpg";
import Hob8 from "./img/Futbool 2.jpg";
import Hob9 from "./img/Futbol 3.jpg";

function Products() {
  return (
    <div className="products">
      <div>
        <center><div>
          <h1>HOBBIES(PASATIEMPOS)</h1><br></br>
          <h4>Un pasatiempo favorito es el ciclismo de montaña</h4><br></br>
          <img src={Hob1} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob2} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob3} id="imge" alt="Perfil" width="200" height="200" />
        </div></center>

        <center><div>
          <br></br><br></br><br></br><h4>Un pasatiempo favorito es el ciclismo de montaña</h4><br></br>
          <img src={Hob4} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob5} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob6} id="imge" alt="Perfil" width="200" height="200" />
        </div></center>

        <center><div>
          <br></br><br></br><br></br><h4>Un pasatiempo favorito es el ciclismo de montaña</h4><br></br>
          <img src={Hob7} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob8} id="imge" alt="Perfil" width="200" height="200" />
          <img src={Hob9} id="imge" alt="Perfil" width="200" height="200" />
        </div></center>
      </div>

    </div>

  );
}

export default Products;
