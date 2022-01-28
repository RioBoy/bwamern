/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PAGE } from '../types';

const intialState = {};

export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
