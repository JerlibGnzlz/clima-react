
export const Formulario = () => {
    return (

        <div className="contenedor">
            <form>
                <div className="campo">
                    <label for="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                    />
                </div>

                <div className="campo">
                    <label for="pais">Pais</label>
                    <select
                        id="pais"
                        name="pais"
                    >
                        <option value="pais">-- Seleciona un Pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costarica</option>
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
