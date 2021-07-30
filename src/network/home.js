//把首頁所需要的網路請求集中管理

import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}
