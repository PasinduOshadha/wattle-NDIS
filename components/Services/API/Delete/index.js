import Axios from "../../Axios";

export const DeleteCard = async (id) => {
  return await Axios({
    pathname: `api/v1/cart/${id}`,
    method: "delete",
  });
};
export const DeleteWishlist = async (id) => {
  return await Axios({
    pathname: `api/v1/wishlist/${id}`,
    method: "delete",
  });
};
export const DeleteOrderHistory = async (id) => {
  return await Axios({
    pathname: `api/v1/orderhistory/${id}`,
    method: "delete",
  });
};

export const DeleteCart = async (id) => {
  return await Axios({
    pathname: `api/v1/cart/${id}`,
    method: "delete",
  });
};
