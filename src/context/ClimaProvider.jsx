/* eslint-disable react/prop-types */
// import { axios } from "axios"
import { createContext, useState } from "react"



export const ClimaContext = createContext()



const ClimaProvider = ({ children }) => {


    const [busqueda, setBusqueda] = useState(
        {
            ciuda: "",
            pais: ""
        })

    const datosBusqueda = (e) => {

        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const [resultado, setResultado] = useState({})

    const [loading, setLoading] = useState(false)

    const [noResultado, setNoResultado] = useState(false)

    const consultarClima = async (datos) => {
        setLoading(true)
        setNoResultado(false)

        try {
            const { ciudad, pais } = datos


            const keyId = import.meta.env.VITE_API_KEY

            const url = (`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${keyId}`)

            const resAPI = await fetch(url)
            const resultado = await resAPI.json()
            setResultado(resultado)

            setLoading(false)

        } catch (error) {
            setNoResultado("No hay Resultados")
        }

    }


    return (
        <ClimaContext.Provider value={
            {
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                loading,
                noResultado,



            }
        }>

            {children}
        </ClimaContext.Provider >

    )
}

export default ClimaProvider