import { getCompany } from "../../Services/API/Get";
let A_SERVER = "https://backend.aus.admin.ceylonhealthyfood.biz";
let U_SERVER = "https://emailbackend.infinitycs.com.au";
export const SL_WEBSITE = "https://sl.ceylonhealthyfood.biz/#/home";
export const AU_WEBSITE = "https://aus.ceylonhealthyfood.biz/#/home";
//Proudction
export const SERVER_URL = U_SERVER;
export const ADMIN_SERVER_URL = A_SERVER;
export const ADMIN_SERVER_DEV = "http://localhost:5000";
//Development
export const SERVER_URL_DEV = "http://localhost:4000";

//IMAGE SEVER
// export const IMAGE_SERVER_URL = "http://localhost:5000";
export const IMAGE_SERVER_URL = A_SERVER;
export const IMAGE_SERVER_URL_DEV = ADMIN_SERVER_URL;
export const IMAGE_SERVER_URL_DEV2 = SERVER_URL;

export const CURRENCY = async () => {
  let payload = "";
  const res = await getCompany();

  if (res.statusCode === 200 || res.statusCode === 201) {
    payload = res.data[res.data.length - 1].currency.split("-")[0];
  }

  return payload;
};
export const TIMEOUT = 5000;
