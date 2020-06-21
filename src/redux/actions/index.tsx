/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 22:11:21
# LastEditors: Min
# LastEditTime: 2020-06-20 17:39:18
# Description: file content
#
============================================================================= */

import {
  DECREMENT,
  INCREMENT,
  GET_PERSONALIZED,
  GET_PRIVATECONTENT,
  GET_NEWEST,
} from "../actionType";
import {
  api_get_personalized,
  api_get_privatecontent,
  api_get_newest,
} from "../../api";

// 增加 state 次数的方法
export const increment = (v: number = 1) => ({
  type: INCREMENT,
  data: v,
});

// 减少 state 次数的方法
export const decrement = () => ({
  type: DECREMENT,
});

export const funincrement = (v?: number) => (dispatch) => {
  dispatch(increment(v));
  setTimeout(() => {
    dispatch(increment());
  }, 100);
};

export const getPersonalized = (v?: number) => async (dispatch) => {
  const { data } = await api_get_personalized(v);
  // console.log(data);
  dispatch({
    type: GET_PERSONALIZED,
    data: data.result,
  });
};

export const getPrivatecontent = () => async (dispatch) => {
  const { data } = await api_get_privatecontent();
  // console.log(data);
  dispatch({
    type: GET_PRIVATECONTENT,
    data: data.result,
  });
};

export const getNewest = () => async (dispatch) => {
  const { data } = await api_get_newest();
  console.log(data);
  dispatch({
    type: GET_NEWEST,
    data: data.albums,
  });
};
