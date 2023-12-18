import { ADD_MESSAGE } from './types';
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
