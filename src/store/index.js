import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import modules from "./modules/";
import createLogger from "../plugins/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
// const state = { isLoading: false };
const store = new Vuex.Store({
  state: {
    isLoading: false,
    dialogText: "",
    isDialogShow: false,
    invalidToken: false,
    stopUrl: []
  },
  getters: {
    getStopUrl: function(state) {
      return state.stopUrl;
    },
    getIsLoading: function(state) {
      return state.isLoading;
    }
  },
  actions,
  mutations: {
    isLoading(state, extra) {
      state.isLoading = extra;
    },
    dialogText(state, extra) {
      state.dialogText = extra;
    },
    isDialogShow(state, extra) {
      state.isDialogShow = extra;
    },
    invalidToken(state, extra) {
      state.invalidToken = extra;
    },
    stopUrl(state, extra) {
      state.stopUrl = extra;
    }
  },
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
export default store;
