<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter">{{ heroTime.hero }}</h5>
      <span>
        <b-badge class="w-50p">{{ (heroTime.time * 100).toFixed(2) }}</b-badge>
      </span>
    </div>
    <b-progress class="mb-3 rounded-0" :max="1" height="14px">
      <b-progress-bar :value="heroTime.time" :class="classHeroBg">{{
        heroTime.hero
      }}</b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
import { HeroData } from "@/utils/typeValidation";

export default {
  name: "TimePlayedHero",

  props: {
    heroTime: {
      type: HeroData,
      required: true,
    },
  },

  computed: {
    classHeroBg() {
      return `hero-bg-color-${this.heroTime.classSlug}`;
    },
  },
};
</script>

<style lang="stylus">
// Definimos una variable, parecida a un objeto javascript
// clave:valor
$heroesBg = {
  barbarian: #4e1c16,
  crusader: #795548,
  demon-hunter: #F44336,
  monk: #ff9800,
  necromancer: #00bcd4,
  witch-doctor: #8bc34a,
  wizard: #3f51b5
}

// Creamos las clases CSS necesarias
.progress-time-played

  h5.title
    color #000

  .w-50p
    position relative
    width 50px
    bottom -2px
    border-bottom-left-radius 0
    border-bottom-right-radius 0


  // Bucle "for"
  // Itera sobre la variable $heroesBg
  // "hero" es la clave
  // "bgColor" es el valor
  for hero, bgColor in $heroesBg
    .hero-bg-color-{hero}
      background-color bgColor

.progress-time-played .hero-bg-color-barbarian {
  background-color: #4e1c16;
}
.progress-time-played .hero-bg-color-crusader {
  background-color: #795548;
}
.progress-time-played .hero-bg-color-demon-hunter {
  background-color: #f44336;
}
.progress-time-played .hero-bg-color-monk {
  background-color: #ff9800;
}
.progress-time-played .hero-bg-color-necromancer {
  background-color: #00bcd4;
}
.progress-time-played .hero-bg-color-witch-doctor {
  background-color: #8bc34a;
}
.progress-time-played .hero-bg-color-wizard {
  background-color: #3f51b5;
}
</style>
