import axios from "axios";

export function request(config) {
  //1. 創建實例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });

  //2.攔截器
  instance.interceptors.request.use(
    (config) => {
      return config; //攔截完要還回去，否則內部就拿不到config了，最後會請求失敗
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (result) => {
      //  console.log(result);
      return result.data; //只回傳所需要的data，其他響應結果不需要用到
    },
    (err) => {
      console.log(err);
    }
  );

  //3.發送真正的網路請求
  return instance(config);
}
