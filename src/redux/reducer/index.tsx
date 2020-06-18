/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 00:09:45
# LastEditors: Min
# LastEditTime: 2020-06-19 00:25:37
# Description: file content
#
============================================================================= */
import { DECREMENT, INCREMENT } from "../constants";

// 处理并返回 state
export default (state = 0, action): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
