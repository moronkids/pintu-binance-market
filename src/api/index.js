import { http, base, base_ } from "helper/http";
export const GetAllAsset = async (): Promise<Response> => {
  const res = await fetch(
    `https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset`
  );
  return res.json();
};

export const Ticker = async () => {
  const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr`);
  return res.json();
};

// export const GetAllAsset = async (iData) => {
//   const datas = await http.get(
//     `${base}/bapi/asset/v2/public/asset/asset/get-all-asset`
//   );
//   return datas.data;
// };
// export const Ticker = async (iData) => {
//   const datas = await http.get(`${base_}/api/v3/ticker/24hr`);
//   console.log(datas, "checktisout");
//   return datas.data;
// };
