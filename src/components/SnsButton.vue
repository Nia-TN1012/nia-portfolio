<script setup lang="ts">

import {computed} from "vue";

interface SnsButton {
  buttonName: string
  link: string
  isShowIcon?: boolean
  iconType?: string
  iconName?: string
  bgColor: string
}

const props = withDefaults(defineProps<SnsButton>(), {
  isShowIcon: true,
  iconType: 'b',
  iconName: ''
})

const iconClass = computed(() => {
  return [
    "fa" + props.iconType,
    "fa-" + props.iconName
  ]
})
</script>

<template>
  <a v-if="isShowIcon" class="sns-button" :style="{ backgroundColor: bgColor }" :href="link" target="_blank">
    <i :class="iconClass"></i> {{ buttonName }}
  </a>
  <a v-else class="sns-button" :style="{ backgroundColor: bgColor }" :href="link" target="_blank">
    {{ buttonName }}
  </a>
</template>

<style lang="scss" scoped>
.sns-button {
    margin: 0.5em;
    padding: 0.1em 0.5em;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    border: 1px solid gray;
}
</style>
