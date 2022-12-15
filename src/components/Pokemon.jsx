import { TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <TableRow key={pokemon.paldeaId}>
      <TableCell style={{ width: "150px" }}>
        <Typography variant="body1">{pokemon.paldeaId}</Typography>
      </TableCell>
      <TableCell>
        <img src={pokemon.image} width="100" />
      </TableCell>
      <TableCell>
        <Typography variant="body1">{pokemon.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{pokemon.ev}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default Pokemon;
