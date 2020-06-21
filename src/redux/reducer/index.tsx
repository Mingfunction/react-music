/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 00:09:45
# LastEditors: Min
# LastEditTime: 2020-06-19 00:25:37
# Description: reducers
#
============================================================================= */
import { combineReducers } from "redux";
import { DECREMENT, INCREMENT } from "../actionType";
import discovery_store from "./discovery/discovery";

// 处理并返回 state
const reducer = (state = 0, action): number => {
  switch (action.type) {
    case INCREMENT:
      return state + action.data;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default combineReducers({ discovery_store, reducer });
