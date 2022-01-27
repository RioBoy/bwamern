/* eslint-disable import/no-anonymous-default-export */
import { CHECKOUT_BOOKING } from '../types';

const intialState = null;

export default function (state = intialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
