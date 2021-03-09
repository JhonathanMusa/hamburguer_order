import {
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from "../constants/orderConstants";

export const orderListReducers = (
  state = { loading: true, orders: [] },
  action
) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { loading: true };
    case ORDER_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
