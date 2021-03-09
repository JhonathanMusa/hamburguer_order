import axios from "axios";
import {
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from "../constants/orderConstants";

export const listOrders = () => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:5000/api/orders");
    dispatch({ type: ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_FAIL, payload: error });
  }
};
