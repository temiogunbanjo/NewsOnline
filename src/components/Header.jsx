import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <React.Fragment>
      <AppBar position="relative" elevation={0} color="primary">
        <Toolbar>
          <h3 style={{color: "white"}}>NewsOnline</h3>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
