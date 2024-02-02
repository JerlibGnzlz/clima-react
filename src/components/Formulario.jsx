import { useState } from "react"
import UseClima from "../hooks/useClima"

export const Formulario = () => {


    const [alerta, setAlerta] = useState("")

    const { busqueda, datosBusqueda, consultarClima } = UseClima()

    const { ciudad, pais } = busqueda



    const handleSubmit = (e) => {
        e.preventDefault()

        if (ciudad === "" || pais === "") {
            setAlerta("Todos los Campos son Requeridos")
            return
        }
        setAlerta("")
        consultarClima(busqueda)


    }


    return (

        <div className="contenedor">
            {alerta && <p>{alerta}</p>}

            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={ciudad}
                        onChange={datosBusqueda}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select
                        id="pais"
                        name="pais"
                        value={pais}
                        onChange={datosBusqueda}
                    >
                        <option value="pais">-- Seleciona un Pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>
                        <option value="VE">Venezuela</option>

                    </select>
                </div>

                <input
                    type="submit"
                    value="Consultar Clima"
                />
            </form>
        </div>
    )
}
