import axios from "axios";
import { SERVER_URL, SERVER_URL_DEV } from "../../Constants/System";
const Axios = async ({ method = "post", pathname, obj, token = "" }) => {
  if (token === "") {
    // token = await getAccessToken();../../Constant/System
    const authN = localStorage.getItem(`${window.location.hostname}.login`);
    if (authN) {
      const { data } = JSON.parse(authN);
      token = data;
    }
  }
  // console.log("pathname", pathname);
  const result = await axios({
    method: method,
    url: `${SERVER_URL}/${pathname}`,

    data: obj,
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const resultData = result.data;
  return resultData;
};

export default Axios;
