/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-20 00:13:55
# LastEditors: Min
# LastEditTime: 2020-06-20 17:55:18
# Description: file content
#
============================================================================= */

export interface discovery_store_type {
  personalized: personalized[];
  privatecontent: privatecontent[];
  newest: newest[];
}

export interface personalized {
  alg: string;
  canDislike: boolean;
  copywriter: string;
  highQuality: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
  type: number;
}

export interface privatecontent {
  alg: string;
  copywriter: string;
  id: number;
  name: string;
  picUrl: string;
  sPicUrl: string;
  type: number;
  url: string;
}

export interface newest {
  [x: string]: string;
  name: string;
  commentThreadId: string;
}
