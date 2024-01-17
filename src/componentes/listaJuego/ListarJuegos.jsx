import { useEffect, useState } from "react";
import Juego from "../juego/juegos"

import { getAllJuegos } from "../Servicios/getAll";



export const ListarJuegos = () => {

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

    return (
        <>
            <div className="row pt-4">
                {listaJueos.map(mostrarJuego)}
                {/* <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego>
                <Juego></Juego> */}
            </div>

        </>


    )
}