import * as types from './mutation-types';

const mutations = {
  [types.SET_Login_Boolean](state) {
    state.loginBoolean = !state.loginBoolean;
  }
};

export default mutations;
