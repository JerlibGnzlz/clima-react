/* eslint-disable react/prop-types */
// import { axios } from "axios"
import { createContext, useState } from "react"



export const ClimaContext = createContext()



const ClimaProvider = ({ children }) => {

    console.log(import.meta.env.VITE_API_KEY)

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


    const consultarClima = async (datos) => {
        try {
            const { ciudad, pais } = datos


            const keyId = import.meta.env.VITE_API_KEY

            const url = (`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${keyId}`)

            const resAPI = await fetch(url)
            const resultado = await resAPI.json()

            console.log(resultado.city)
            console.log(resultado.city.coord)

            // const { lat, lon } = url[0]

            // const urlClima = (`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyId}`)

            // const resAPIClima = await fetch(urlClima)
            // const resultadoClima = await resAPIClima.json()

            // console.log(resultadoClima)


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ClimaContext.Provider value={
            {
                busqueda,
                datosBusqueda,
                consultarClima
            }
        }>

            {children}
        </ClimaContext.Provider >

    )
}

export default ClimaProvider