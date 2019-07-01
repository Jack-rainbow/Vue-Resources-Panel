import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import { getToken,setToken, removeToken } from '@/utils/auth';
import { login } from '@/api/api.js';

Vue.use(Vuex);

// 设置cookie的key;
const setCookieList = ['token', 'userId', 'username'];

export default new Vuex.Store({
  state: {
    copyright: 'Yehocher',
    tagsList: [], // 打开的标签页个数,
    isCollapse: false, // 侧边导航是否折叠
    token: '', // 权限验证
    userId: '',
    username: '',
    user: {},
  },
  mutations: {
    // 保存token
    SET_TOKEN(state, payload) {
      setCookieList.forEach((key) => {
        state[key] = payload[key];
        setToken(payload[key], key);
      });
    },
    //保存标签
    TAGES_LIST(state, arr) {
      state.tagsList = arr;
    },
    IS_COLLAPSE(state, bool) {
      state.isCollapse = bool;
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
        const res = await login('/xpaas-console-api/api/v1/users/login', params);
        const { data, status } = res;
        if (status === 200 && data.code === '0') {
          commit('update', {
            user: data.payload,
          });
          commit('SET_TOKEN', data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {

  },
  // plugins: [
  //   createPersistedState(),
  // ],
});
