import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Spinner from "../components/Spinner";
import NewsCard from "../components/NewsCard";
import LazyNewsCard from "../components/LazyNewsCard";

import { getNews } from "../redux/actions";
import Typography from "@mui/material/Typography";

export default function LandingMain(props) {
  const pageSize = 6;
  const location = useLocation();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);

  const [page, setPage] = useState(parseInt(query.get("page") || "1", 10));

  const news = useSelector((state) => state.LandingPageReducer.news);
  const totalPages = useSelector(
    (state) => state.LandingPageReducer.totalPages
  );
  const isLoading = useSelector((state) => state.LandingPageReducer.loading);

  const handleChange = (event, value) => {
    // console.log(value);
    setPage(value);
  };

  useEffect(() => {
    dispatch(
      getNews({
        q: "presidency",
        page,
        pageSize,
      })
    );
  }, [dispatch, page]);

  return (
    <section>
      <div>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={500}
          fontSize="20px"
          py="18px"
          mt={2}
          sx={{
            borderBottom: "1px solid rgba(196, 196, 196, 1)",
          }}
        >
          Latest News
        </Typography>
      </div>
      <Stack
        direction="row"
        alignItems="stretch"
        sx={{
          mt: 3,
          mb: 6,
          flexWrap: "wrap",
        }}
      >
        {isLoading && !news.length ? (
          <Spinner />
        ) : (
          news.map((article, index) =>
            article.type === "dummy" ? (
              <LazyNewsCard key={index} />
            ) : (
              <NewsCard key={index} data={article} />
            )
          )
        )}
      </Stack>
      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 4 }}>
        {isLoading && !news.length ? null : (
          <Pagination
            page={page}
            size="small"
            count={Math.ceil(totalPages / pageSize)}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
                {...item}
              />
            )}
            shape="rounded"
            color="primary"
            onChange={handleChange}
          />
        )}
      </Stack>
    </section>
  );
}
