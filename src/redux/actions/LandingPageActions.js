import axiosServices from '../../services/axiosServices';

import {
  GET_NEWS,
  GET_NEWS_FAIL,
  GET_NEWS_SUCCESS,
  // DASHBOARD_DETAILS_LOADING
} from '../types/LandingPageTypes';

import { notify } from '../../utils/toastNotification';

export const getNews = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_NEWS,
    });

    const dashboardDetails = await axiosServices.get("/dashboard");
    // console.log(dashboardDetails);
    if (dashboardDetails) {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: {
          dashboardData: dashboardDetails
        }
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_NEWS_FAIL
    });
    notify('Error in fetching dashboard details', { type: 'error' });
    return error;
  }
}