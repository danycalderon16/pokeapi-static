import pokeAPI from "@/api/pokeApi";
import { Pokemon } from "@/interfaces";


export const getPokemonInfo = async (nameOrID:string) => {
  const { data } = await pokeAPI.get<Pokemon>((`/pokemon/${nameOrID}`));

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites    
  }
}