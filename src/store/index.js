import Vue from "vue";
import Vuex from "vuex";

import oauth from "@/store/modules/oauth";
import loading from "@/store/modules/loading";
import error from "@/store/modules/error";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    oauth,
    loading,
    error,
  },
});
