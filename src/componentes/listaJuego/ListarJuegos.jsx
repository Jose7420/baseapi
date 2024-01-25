import { useEffect, useState } from "react";
import Juego from "../juego/juegos"

import { getAllJuegos } from "../Servicios/getAll";



export const ListarJuegos = (props) => {

    const [listaJueos, setlistaJueos] = useState([]);
   
   

    function obtenerJuegos() {

        // Usamos el servicio de obtención de posts que hemos creado
        getAllJuegos().then(posts => {

            //Cargamos los post en el estado del componente
            setlistaJueos(posts);


        });
    }

    useEffect(obtenerJuegos, []);

    function mostrarJuego(juego) {
        console.table(juego)

        return <Juego key={juego.id} juego={juego} ></Juego>
    }

    function ordenarnacion(a, b){
       
       
        if(props.ordenar == true){
            return a.title.localeCompare(b.title)
        }
        return b.title.localeCompare(a.title);

    }

    function filtroGenero(dato){
        
        return (props.genero ==='Todos') ?  true:  dato.genre.includes(props.genero,0);
    }


    function filtroPlaforma(dato){
        return (props.plataforma ==='Todos') ?  true:  dato.platform.includes(props.plataforma,0);
    }

    return (
        <>
            <div className="row pt-4">
                {listaJueos.filter(filtroGenero).filter(filtroPlaforma).sort(ordenarnacion).map(mostrarJuego)}               
            </div>

        </>


    )
}