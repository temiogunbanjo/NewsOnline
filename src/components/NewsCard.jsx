import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import StarIcon from "@mui/icons-material/StarBorder";
import FilledStarIcon from "@mui/icons-material/Star";

const NewsCard = ({ data }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const handleBookMark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Card sx={cardStyles}>
      <div>
        <CardContent
          sx={{ color: "black", borderBottom: "2px solid rgb(204, 204, 204)" }}
        >
          <Typography
            sx={{ fontSize: 18, fontWeight: 400 }}
            color="inherit"
            // gutterBottom
          >
            {data?.title || "-"}
          </Typography>
        </CardContent>

        <CardContent sx={{ color: "rgba(116, 115, 115, 1)" }}>
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "inherit",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {data?.content || "-"}
          </Typography>
        </CardContent>
      </div>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2, pb: 1.3 }}
      >
        <CardActions
          sx={{
            px: 0,
            width: "calc(100% - 90px)",
            maxWidth: "250px",
            justifyContent: "space-between",
          }}
        >
          <a
            href={data?.url || "#"}
            target="_blank"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textDecoration: "underline",
              color: "rgba(75, 72, 255, 1)",
            }}
            rel="noreferrer"
          >
            Read full story
          </a>
          <Button
            size="small"
            startIcon={isBookmarked ? <FilledStarIcon /> : <StarIcon />}
            sx={{ textTransform: "capitalize" }}
            onClick={handleBookMark}
          >
            <Box
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                display: { xs: "none", sm: "inline-block" },
              }}
            >
              {!isBookmarked ? "Add to bookmark" : "Remove bookmark"}
            </Box>
          </Button>
        </CardActions>
        <Typography variant="span" fontSize="12px">
          5 mins ago
        </Typography>
      </Stack>
    </Card>
  );
};

export default NewsCard;
