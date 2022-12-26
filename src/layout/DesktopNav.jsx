import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

const DesktopNav = () => {
  const { i18n, ready } = useTranslation();
  if (!ready) return "loading...";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="desktop">
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
      <Typography variant="h6">&nbsp;/&nbsp;</Typography>
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
    </div>
  );
};

export default DesktopNav;
