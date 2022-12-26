import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Trans } from "react-i18next";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" color="inherit" component="div">
                <Trans i18nKey="content.Header"></Trans>
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <DesktopNav />
              <MobileNav />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
