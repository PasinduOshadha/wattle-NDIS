import Axios from "../../Axios";
// import jwtDecode from "jwt-decode";
import axios from "axios";
var moment = require("moment");

const getToken = null;
console.log("is token avialble", getToken);
let myId = null;
if (getToken) {
  const { data } = JSON.parse(getToken);
  // const { id } = null
  // jwtDecode(data);
  myId = id;
}

export const CurrentUser = async () => {
  console.log("is token avialble", getToken);
  return await Axios({
    pathname: `api/v1/user/${myId}`,
    method: "get",
  });
};

export const getMemberbyId = async (id) => {
  return await Axios({
    pathname: `api/v1/member/${id}`,
    method: "get",
  });
};

export const getLogo = async () => {
  return await Axios({
    pathname: "api/v1/settings/logo",
    method: "get",
  });
};

export const getCover = async () => {
  return await Axios({
    pathname: "api/v1/settings/cover",
    method: "get",
  });
};

export const getIcon = async () => {
  return await Axios({
    pathname: "api/v1/settings/icon",
    method: "get",
  });
};

export const getCaption = async () => {
  return await Axios({
    pathname: "api/v1/settings/caption",
    method: "get",
  });
};

export const getBrand = async () => {
  return await Axios({
    pathname: "api/v1/settings/brand",
    method: "get",
  });
};

export const getAboutus = async () => {
  return await Axios({
    pathname: "api/v1/aboutus",
    method: "get",
  });
};

export const getPackages = async () => {
  return await Axios({
    pathname: "api/v1/package",
    method: "get",
  });
};

export const getTestimonial = async () => {
  return await Axios({
    pathname: "api/v1/settings/testimonial",
    method: "get",
  });
};

export const Categories = async () => {
  return await Axios({
    pathname: "api/v1/category/maincategory?auth",
    method: "get",
  });
};

export const getProduct = async (day,mainId,fromDate = "",toDate = "") => {
  return await Axios({
    pathname: `api/v1/product?productName=&cfv=[]&day=${day}&sortField=productName&sortValue=asc&page=1&limit=16&mainId=${mainId}&bld=[]&fromDate=${fromDate}&toDate=${toDate}&isActive=1`,
    method: "get",
  });
};

export const getCart = async ({page,limit,userId,sort,sortField,currentTime = moment(new Date()).format("YYYY-MMMM-DD HH:mm:ss")}) => {
  return await Axios({
    pathname: `api/v1/cart/?mainId=&sortField=${sortField}&sortValue=${sort}&page=${page}&limit=${limit}&userId=${userId}&currentTime=${currentTime}`,
    method: "get",
  });
};

export const getMember = async (id) => {
  return await Axios({
    pathname: `api/v1/member/memberId/${id}`,
    method: "get",
  });
};

export const getMemberCart = async ({page,limit,userId,sort,sortField,currentTime=moment(new Date()).format("YYYY-MMMM-DD HH:mm:ss")}) => {
  return await Axios({
    pathname: `api/v1/cart/member?mainId=&sortField=${sortField}&sortValue=${sort}&page=${page}&limit=${limit}&userId=${userId}&currentTime=${currentTime}`,
    method: "get",
  });
};

export const getCompany = async () => {
  return await Axios({
    pathname: "api/v1/settings/company",
    method: "get",
  });
};

export const getOrderDetails = async () => {
  return await Axios({
    pathname: "api/v1/orderhistory/all",
    method: "get",
  });
};
export const getEmailTemplate = async () => {
  return await Axios({
    pathname: "api/v1/email/customertemplate/",
    method: "get",
  });
};

export const getProductById = async (id) => {
  return await Axios({
    pathname: `api/v1/product/${id}`,
    method: "get",
  });
};

export const getOrderCart = async ({page,limit,userId,sort,sortField}) => {
  return await Axios({
    pathname: `api/v1/orderhistory/?mainId=&sortField=${sortField}&sortValue=${sort}&page=${page}&limit=${limit}&userId=${userId}`,
    method: "get",
  });
};

export const getOrderMemberCart = async ({page,limit,userId,sort,sortField}) => {
  return await Axios({
    pathname: `api/v1/orderhistory/member?mainId=&sortField=${sortField}&sortValue=${sort}&page=${page}&limit=${limit}&userId=${userId}`,
    method: "get",
  });
};

export const getSignUpVerification = async (token) => {
  return await Axios({
    pathname: `api/v1/user/verification/${token}`,
    method: "get",
  });
};

export const getDistricts = async () => {
  // const result = await axios({
  //   method: "get",
  //   url: `https://locatesrilanka.herokuapp.com/districts`,

  //   data: "",
  //   // headers: {
  //   //   Accept: `application/json`,
  //   //   Authorization: `Bearer ${token}`,
  //   //   "Content-Type": "application/json",
  //   // },
  // });

  // const resultData = result.data;
  // return resultData;
  return await Axios({
    pathname: "api/v1/geo/states/",
    method: "get",
  });
};

export const getCities = async (id) => {
  // const result = await axios({
  //   method: "get",
  //   url: `https://locatesrilanka.herokuapp.com/cities/byDistrict/${id}`,

  //   data: "",
  //   // headers: {
  //   //   Accept: `application/json`,
  //   //   Authorization: `Bearer ${token}`,
  //   //   "Content-Type": "application/json",
  //   // },
  // });

  // const resultData = result.data;
  // return resultData;
  return await Axios({
    pathname: `api/v1/geo/suburbs/${id}`,
    method: "get",
  });
};

export const getAllCities = async () => {
  // const result = await axios({
  //   method: "get",
  //   url: `https://locatesrilanka.herokuapp.com/cities/`,

  //   data: "",
  //   // headers: {
  //   //   Accept: `application/json`,
  //   //   Authorization: `Bearer ${token}`,
  //   //   "Content-Type": "application/json",
  //   // },
  // });

  // const resultData = result.data;
  // return resultData;

  return await Axios({
    pathname: `api/v1/geo/suburbs`,
    method: "get",
  });
};