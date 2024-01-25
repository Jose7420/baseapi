import { useState } from "react";

const Selector = (props) => {

  


    const [opcionOpccionSeleccionada, setOpccionSelecionada] = useState("Todos");


    function opcion(item, index) {
        return <option key={index} value={item}>{item}</option>

    }

    function opccionElegida(event) {
       
        
        setOpccionSelecionada(event.target.value);
        props.accion(event.target.value);
       
    }

   

    


    return (
        
        <div className="col-2 pb-2 mr-4  w-25   mb-2 ">
                <select size={props.longuitud} value={opcionOpccionSeleccionada} onChange={opccionElegida}>
                    {props.lista.map(opcion)}
                </select>
          </div>


    )
}
export default Selector;