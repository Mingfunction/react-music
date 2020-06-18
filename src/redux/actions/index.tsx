/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 00:09:45
# LastEditors: Min
# LastEditTime: 2020-06-19 00:25:15
# Description: file content
#
============================================================================= */
import { DECREMENT, INCREMENT } from "../constants";

// 增加 state 次数的方法
export const increment = () => ({
  type: INCREMENT,
});

// 减少 state 次数的方法
export const decrement = () => ({
  type: DECREMENT,
});
