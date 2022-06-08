import axiosServices from '../../services/axiosServices';
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
    const newsResponse = await axiosServices.get(`/everything${queryString}`);
    console.log(newsResponse);

    if (newsResponse?.articles) {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: {
          news: newsResponse.articles,
          totalPages: newsResponse.totalResults || 1
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