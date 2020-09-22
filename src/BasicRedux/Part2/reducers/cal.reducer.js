import {ACTION_ADD, ACTION_REM, ACTION_CLR} from '../Constant';

const initialState = {
  count: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_ADD:
      return {...state, count: state.count + 1};
    case ACTION_REM:
      return {...state, count: state.count - 1};
    case ACTION_CLR:
      return {...state, count: payload};

    default:
      return state;
  }
};
