import Axios from "../../Axios";

export const RegisterUser = async (obj) =>
  await Axios({
    pathname: "api/v1/user",
    obj: obj,
  });



export const LoginQuery = async (obj) =>
  await Axios({
    pathname: "api/v1/login",
    obj: obj,
  });

export const AddMember = async (obj) =>
  await Axios({
    pathname: "api/v1/member",
    obj: obj,
  });

export const sendVerification = async (obj) =>
  await Axios({
    pathname: `api/v1/login/reset`,
    obj: obj,
  });

export const resetPassword = async (obj) =>
  await Axios({
    pathname: `api/v1/login/update`,
    obj: obj,
  });

export const addCart = async (obj) =>
  await Axios({
    pathname: `api/v1/cart`,
    obj: obj,
  });

export const postContacts = async (obj) =>
  await Axios({
    pathname: `api/v1/contactus/yourcare/contactus`,
    obj: obj,
    method: "POST"
  });

export const postFeedback = async (obj) =>
  await Axios({
    pathname: `api/v1/contactus/yourcare/yourcarefeedbackemail`,
    obj: obj,
    method: "POST"
  });

export const postReferrel = async (obj) =>
  await Axios({
    pathname: `api/v1/contactus/yourcare/yourcarereferralemail`,
    obj: obj,
    method: "POST"
  });

export const OrderSave = async (obj) =>
  await Axios({
    pathname: `api/v1/orderhistory/`,
    obj: obj,
  });

export const signUpVerification = async (obj) =>
  await Axios({
    pathname: `api/v1/user/verification/`,
    obj: obj,
  });

export const addSubscribe = async (obj) =>
  await Axios({
    pathname: `api/v1/subscribe/`,
    obj: obj,
  });
export const addDeliveryPartners = async (obj) =>
  await Axios({
    pathname: `api/v1/deliverypartner`,
    obj: obj,
  });
export const addKitchenPartners = async (obj) =>
  await Axios({
    pathname: `api/v1/kitchenpartner`,
    obj: obj,
  });
