import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "../../firebaseConfig";
import router from "../router/index";
import {
  getActiveUsersCount,
  getDownloadsCount,
  getAvgSessionDuration,
  getPaidUsersCount
} from "../app/api/requests";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {
      email: ""
    },
    signinLoading: false,
    activeUsersCount: "-",
    downloadsCount: "-",
    avgSessionDuration: "-",
    paidUsersCount: "-"
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile.email = val.email;
    },
    setActiveUsersCount(state, val) {
      state.activeUsersCount = val;
    },
    setDownloadsCount(state, val) {
      state.downloadsCount = val;
    },
    setAvgSessionDuration(state, val) {
      state.avgSessionDuration = val.toFixed(2);
    },
    setPaidUsersCount(state, val) {
      state.paidUsersCount = val;
    }
  },
  actions: {
    async signin({ dispatch, state }, form) {
      try {
        state.signinLoading = true;

        const { user } = await firebase.auth.signInWithEmailAndPassword(
          form.email,
          form.password
        );

        dispatch("fetchUserProfile", user);
      } catch (error) {
        alert(error.message);
      } finally {
        state.signinLoading = false;
      }
    },
    async fetchUserProfile({ commit }, user) {
      commit("setUserProfile", user);

      if (window.location.pathname === "/signin") {
        router.push("/");
      }
    },
    async signout({ commit }) {
      await firebase.auth.signOut();

      commit("setUserProfile", {});

      router.push("/signin");
    },
    async fetchActiveUsersCount({ commit }) {
      const activeUsersCount = await getActiveUsersCount();

      commit("setActiveUsersCount", activeUsersCount);
    },
    async fetchDownloadsCount({ commit }) {
      const downloadsCount = await getDownloadsCount();

      commit("setDownloadsCount", downloadsCount);
    },
    async fetchAvgSessionDuration({ commit }) {
      const avgSessionDuration = await getAvgSessionDuration();

      commit("setAvgSessionDuration", avgSessionDuration);
    },
    async fetchPaidUsersCount({ commit }) {
      const paidUsersCount = await getPaidUsersCount();

      commit("setPaidUsersCount", paidUsersCount);
    }
  },
  getters: {
    userProfile: state => {
      return state.userProfile;
    },
    signinLoading: state => {
      return state.signinLoading;
    },
    activeUsersCount: state => {
      return state.activeUsersCount;
    },
    downloadsCount: state => {
      return state.downloadsCount;
    },
    avgSessionDuration: state => {
      return state.avgSessionDuration;
    },
    paidUsersCount: state => {
      return state.paidUsersCount;
    }
  }
});

export default store;
