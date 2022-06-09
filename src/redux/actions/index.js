import axios from 'axios';
// import axiosServices from '../../services/axiosServices';
import { createQuery } from '../../utils/createQuery';

import {
  GET_NEWS,
  GET_NEWS_FAIL,
  GET_NEWS_SUCCESS,
} from '../types';

import { notify } from '../../utils/toastNotification';

export const getNews = (queryParams) => async (dispatch) => {
  try {
    dispatch({
      type: GET_NEWS,
    });

    const queryString = createQuery(queryParams);
    const newsResponse = await axios.get(`https://newsapi.org/v2/everything${queryString}`, {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY || ""
      }
    });
    console.log(newsResponse);

    if (newsResponse?.data?.articles) {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: {
          news: newsResponse.data.articles,
          totalPages: newsResponse.data.totalResults || 1
        }
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_NEWS_FAIL
    });
    notify('An error occurred', { type: 'error' });
    return error;
  }
}