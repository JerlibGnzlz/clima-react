import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import UseClima from "../hooks/useClima"
import Loading from "./Loading"

const AppClima = () => {


    const { resultado, loading, noResultado } = UseClima()
    return (

        <>
            <main className='dos-columnas'>
                <Formulario />

                {
                    loading ? <Loading /> :
                        resultado?.city ? <Resultado /> :
                            noResultado ? <p>{noResultado}</p> :
                                <p>*Aca van los Resultados del Clima*</p>
                }

            </main>
        </>
    )
}

export default AppClima