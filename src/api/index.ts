/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 23:21:24
# LastEditors: Min
# LastEditTime: 2020-06-19 23:22:18
# Description: API
#
============================================================================= */

import axios from "axios";

// 获取推荐歌单
export const api_get_personalized = (limit: number = 10) =>
  axios.get(`api/personalized?limit=${limit}`);

// 独家放松（ 推荐页 独家放送有专门的接口 ）
export const api_get_privatecontent = () =>
  axios.get(`api/personalized/privatecontent`);

// 最新专辑 获取云音乐首页新碟上架数据
export const api_get_newest = () => axios.get("api/album/newest");
