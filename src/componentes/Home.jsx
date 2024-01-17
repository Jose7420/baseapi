import { Cabecera } from "./Cabecera"
import Selector from "./Selector/Selector"
import { ListarJuegos } from "./listaJuego/ListarJuegos"

import listaGenero from "../mock-genero";
import listaPlataforma from "../mock-plataforma";


export const Home = () => {

    return (
        <div className='container'>
            <Cabecera></Cabecera>
            <div className="row">
                <div className="col-2 p-2">
                <p>Ordenacion</p>
                   
                    <Selector lista={listaGenero} longuitud={listaGenero.length}></Selector>
                    <Selector lista={listaPlataforma} longuitud={listaPlataforma.length}></Selector>
                </div>
                <div className="col-10">
                    <ListarJuegos></ListarJuegos>
                </div>

            </div>

        </div>
    );

}