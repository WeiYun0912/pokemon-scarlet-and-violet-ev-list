import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EVFilter from "../components/EVFilter";
import PokemonEVTable from "../components/PokemonEVTable";
import { PokemonSearch } from "../components/PokemonSearch";
import { useTranslation } from "react-i18next";

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
      //搜尋欄不為空值的時候
      if (query != "") {
        //搜尋欄要是不是輸入數字的話 (是寶可夢名字)
        if (isNaN(query)) {
          //有選擇努力值 就用 tempPokemonData 去將寶可夢篩選出來 這樣才能用搜尋出來的記錄繼續篩選
          if (ev != 0) {
            setPokemonData(
              tempPokemonData.filter((pokemon) =>
                pokemon.name
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
              )
            );
          } //沒有選擇努力值
          else {
            setPokemonData(
              pokemonDataTrans.filter((pokemon) =>
                pokemon.name
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
              )
            );
          }
        } //搜尋欄要是是輸入數字的話 (是圖鑑編號)
        else {
          if (ev != 0) {
            setPokemonData(
              tempPokemonData.filter((pokemon) => pokemon.paldeaId == query)
            );
          } else {
            setPokemonData(
              pokemonDataTrans.filter((pokemon) => pokemon.paldeaId == query)
            );
          }
        }
      } //選擇努力值
      else if (ev != 0) {
        setPokemonData(tempPokemonData);
      } //將搜尋欄清空時
      else {
        setPokemonData(pokemonDataTrans);
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
        className="filterSearch"
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
