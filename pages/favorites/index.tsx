import React, { useState, useEffect } from "react";
import { Layout } from "@/components/layouts";
import NoFavorite from "@/components/ui/NoFavorite";
import { localFavorites } from "@/utils";
import FavoritePokemon from "@/components/pokemon/FavoritePokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pókemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <FavoritePokemon pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
