import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { login } from '@/api/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    copyright: 'Yehocher',
    token: '', // 权限验证
    tagsList: [], // 打开的标签页个数,
    isCollapse: false, // 侧边导航是否折叠
    user: {
      token: '',
      userId: '',
      username: '',
    },
  },
  mutations: {
    // 保存token
    COMMIT_TOKEN(state, object) {
      state.token = object.token;
    },
    // 保存标签
    TAGES_LIST(state, arr) {
      state.tagsList = arr;
    },
    IS_COLLAPSE(state, bool) {
      state.isCollapse = bool;
    },
    login(state, payload) {
      Object.keys(payload).forEach((k) => {
        state[k] = payload[k];
      });
    },
    update(state, payload) {
      Object.keys(payload).forEach((k) => {
        state[k] = payload[k];
      });
    },
  },
  actions: {
    async loginByUser({ commit }, params) {
      try {
        const res = await login('/users/login', params);
        const data = res.payload;
        console.log(data);
        commit('update', {
          user: data,
        });
  
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {

  },
  plugins: [
    createPersistedState(),
  ],
});
