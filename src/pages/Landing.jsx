import React from "react";
import { Outlet } from "react-router-dom";

import Stack from "@mui/material/Stack";

import Header from "../components/Header";

function LandingPage() {
  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <Header />
      <main id="main-page-content">
        <Outlet />
      </main>
    </Stack>
  );
}

export default LandingPage;
