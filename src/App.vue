<template>
  <div id="app">
    <load-layout v-if="isLoading">
      <base-loading />
    </load-layout>

    <main-layout v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";

import LoadLayout from "@/layouts/LoadLayout";
import MainLayout from "@/layouts/MainLayout";
import BaseLoading from "@/components/BaseLoading";

export default {
  name: "App",
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading,
  },

  computed: {
    ...mapState("loading", {
      isLoading: "isLoading",
    }),
  },
};
</script>

<style lang="stylus">
#app
  padding 60px 0
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-color #15202b
</style>
