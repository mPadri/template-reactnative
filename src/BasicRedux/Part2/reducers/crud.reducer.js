import {ACTION_TAMBAH, ACTION_HAPUS} from '../Constant';

const initialState = {
  data: [],
};
console.log('initialState', initialState);

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TAMBAH:
      return {...state, data: [...state.data, payload]};
    case ACTION_HAPUS:
      return {
        ...state,
        data: state.data.filter((el, indexData) => indexData !== payload),
      };
    default:
      return state;
  }
};
