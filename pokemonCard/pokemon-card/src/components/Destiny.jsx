function Destiny() {
    const handleChange = (event) => {
        alert(`Tu destino es viajar a ${event.target.value}`)
    }

    return (
        <select name="city" id="city" onChange={handleChange}>
            <option selected disabled>Selecciona ciudad</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
        </select>
    )
}

export default Destiny;