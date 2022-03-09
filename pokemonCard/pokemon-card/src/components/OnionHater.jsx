function OnionHater(event) {
    
    const handleOnionHater = (event) => {
        

        if(event.target.value.toLowerCase().includes('cebolla')) {
            alert('ODIO LA CEBOLLA');
        }
    }

    return (
        <textarea name="text" id="text" cols="30" rows="10" onChange={handleOnionHater}></textarea>
    )
}

export default OnionHater;