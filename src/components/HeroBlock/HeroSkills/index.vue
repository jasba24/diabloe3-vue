<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />
    <active-skills :skills="skills.active" />
    <hr />
    <passive-skills :skills="skills.passive" />
  </div>
</template>

<script>
import ActiveSkills from "./ActiveSkills";
import PassiveSkills from "./PassiveSkills";

export default {
  name: "HeroSkills",

  components: { ActiveSkills, PassiveSkills },
  props: {
    skills: {
      required: true,
      type: Object,
    },
  },
};
</script>
