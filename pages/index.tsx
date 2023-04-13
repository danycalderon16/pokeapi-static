import { NextPage, GetStaticProps } from "next"
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemosListResponse, SmallPokemon } from "@/interfaces";

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">

        {pokemons.map((poke) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={poke.id}>
            <Card isHoverable isPressable>
              <Card.Body css={{p:1}}>
                <Card.Image 
                  src={poke.img}
                  alt={`Pokémon ${poke.name}`}
                  width="100%"
                  height={140} />                  
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
              <Text transform="capitalize">{poke.name}</Text>
              <Text>#{poke.id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemosListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => (
    {
      name: poke.name,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
      url: poke.url
    }
  ));
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage; 