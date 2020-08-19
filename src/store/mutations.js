import * as types from './mutation-types';

const mutations = {
  [types.SET_Login_Boolean](state) {
    state.loginBoolean = !state.loginBoolean;
  },
  [types.SET_USER](state, user) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  }
};

export default mutations;
