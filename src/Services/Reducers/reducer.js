import { ADD_TO_CART } from "../Constants";

const initialState = {
  cardData: [],
};

const cardItem = (state = initialState, action) => {
  //eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        cardData: action.data,
      };
      break;
      default:
        return state;
  }
};
export default cardItem;
