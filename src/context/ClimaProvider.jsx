import { createContext, useState } from "react"


export const ClimaContext = createContext()



const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciuda: "",
        pais: ""
    })

    const datosBusqueda = (e) => {

        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ClimaContext.Provider value={
            {
                busqueda,
                datosBusqueda
            }
        }>

            {children}
        </ClimaContext.Provider >

    )
}

export default ClimaProvider