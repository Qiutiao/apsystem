import * as types from './mutation-types';

export const setLoginBoolean = ({ commit }) => {
  commit(types.SET_Login_Boolean);
};

export const setUser = ({
  commit
}, user) => {
  commit(types.SET_USER, user);
};