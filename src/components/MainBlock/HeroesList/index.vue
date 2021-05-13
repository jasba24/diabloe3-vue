<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      dark
      hover
      small
      striped
      stacked="sm"
      :items="heroes"
      :fields="fields"
    >
      <template #cell(name)="data">
        <hero-ico :hero="data.item" />
      </template>

      <template #cell(class)="data">
        <hero-class-level
          :hero="{ class: data.item, level: data.item.level }"
        />
      </template>

      <template #cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import { formatNumber } from "@/filters/numeral";
import HeroIco from "./HeroIco";
import HeroClassLevel from "./HeroClassLevel";

export default {
  name: "HeroesList",

  components: { HeroIco, HeroClassLevel },

  filters: {
    formatNumber,
  },

  props: {
    heroes: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "class",
          label: "Class",
          sortable: true,
        },
        {
          key: "kills",
          label: "Elite Kills",
          sortable: true,
        },
      ],
    };
  },
};
</script>
