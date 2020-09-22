import {ACTION_ADD, ACTION_REM, ACTION_CLR} from '../Constant';

export const setStateToADD = () => {
  return {
    type: ACTION_ADD,
  };
};
export const setStateToREM = () => {
  return {
    type: ACTION_REM,
  };
};
export const setStateToCLR = payload => {
  return {
    type: ACTION_CLR,
    payload,
  };
};

export const add = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setStateToADD());
    }, 1000);
  };
};
export const remove = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setStateToREM());
    }, 1000);
  };
};
export const clear = payload => {
  return dispatch => {
    dispatch(setStateToCLR(payload));
  };
};
