<template>
  <div class="h-attributes">
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white" />

    <div class="attributes">
      <div class="core">
        <hero-attribute-list :attributes="coreAttributes" />
      </div>
      <div class="secondary">
        <hero-attribute-list :attributes="secondaryAttributes" />
      </div>
    </div>

    <hr />

    <div class="resources">
      <hero-resources :resources="resources" />
    </div>
  </div>
</template>

<script>
import HeroAttributeList from "./HeroAttributeList";
import HeroResources from "./HeroResources";

const coreAttributes = ["strength", "dexterity", "vitality", "intelligence"];
const secondaryAttributes = ["damage", "toughness", "healing"];
const resources = ["life", "primaryResource", "secondaryResource"];

export default {
  name: "HeroAttributes",
  components: { HeroResources, HeroAttributeList },
  // Definimos la propiedad
  props: {
    attributes: {
      type: Object,
      required: true,
    },
  },

  computed: {
    coreAttributes() {
      return coreAttributes.map((item) => ({
        name: item,
        val: this.attributes[item],
      }));
    },
    secondaryAttributes() {
      return secondaryAttributes.map((item) => ({
        name: item,
        val: this.attributes[item],
      }));
    },

    resources() {
      const data = {
        classSlug: this.attributes.classSlug,
        resources: {},
      };
      resources.forEach((item) => {
        data.resources[item] = { name: item, val: this.attributes[item] };
      });

      return data;
    },
  },
};
</script>
