import { Link } from "react-router-dom";

function RickAndMorty({item}) {

    return (
        <Link className="container" to={`/rick-and-morty/${item.id}`}>
            <img src={item.image} alt="" />
            <h1>Nombre: {item.name}</h1>
            <p>Status: {item.status}</p>
        </Link>
    )
}

export default RickAndMorty;