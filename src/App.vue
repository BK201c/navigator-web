<template>
  <section class="nav" id="tsparticles">
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
import { tsParticles } from "tsparticles";
const navlist = ref("");
const isLocal = ref(true);

//点击跳转
const goto = (val) => {
  const newUrl = isLocal.value ? val.href.local : val.href.external;
  window.open(newUrl, "_blank");
};

//获取图标路径
const getIconUrl = (name) =>
  new URL(`./assets/icons/${name}.png`, import.meta.url).href;

//获取nav列表
const getnav = async () => {
  navlist.value = await fetch("/data.json").then((response) => response.json());
};

onBeforeMount(() => {
  getnav();
  console.log(import.meta.env.BASE_URL);
});

onMounted(() => {
  tsParticles
    .loadJSON("tsparticles", "/particles.json")
    .then((container) => {
      console.log("callback - tsparticles config loaded");
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
