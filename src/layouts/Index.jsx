import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// import Button from "../components/common/Button"; 
import Spinner from "../components/Spinner";

import { getNews } from "../redux/actions/LandingPageActions";

export default function LandingMain(props) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const dashboardData = useSelector(
    (state) => state.DashboardReducer.dashboardData
  );
  const isLoading = useSelector((state) => state.DashboardReducer.loading);

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const setNext = () => {
    setPage(page + 1);
  };

  const cardStyles = {
    minWidth: 275,
    boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
    backgroundColor: "primary.main",
    flexGrow: 1,
    marginTop: "10px !important",
    marginBottom: "10px !important",
    p: 1.8,
  };

  // const tableData = useMemo(
  //   () => dashboardData.lots || [],
  //   [dashboardData.lots]
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardDetails());
  }, [dispatch]);

  return (
    <section>
       <Stack
        direction="row"
        alignItems="stretch"
        spacing={3}
        sx={{
          mt: 6,
          mb: 6,
          overflowX: "auto",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Expected Yield (MT)
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? <Spinner size={20} /> : dashboardData.total_yield}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Acreage (HA)
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? <Spinner size={20} /> : dashboardData.total_acreage}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Number of Farmers
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? (
                <Spinner size={20} />
              ) : (
                dashboardData.number_of_farmers
              )}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
