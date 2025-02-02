<script setup lang="ts">
import { computed } from "vue";

export interface WorkItem {
  title: string;
  inCharge: string;
  technologyList: string[];
  workList: string[];
}

const props = defineProps<WorkItem>();

const technologies = computed(() => {
  return props.technologyList.join(", ");
});
</script>

<template>
  <div class="cardbox">
    <h4 class="cardbox-header">{{ title }}</h4>
    <div class="cardbox-content">
      <h5>担当</h5>
      <p>{{ inCharge }}</p>
      <h5>技術</h5>
      <p>{{ technologies }}</p>
      <h5>業務内容</h5>
      <ul>
        <li v-for="(work, index) in workList" :key="index">{{ work }}</li>
      </ul>
    </div>
  </div>
</template>
