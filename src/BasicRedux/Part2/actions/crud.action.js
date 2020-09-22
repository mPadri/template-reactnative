import {ACTION_TAMBAH, ACTION_HAPUS} from '../Constant';

export const add = payload => {
  return dispatch => {
    dispatch({type: ACTION_TAMBAH, payload: payload});
  };
};
export const del = payload => {
  return dispatch => {
    dispatch({type: ACTION_HAPUS, payload: payload});
  };
};
