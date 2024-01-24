

const Juego = (props) => {
    function cambiarElFormatoDelaFecha(fecha) {

        let cambiarElFormatoDelaFecha = fecha.substr(8, 2) + "-" + fecha.substr(5, 2) + "-" + fecha.substr(0, 4);

        return cambiarElFormatoDelaFecha;
    }


    return (

        // <div className="col-3"><p>{props.nombre}</p>
        // </div>

        <div className="col-6 col-lg-3  mb-4 mt-10    ml-5 ">
            <div className="card bg-danger text-light h-100  " >
                <img src={props.juego.thumbnail} className="card-img-top  w-90 text-align-center p-2 " alt="..." />
                <div className="card-body">
                    <h2 className='card-text'>{props.juego.title}</h2>
                    <p className="card-text">{props.juego.title}</p>
                    
                    <p className='card-text'>Plataforma. <span>{props.juego.platform}</span></p>
                    <p className='card-text'>Lanzamiento. <span  >{cambiarElFormatoDelaFecha(props.juego.release_date)}</span></p>
                    <p className='card-text'>Genero. <span>{props.juego.genre}</span></p>     
                    <p className='card-text'><span ><a href={props.juego.freetogame_profile_url} alt=""> Descargatelo</a></span></p>
                </div>
            </div>
        </div>
    );
}
export default Juego