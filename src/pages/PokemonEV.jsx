import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EVFilter from "../components/EVFilter";
import PokemonEVTable from "../components/PokemonEVTable";
import { PokemonSearch } from "../components/PokemonSearch";
import { useTranslation } from "react-i18next";
/**
 * HP : 1,
 * Sp.Attack : 2
 * Attack : 3,
 * Defense : 4,
 * Sp.Defense : 5,
 * Speed : 6
 */

const PokemonEV = () => {
  const { t, ready } = useTranslation();

  if (!ready) return "loading...";

  const [query, setQuery] = useState("");
  const pokemonDataTrans = t("pokemons", { returnObjects: true });
  const [ev, setEV] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [tempPokemonData, setTempPokemonData] = useState([]);

  useEffect(() => {
    setPokemonData(pokemonDataTrans);
  }, [t]);

  useEffect(() => {
    const filteredPokemonBySearch = () => {
      if (query != "") {
        if (isNaN(query)) {
          setPokemonData(
            pokemonData.filter((pokemon) =>
              pokemon.name
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
            )
          );
        } else {
          setPokemonData(
            pokemonData.filter((pokemon) => pokemon.paldeaId == query)
          );
        }
      } else if (ev != 0) {
        setPokemonData(tempPokemonData);
      } else {
        setPokemonData(t("pokemons", { returnObjects: true }));
      }
    };

    filteredPokemonBySearch();
  }, [query]);

  useEffect(() => {
    const filteredPokemonByEV = () => {
      if (ev != 0) {
        setPokemonData(pokemonData.filter((pokemon) => pokemon.evId == ev));
        setTempPokemonData(pokemonData.filter((pokemon) => pokemon.evId == ev));
      } else {
        setPokemonData(t("pokemons", { returnObjects: true }));
      }
    };

    filteredPokemonByEV();
  }, [ev]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <EVFilter setEV={setEV} />
        <PokemonSearch query={query} setQuery={setQuery} />
      </Box>
      <PokemonEVTable pokemonData={pokemonData} />
    </>
  );
};

export default PokemonEV;
