import UseClima from "../hooks/useClima"


export const Resultado = () => {

    const { resultado } = UseClima()

    const { name, country } = resultado.city

    const kelvin = 273.15

    const { main } = resultado.list[0]

    return (
        <>
            <div className="contenedor clima">

                <h2>El clima de {name} {country} es: </h2>
                <h1>{parseInt(main.temp - kelvin)}<span>&#x2103;</span></h1>

                <div className="tem_min_max">

                    <p>Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
                    <p>Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
                </div>
            </div>

        </>
    )
}
