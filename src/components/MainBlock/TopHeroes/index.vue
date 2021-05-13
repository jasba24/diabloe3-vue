<template>
  <div class="top-heroes">
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <b-row>
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <top-hero :hero="hero" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from "./TopHero";

export default {
  name: "TopHeros",

  components: { TopHero },

  props: {
    heroes: {
      required: true,
      type: Array,
    },
  },
};
</script>
