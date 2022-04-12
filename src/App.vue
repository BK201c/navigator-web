<template>
  <section class="nav" id="particles">
    <ul class="nav-list">
      <li class="nav-list-item" v-for="item in navlist" @click="goto(item)">
        <div class="container">
          <img
            class="icon"
            :src="getIconUrl(item.icon.name)"
            :alt="item.title.name"
            :style="{ ...item.icon.style }"
          />
          <span class="title" :style="{ ...item.title.style }">{{
            item.title.name
          }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
const navlist = ref("");
const isLocal = ref(true);

//点击跳转
const goto = (val) => {
  const newUrl = isLocal.value ? val.href.local : val.href.external;
  window.open(newUrl, "_blank");
};

//获取图标路径
const getIconUrl = (name) =>
  new URL(`/data/icons/${name}`, import.meta.url).href;

//获取nav列表
const getnav = async () => {
  navlist.value = await fetch("/data/data.json").then((response) =>
    response.json()
  );
};

onBeforeMount(() => {
  getnav();
});
onMounted(() => {
  particlesJS.load("particles", "./assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
</script>
