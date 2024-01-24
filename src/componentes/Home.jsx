import { Cabecera } from "./Cabecera"
import Selector from "./Selector/Selector"
import { ListarJuegos } from "./listaJuego/ListarJuegos"

import listaGenero from "../mock-genero";
import listaPlataforma from "../mock-plataforma";


export const Home = () => {

    return (
        <>        
        <div className='container-fluid '>
            <div className="row">
                <Cabecera></Cabecera>
            </div>
            <div className="row">
                <div className="mt-5 pt-4 position-fixed text-ligth">
                <p className="text-primary pt-4">Genero</p>
                    <Selector lista={['A-Z','Z-A']} longuitud={1}></Selector>
                    <p className="text-primary pt-4">Genero</p>
                    <Selector lista={listaGenero} longuitud={listaGenero.length}></Selector>
                    <p className="text-primary pt-2">Plataforma</p>
                    <Selector lista={listaPlataforma} longuitud={listaPlataforma.length}></Selector>
                </div>
            </div>
            
            <div className="row">

                <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
                    <ListarJuegos></ListarJuegos>
                </div>
            </div>

        </div>
        </>
    );

}