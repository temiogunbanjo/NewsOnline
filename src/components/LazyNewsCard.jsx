import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const LazyNewsCard = ({ data }) => {
  const cardStyles = {
    minWidth: 275,
    width: "31%",
    boxShadow: "0px 4px 4px rgba(165, 165, 165, 0.15)",
    backgroundColor: "white",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "10px !important",
    marginBottom: "10px !important",
    marginLeft: "10px",
    marginRight: "10px",
    p: 0,
  };

  const lazyStyles = {
    padding: "0.5rem",
    display: "inline-block",
    borderRadius: "10px"
  };

  return (
    <Card sx={cardStyles}>
      <div>
        <CardContent
          sx={{ borderBottom: "2px solid rgb(204, 204, 204)" }}
        >
          <Typography
          >
            <span className="lazy-loading" style={{...lazyStyles, width: "100%"}}></span>
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            variant="p"
            component="div"
          >
            <span className="lazy-loading" style={{...lazyStyles, width: "100%"}}></span>
          </Typography>
        </CardContent>
      </div>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2, pb: 1.3 }}
      >
        <CardActions sx={{ px: 0, minWidth: "30%" }}>
          <span className="lazy-loading" style={{...lazyStyles, width: "50%"}}></span>
          <span className="lazy-loading" style={{...lazyStyles, width: "50%"}}></span>
        </CardActions>
        <Typography variant="span" fontSize="12px" sx={{width: "20%"}}>
          <span className="lazy-loading" style={{...lazyStyles, width: "100%"}}></span>
        </Typography>
      </Stack>
    </Card>
  );
};

export default LazyNewsCard;
