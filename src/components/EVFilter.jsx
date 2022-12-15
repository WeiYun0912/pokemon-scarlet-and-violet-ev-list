import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel } from "@mui/material";
import { Trans } from "react-i18next";

const EVName = {
  HP: false,
  Attack: false,
  Defense: false,
  SpAttack: false,
  SpDefense: false,
  Speed: false,
};

const EVFilter = ({ setEV }) => {
  const [disabled, setDisabled] = useState(EVName);
  const handleChange = (e) => {
    if (e.target.checked == false) {
      setEV(0);
      setDisabled(EVName);
    } else {
      setEV(+e.target.value);
      const evStates = Object.entries(disabled)
        .map((evState) => {
          if (e.target.name !== evState[0]) {
            return { ...evState, 1: true };
          } else {
            return { ...evState };
          }
        })
        .reduce((a, v) => ({ ...a, [v[0]]: v[1] }), {});
      setDisabled(evStates);
    }
  };
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.HP}
            name="HP"
            value={1}
          />
        }
        label={<Trans i18nKey="content.EV1"></Trans>}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.Attack}
            name="Attack"
            value={3}
          />
        }
        label={<Trans i18nKey="content.EV2"></Trans>}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.Defense}
            name="Defense"
            value={4}
          />
        }
        label={<Trans i18nKey="content.EV3"></Trans>}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.SpAttack}
            name="SpAttack"
            value={2}
          />
        }
        label={<Trans i18nKey="content.EV4"></Trans>}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.SpDefense}
            name="SpDefense"
            value={5}
          />
        }
        label={<Trans i18nKey="content.EV5"></Trans>}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disabled={disabled.Speed}
            name="Speed"
            value={6}
          />
        }
        label={<Trans i18nKey="content.EV6"></Trans>}
      />
    </Box>
  );
};

export default EVFilter;
