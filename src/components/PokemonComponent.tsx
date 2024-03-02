import { Pokemon } from "../models/Pokemon";
import "./PokemonComponents.css"

interface PokemonComponentProps{
    pokemon:Pokemon
}

export default function PokemonComponent(props:PokemonComponentProps) {
    return (
        <div>
            <div>
                <div className="flex items-center ml-32 mt-6">
                    <h1 className="Name">{props.pokemon.name}  #{props.pokemon.id}</h1>
                    <img className="Image" src={props.pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />
                </div>
                <div className="Stadistics">
                  <h1>Estadísticas</h1>
                  <ul>
                    {props.pokemon.stats?.map((stat, index) => (
                      <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2">
                <div className="bg-gray-200 p-4">
                    <h1>Movimientos</h1>
                    <ul>
                    {props.pokemon.moves.map((move,index)=>{
                        return (
                        <li key={index}>
                            {move.move.name}
                        </li>
                        )
                    })}
                    </ul>
                </div>
                <div className="bg-gray-200 p-4">
                  <h1>Especie</h1>
                  <p>{props.pokemon.species.name}</p>
                </div>
                <div className="bg-gray-200 p-4">
                  <h1>Habilidades</h1>
                  <ul>
                    {props.pokemon.abilities?.map((ability, index) => (
                      <li key={index}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>

                

            </div>
            </div>
            
        </div>
    );
}