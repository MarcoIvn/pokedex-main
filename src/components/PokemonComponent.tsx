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
                <div className="flex mx-12 ml-12 ">
                  <div className="Movements m-6">
                      <h1 className="text-xl font-bold">Movimientos</h1>
                      <ul>
                      {props.pokemon.moves.map((move,index)=>{
                          return (
                          <li className="MovementsList" key={index}>
                              {move.move.name}
                          </li>
                          )
                      })}
                      </ul>
                  </div>
                  <div className="Specie m-6">
                    <h1 className="text-xl font-bold">Especie</h1>
                    <p className="SpecieName">{props.pokemon.species.name}</p>
                  </div>
                  <div className="Skills m-6">
                    <h1 className="text-xl font-bold">Habilidades</h1>
                    <ul>
                      {props.pokemon.abilities?.map((ability, index) => (
                        <li className="SkillsList" key={index}>{ability.ability.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            </div>
            
        </div>
    );
}