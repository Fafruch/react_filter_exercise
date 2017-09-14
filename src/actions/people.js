import * as types from '../types/people';

export const setFilterQuery = (payload) => ({
  type: types.SET_FILTER_QUERY,
  payload: payload
});
