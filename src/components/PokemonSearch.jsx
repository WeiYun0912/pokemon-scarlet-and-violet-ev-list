import { TextField } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";

export const PokemonSearch = ({ query, setQuery }) => {
  return (
    <div>
      <TextField
        sx={{ width: "50ch" }}
        id="standard-search"
        label={<Trans i18nKey="content.Input"></Trans>}
        type="search"
        variant="filled"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
        // onCompositionStart={(e) => setQuery(e.target.value)}
        // onInput={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
