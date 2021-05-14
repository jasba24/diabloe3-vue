<template>
  <div>
    <base-loading v-if="isLoading" />
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData" />
      <artisans-block :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import MainBlock from "@/components/MainBlock/";
import BaseLoading from "@/components/BaseLoading";
import ArtisansBlock from "@/components/ArtisansBlock/";
import setError from "@/mixins/setError";
import { getApiAccount } from "../../api/search";

export default {
  name: "ProfileView",

  components: { BaseLoading, MainBlock, ArtisansBlock },

  mixins: [setError],

  data() {
    return {
      isLoading: false,
      profileData: null,
    };
  },

  computed: {
    artisansData() {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore,
      };
    },
  },

  created() {
    this.isLoading = true;
    const { region, battleTag: account } = this.$route.params;
    this.fetchData(region, account);
  },

  methods: {
    fetchData(region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data;
        })
        .catch((err) => {
          this.profileData = null;

          const errObj = {
            routeParams: this.$route.params,
            message: err.message,
          };

          if (err.response) {
            errObj.data = err.response.data;
            errObj.status = err.response.status;
          }

          this.setApiErr(errObj);

          this.$router.push({ name: "Error" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
