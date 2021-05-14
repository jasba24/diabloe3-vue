<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />
    <b-nav pills small>
      <b-nav-item
        :active="!isPassiveSkillsActive"
        @click="changeComponent('activeSkills')"
        >Active</b-nav-item
      >
      <b-nav-item
        :active="isPassiveSkillsActive"
        @click="changeComponent('passiveSkills')"
        >Passive</b-nav-item
      >
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps" />
    </keep-alive>
  </div>
</template>

<script>
// import ActiveSkills from "./ActiveSkills";
// import PassiveSkills from "./PassiveSkills";

export default {
  name: "HeroSkills",

  components: {
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ "./ActiveSkills"),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ "./PassiveSkills"),
  },
  props: {
    skills: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      activeComponent: "activeSkills",
    };
  },

  computed: {
    componentProps() {
      return this.activeComponent === "activeSkills"
        ? this.skills.active
        : this.skills.passive;
    },

    isPassiveSkillsActive() {
      return this.activeComponent === "passiveSkills";
    },
  },

  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>
