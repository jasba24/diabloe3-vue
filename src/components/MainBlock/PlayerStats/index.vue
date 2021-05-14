<template>
  <div class="multi-stats pl-lg-4">
    <hr class="bg-white mt-5 d-lg-none" />
    <h2 class="font-diablo my-4">Stats</h2>
    <div class="stats d-flex flex-column bg-dark p-3">
      <single-stat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{ value: stats.kills.monsters, text: 'Lifetime Kills' }"
      />
      <single-stat
        class="mb-3"
        ico-name="crown"
        ico-color="#FFC107"
        :info="{ value: stats.kills.elites, text: 'Elite Kills' }"
      />
      <single-stat
        class="mb-3"
        ico-name="dungeon"
        ico-color="#795548"
        :info="{ value: stats.paragonLevel, text: 'Paragon Level' }"
      />
      <time-played :timePlayed="timePlayed" />
    </div>
  </div>
</template>

<script>
import heroName from "@/mixins/heroName";
import SingleStat from "./SingleStat";
import TimePlayed from "./TimePlayed";
import { HeroData } from "../../../utils/typeValidation";

export default {
  name: "PlayerStats",

  mixins: [heroName],

  components: { SingleStat, TimePlayed },

  props: {
    stats: {
      required: true,
      type: Object,
    },
  },

  computed: {
    timePlayed() {
      return Object.keys(this.stats.timePlayed)
        .sort()
        .map((hero) => {
          return new HeroData(
            this.classToName(hero),
            this.stats.timePlayed[hero],
            hero
          );
        });
    },
  },
};
</script>

<style></style>
