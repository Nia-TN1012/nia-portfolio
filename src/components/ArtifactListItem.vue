<script setup lang="ts">
import { computed } from "vue";

export interface ArtifactItem {
  title: string;
  imageName?: string;
  createDate: string;
  type: string;
  technologyList: string[];
  appLinks?: string[];
  githubLinks?: string[];
  summaryList: string[];
}

const props = withDefaults(defineProps<ArtifactItem>(), {
  imageName: undefined,
  appLinks: undefined,
  githubLinks: undefined,
});

const technologies = computed(() => {
  return props.technologyList.join(", ");
});
</script>

<template>
  <div class="cardbox">
    <h4 class="cardbox-header">{{ title }}</h4>
    <div class="cardbox-content">
      <img
        v-if="imageName"
        class="cardbox-image"
        :src="'/img/artifacts/' + imageName + '.png'"
      />
      <img v-else class="cardbox-image" src="/img/no-img.png" />
    </div>
    <div class="cardbox-content">
      <h5>制作時期</h5>
      <p>{{ createDate }}</p>
      <h5>種別</h5>
      <p>{{ type }}</p>
      <h5>技術</h5>
      <p>{{ technologies }}</p>
      <h5 v-if="appLinks">URL</h5>
      <ul v-if="appLinks">
        <li v-for="(appLink, index) in appLinks" :key="index">
          <a :href="appLink" target="_blank">{{ appLink }}</a>
        </li>
      </ul>
      <h5 v-if="githubLinks">GitHub</h5>
      <ul v-if="githubLinks">
        <li v-for="(githubLink, index) in githubLinks" :key="index">
          <a :href="githubLink" target="_blank">{{ githubLink }}</a>
        </li>
      </ul>
      <h5>概要</h5>
      <ul>
        <li v-for="(summary, index) in summaryList" :key="index">
          {{ summary }}
        </li>
      </ul>
    </div>
  </div>
</template>
