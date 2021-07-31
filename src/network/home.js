//把首頁所需要的網路請求集中管理

import { request } from "./request";

//banner and recommend
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}

//products
export function getProductsData(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
