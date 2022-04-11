<template>
  <section class="nav">
    <ul class="nav-list">
      <li class="nav-list-item" v-for="item in nav" @click="goto(item)">
        <img :src="item.icon" :alt="item.name" />
        <a>{{ item.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import nav from "./assets/nav.json";
const goto = (val) => {
  const newUrl = val.href.local;
  window.open(newUrl, "_blank");
};
</script>
<style lang="scss" scoped></style>
