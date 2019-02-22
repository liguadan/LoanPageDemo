import fetch from "./xhr/fetch";

/**
 * 首页列表
 * @param
 */
export const getHomeList = param => fetch("GET", "/v1/home/prods", param);
/**
 * 产品详情
 * @param
 */
export const getFinancList = param => fetch("POST", "/v1/home/details ", param);

/**
 * 消息列表
 * @param
 */
export const getInformList = param => fetch("GET", "/v1/news/list", param);

/**
 * 删除消息
 * @param
 */
export const postDelInform = param => fetch("POST", "/v1/news/delete", param);

/**
 * 清空消息
 * @param
 */
export const getClearInform = param => fetch("GET", "/v1/news/clear", param);

/**
 * 图文详情
 * @param
 */
export const imgTextDetail = param => fetch("POST", "/v1/mobileAppAdvert/getAppAdvertDetailList", param);
