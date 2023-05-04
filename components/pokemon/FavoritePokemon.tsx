import { FC } from "react";
import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}

const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemon={id} key={id}/>
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemon;
