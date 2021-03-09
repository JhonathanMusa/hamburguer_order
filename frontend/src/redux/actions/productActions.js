import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import Axios from "axios";

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await Axios.get("http://localhost:5000/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};
