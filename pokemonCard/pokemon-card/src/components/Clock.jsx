import { useState } from "react";

function Clock() {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 5000)

    return (
        <div>
            <h1>La hora es: {date}</h1>
        </div>
    )
}

export default Clock;