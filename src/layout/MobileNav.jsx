import { List, ListItem, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Menu from "/menu.png";
const MobileNav = ({ handleInstallClick, deferredPrompt }) => {
  const [open, setOpen] = useState(false);

  const { i18n, ready } = useTranslation();
  if (!ready) return "loading...";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const list = (
    <div
      className="list"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Typography
            variant="h6"
            color="inherit"
            component="a"
            onClick={handleInstallClick}
            style={{
              display: deferredPrompt ? "block" : "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Install App
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="h6"
            color="inherit"
            component="a"
            style={{ cursor: "pointer" }}
            href="https://github.com/WeiYun0912/pokemon-scarlet-and-violet-ev-list"
            target="_blank"
          >
            Github
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ cursor: "pointer" }}
            onClick={() => changeLanguage("zh")}
          >
            中文 (Traditional-Chinese)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ cursor: "pointer" }}
            onClick={() => changeLanguage("eng")}
          >
            英文 (English)
          </Typography>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="mobile">
      <img
        className="menu"
        src={Menu}
        width={40}
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default MobileNav;
