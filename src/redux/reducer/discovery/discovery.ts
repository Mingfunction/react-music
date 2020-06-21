/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 23:28:21
# LastEditors: Min
# LastEditTime: 2020-06-19 23:28:21
# Description: discovery仓库
#
============================================================================= */

import {
  GET_PERSONALIZED,
  GET_PRIVATECONTENT,
  GET_NEWEST,
} from "../../actionType";
import { discovery_store_type } from "./type";

const initState = {
  personalized: [],
  privatecontent: [],
  newest: [],
};

const discovery_store = (state = initState, action): discovery_store_type => {
  switch (action.type) {
    case GET_PERSONALIZED:
      return {
        ...state,
        personalized: action.data,
      };
    case GET_PRIVATECONTENT:
      return {
        ...state,
        privatecontent: action.data,
      };
    case GET_NEWEST:
      return {
        ...state,
        newest: action.data,
      };
    default:
      return state;
  }
};

export default discovery_store;
