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

    const consultarClima = async (datos) => {
        try {
            const { ciudad, pais } = datos


            const keyId = import.meta.env.VITE_API_KEY

            const url = (`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${keyId}`)

            const resAPI = await fetch(url)
            const resultado = await resAPI.json()


            setResultado(resultado)



        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ClimaContext.Provider value={
            {
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado


            }
        }>

            {children}
        </ClimaContext.Provider >

    )
}

export default ClimaProvider