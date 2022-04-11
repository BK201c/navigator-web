<template>
  <section class="nav">
    <ul class="nav-list">
      <li class="nav-list-item" v-for="item in navlist" @click="goto(item)">
        <div class="container">
          <img
            class="icon"
            :src="getImageUrl(item.icon.name)"
            :alt="item.title.name"
          />
          <span class="title">{{ item.title.name }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const goto = (val) => {
  const newUrl = val.href.local;
  window.open(newUrl, "_blank");
};

const navlist = await fetch("/data/data.json").then((response) =>
  response.json()
);

console.log(navlist);

const getImageUrl = (name) => new URL(`/icons/${name}`, import.meta.url).href;
</script>
