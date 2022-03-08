import React from 'react';
import './pokemon-card.css';

const PokemonCard = (props) => {
    const {name, image, stats, weight} = props.pokemon;
    const [base, attack, defense, specialAttack] = stats;
    
    return (
        <div className='container'>
            <img src={image} alt={name} />
            <h1>Pokemon: {name}</h1>
            <p>Peso: {weight}</p>
            <table>
                <thead>
                    <tr>
                        <th>{base.name}</th>
                        <th>{attack.name}</th>
                        <th>{defense.name}</th>
                        <th>{specialAttack.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{base.base_stat}</td>
                        <td>{attack.base_stat}</td>
                        <td>{defense.base_stat}</td>
                        <td>{specialAttack.base_stat}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PokemonCard;