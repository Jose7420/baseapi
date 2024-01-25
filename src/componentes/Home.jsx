import { Cabecera } from "./Cabecera"
import Selector from "./Selector/Selector"
import { ListarJuegos } from "./listaJuego/ListarJuegos"

import listaGenero from "../mock-genero";
import listaPlataforma from "../mock-plataforma";
import { useState } from "react";
import genero from "../mock-genero";
import plataforma from "../mock-plataforma";


export const Home = () => {

    const [ordenar, setOrdenar] = useState(true);
    const [genero, setGenero] = useState('Todos');
    const [plataforma, setPlataforma] = useState('Todos');

    function ordenacion(dato){
       

        if(dato == "A-Z"){
            setOrdenar(true);
        }else{
            setOrdenar(false);
        }
       

    }
    function ordenacionGenero(dato){

        setGenero(dato);
        
    }

    function ordenacionPlataforma(dato){
        setPlataforma(dato);
    }
    
    return (
        <>        
        <div className='container-fluid '>
            <div className="row">
                <Cabecera></Cabecera>
            </div>
            <div className="row">
                <div className="mt-5 pt-4 position-fixed bg-dark text-ligth">
                <p className="text-primary pt-4">Genero</p>
                    <Selector lista={['A-Z','Z-A']} longuitud={1} accion={ordenacion}></Selector>
                    <p className="text-primary pt-4">Genero</p>
                    <Selector lista={listaGenero} longuitud={listaGenero.length} accion={ordenacionGenero}></Selector>
                    <p className="text-primary pt-2">Plataforma</p>
                    <Selector lista={listaPlataforma} longuitud={listaPlataforma.length} accion={ordenacionGenero}></Selector>
                </div>
            </div>
            
            <div className="row">

                <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
                    <ListarJuegos  ordenar={ordenar} genero={genero} plataforma={plataforma}></ListarJuegos>
                </div>
            </div>

        </div>
        </>
    );

}