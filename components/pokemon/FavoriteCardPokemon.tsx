import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemon }) => {
  
  const router = useRouter();
  
  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemon}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon} >
      <Card isHoverable isPressable css={{ padding: 10 }}
      onClick={onFavoriteClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
