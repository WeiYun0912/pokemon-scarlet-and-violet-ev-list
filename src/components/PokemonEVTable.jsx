import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Pokemon from "./Pokemon";
import { Trans } from "react-i18next";

const PokemonEVTable = ({ pokemonData }) => {
  const columns = [
    { id: "id", label: <Trans i18nKey="content.TableHead1"></Trans> },
    {
      id: "image",
      label: <Trans i18nKey="content.TableHead2"></Trans>,
      minWidth: 100,
    },
    {
      id: "name",
      label: <Trans i18nKey="content.TableHead3"></Trans>,
      minWidth: 100,
    },
    {
      id: "ev",
      label: <Trans i18nKey="content.TableHead4"></Trans>,
      minWidth: 100,
    },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        labelRowsPerPage={<Trans i18nKey="content.TableRowsPerPage"></Trans>}
        count={pokemonData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableContainer sx={{ maxHeight: 880 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pokemon) => (
                <Pokemon key={pokemon.paldeaId} pokemon={pokemon} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PokemonEVTable;
