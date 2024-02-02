import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import UseClima from "../hooks/useClima"

const AppClima = () => {

    const { resultado } = UseClima()
    return (

        <>
            <main className='dos-columnas'>
                <Formulario />

                {resultado?.city && <Resultado />}

            </main>
        </>
    )
}

export default AppClima