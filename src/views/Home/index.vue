<template>
  <div class="home">
    <home-title />

    <main-form />
  </div>
</template>

<script>
import HomeTitle from "@/views/Home/HomeTitle";
import MainForm from "@/views/Home/HomeForm";

export default {
  name: "Home",

  components: { HomeTitle, MainForm },
};
</script>
