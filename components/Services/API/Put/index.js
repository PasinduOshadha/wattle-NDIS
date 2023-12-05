import jwtDecode from "jwt-decode";
import Axios from "../../Axios";

const getToken = localStorage.getItem(`${window.location.hostname}.login`);
let myId = "";
if (getToken) {
  const { data } = JSON.parse(getToken);
  const { id } = jwtDecode(data);
  myId = id;
}

export const EditUserQuery = async (obj) => {
  return await Axios({
    pathname: `api/v1/user/${myId}`,
    obj: obj,
    method: "put",
  });
};

export const UpdateUserwithemail = async (obj) =>
await Axios({
  pathname: `api/v1/user/updateWithEmail/${myId}`,
  obj: obj,
  method: "put",
});

export const packageToUser = async (obj, id,status) =>
  await Axios({
    pathname: `api/v1/user/package/${status}/${id}`,
    obj: obj,
    method: "put",
  });

  export const packageToMember = async (obj, id,status) =>
  await Axios({
    pathname: `api/v1/member/package/${status}/${id}`,
    obj: obj,
    method: "put",
  });

  export const CartAddress = async (obj, id) =>
  await Axios({
    pathname: `api/v1/cart/deliveryAddress/${id}`,
    obj: obj,
    method: "put",
  });

  export const EditMemberQuery = async (obj,id) => {
    return await Axios({
      pathname: `api/v1/member/${id}`,
      obj: obj,
      method: "put",
    });
  };



