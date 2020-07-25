import { DECREMENT_COUNTER_CC, DECREMENT_COUNTER_FC, INCREMENT_COUNTER_CC, INCREMENT_COUNTER_FC } from './actionTypes';

export const decrementCounterCc = () => ({
  type: DECREMENT_COUNTER_CC,
});

export const incrementCounterCc = () => ({
  type: INCREMENT_COUNTER_CC,
});

export const decrementCounterFc = () => ({
  type: DECREMENT_COUNTER_FC,
});

export const incrementCounterFc = () => ({
  type: INCREMENT_COUNTER_FC,
});
