<template>
  <div class="home">
    <img class="home-img" src="/img/title-head.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.home-img {
    margin: 1%;
    max-width: 98%;
    height: auto;
}
</style>
