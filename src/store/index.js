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
    realTimeData: {
      activeUsers: {
        metric: null,
        icon: "user",
        title: "Active Users",
        reloadButtonTitle: "Live user count",
        dispatchEvent: "fetchActiveUsersCount"
      },
      downloads: {
        metric: null,
        icon: "download",
        title: "Downloads",
        reloadButtonTitle: "Total install count",
        dispatchEvent: "fetchDownloadsCount"
      },
      avgSessionDuration: {
        metric: null,
        icon: "eye",
        title: "Avg. Session Duration",
        reloadButtonTitle: "Total view count",
        dispatchEvent: "fetchAvgSessionDuration"
      },
      paidUsers: {
        metric: null,
        icon: "hand-holding-usd",
        title: "Paid Users",
        reloadButtonTitle: "Total paying user count",
        dispatchEvent: "fetchPaidUsersCount"
      }
    }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile.email = val.email;
    },
    setActiveUsersCount(state, val) {
      state.realTimeData.activeUsers.metric = val;
    },
    setDownloadsCount(state, val) {
      state.realTimeData.downloads.metric = val;
    },
    setAvgSessionDuration(state, val) {
      state.realTimeData.avgSessionDuration.metric = val.toFixed(2) + " mins";
    },
    setPaidUsersCount(state, val) {
      state.realTimeData.paidUsers.metric = val;
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
    realTimeData: state => {
      return state.realTimeData;
    }
  }
});

export default store;
