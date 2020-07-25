import { DECREMENT_COUNTER_CC, DECREMENT_COUNTER_FC, INCREMENT_COUNTER_CC, INCREMENT_COUNTER_FC } from './actionTypes';

const initialState = {
  counterCc: 0,
  counterFc: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER_CC:
      return {
        ...state,
        counterCc: state.counterCc + 1,
      };
    case DECREMENT_COUNTER_CC:
      return {
        ...state,
        counterCc: state.counterCc - 1,
      };
    case INCREMENT_COUNTER_FC:
      return {
        ...state,
        counterFc: state.counterFc + 1,
      };
    case DECREMENT_COUNTER_FC:
      return {
        ...state,
        counterFc: state.counterFc - 1,
      };
    default:
      return state;
  }
};

export default reducer;
