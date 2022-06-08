import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAIL } from "../types";

const initialState = {
  news: [
    {
      type: "dummy",
    },
    {
      type: "dummy",
    },
    {
      type: "dummy",
    },
    {
      type: "dummy",
    },
    {
      type: "dummy",
    },
    {
      type: "dummy",
    },
  ],
  totalPages: 1,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      console.log({ state });
      return {
        ...state,
        loading: true,
      };

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_NEWS_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
}
