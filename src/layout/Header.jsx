import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Trans, useTranslation } from "react-i18next";

const Header = () => {
  const { i18n, ready } = useTranslation();

  if (!ready) return "loading...";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" color="inherit" component="div">
                <Trans i18nKey="content.Header"></Trans>
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                style={{ cursor: "pointer" }}
                onClick={() => changeLanguage("zh")}
              >
                中文 (Traditional-Chinese)
              </Typography>
              <Typography variant="h6">&nbsp;/&nbsp;</Typography>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                style={{ cursor: "pointer" }}
                onClick={() => changeLanguage("eng")}
              >
                英文 (English)
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
