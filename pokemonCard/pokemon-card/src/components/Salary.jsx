import { useState } from "react";

function HandleChange(event) {
    const {name, value} = event.target;
    setForm({
        ...form,
        [name]: value
    })
}

function HandleClick() {
    setSalary();
}

function CalculateSalary() {
    const [salary, setSalary] = useState(0);
    const [form, setForm] = useState({});

    return (
        <div>
            <form>
                <input type="number" name="rate" id="rate" placeholder="rate" onChange={HandleChange}/>
                <input type="number" name="hours" id="hours" placeholder="hours" onChange={HandleChange}/>
                <input type="number" name="tax" id="tax" placeholder="tax" onChange={HandleChange}/>
            </form>

            <button onClick={HandleClick}>Calcular</button>
    
            <h1>El salario es {salary}</h1>
        </div>
    )
}

export default CalculateSalary;