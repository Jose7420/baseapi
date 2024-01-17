import { useState } from "react";

const Selector = (props) => {


    const [opcionOpccionSeleccionada, setOpccionSelecionada] = useState("Todos");


    function opcion(item, index) {
        return <option key={index} value={item}>{item}</option>

    }

    function opccionElegida(event) {
        setOpccionSelecionada(event.target.value);
        console.log(event.target.value);
    }


    return (
        <div className="row aside">
            <div className="col-3 p-2">
                <select size={props.longuitud} value={opcionOpccionSeleccionada} onChange={opccionElegida}>
                    {props.lista.map(opcion)}
                </select>
            </div>
        </div>


    )
}
export default Selector;