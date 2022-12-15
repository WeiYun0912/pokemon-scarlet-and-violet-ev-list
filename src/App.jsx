import { Container } from "@mui/material";
import Header from "./layout/Header";
import PokemonEV from "./pages/PokemonEV";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language == "zh") {
      document.title = "寶可夢 朱/紫 努力值清單 (帕底亞)";
    } else if (i18n.language == "eng") {
      document.title = "Pokemon Scarlet and Violet Effort Values List (Paldea)";
    }
  }, [i18n.language]);

  return (
    <div>
      <Header />

      {/* <Trans i18nKey="he"></Trans> */}
      <Container maxWidth="lg">
        <PokemonEV />
      </Container>
    </div>
  );
}

export default App;
