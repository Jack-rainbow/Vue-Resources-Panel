import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '', //权限验证
    tagsList: [], //打开的标签页个数,
    isCollapse: false, //侧边导航是否折叠
  },
  mutations: {
    //保存token
    COMMIT_TOKEN(state, object) {
      state.token = object.token;
    },
    //保存标签
    TAGES_LIST(state, arr) {
      state.tagsList = arr;
    },
    IS_COLLAPSE(state, bool) {
      state.isCollapse = bool;
    }
  },
  actions: {

  },
  getters: {

  },
  plugins: [createPersistedState()]
});
