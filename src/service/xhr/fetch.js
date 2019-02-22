import Store from "store";
import store from "../../store/index";
import { Config } from "../../utils/index";
import { Toast } from "vant";
const baseUrl = Config.api.url;

export default async (type = "GET", url = "", data = {}) => {
  store.commit("isLoading", true);

  type = type.toUpperCase();
  url = baseUrl + url;
  let stopUrl = []; //中断链接数组
  let aData = []; // 存储数据
  let sData = ""; // 拼接数据
  for (let attr in data) {
    aData.push(attr + "=" + data[attr]);
  }
  sData = aData.join("&");
  if (type === "GET") {
    if (sData) url = url + "?" + sData;
  }
  let token = Store.get(Config.store.token);
  // let token = token;
  return new Promise((resolve, reject) => {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // requestObj = new ActiveXObject();
    }
    //设置xhr请求的超时时间
    requestObj.timeout = 10000;
    requestObj.open(type, url, true);
    requestObj.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    requestObj.setRequestHeader("authorization", token);
    requestObj.setRequestHeader("device", "mobile");
    if (Store.get(Config.constants.enterpriseCode))
      requestObj.setRequestHeader(
        "EnterpriseCode",
        Store.get(Config.constants.enterpriseCode)
      );
    requestObj.send(sData);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          stopUrl = store.getters.getStopUrl.slice();
          if (stopUrl.length > 0) {
            for (let i = 0; i < stopUrl.length; i++) {
              let uri = stopUrl[i];
              if (requestObj.responseURL.includes(uri)) {
                stopUrl.splice(i, 1);
                store.commit("stopUrl", stopUrl);
                return;
              }
            }
          }
          const authorization = requestObj.getResponseHeader("authorization");
          if (authorization) Store.set(Config.store.token, authorization); // 重新覆盖新Token
          let obj = requestObj.response;
          if (typeof obj !== "object") {
            obj = JSON.parse(obj);
          }
          if (obj.code == "TOKEN_EXPIRE") {
            store.commit("invalidToken", true);
            store.commit("isLoading", false);
            return;
          } else {
            store.commit("invalidToken", false);
            store.commit("isLoading", false);
            if (obj.code === Config.api.success) {
              resolve(obj);
              return;
            } else {
              // 失败
              if (obj.code !== "0") {
                Toast(obj.msg);
              }
              return;
            }
          }
        } else {
          store.commit("isLoading", false);
          Toast("网络异常");
          reject(requestObj);
        }
      }
    };
  });
};
