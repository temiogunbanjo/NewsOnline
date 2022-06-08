import React from "react";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <React.Fragment>
      <AppBar position="relative" elevation={0} color="primary" sx={{px: 7, py: 2}}>
        <Toolbar>
          <h1 style={{color: "white", fontSize: "24px", fontWeight: 500}}>NewsOnline</h1>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
