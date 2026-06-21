<script setup lang="ts">
import { computed } from "vue";

export interface WorkItem {
  title: string;
  period: string;
  inCharge: string;
  technologies: Technologies;
  achievements: string[];
}

export interface Technologies {
  langs: string[];
  frameworks: string[];
  infrastructures: string[];
  databases: string[];
  others: string[];
}

const props = defineProps<WorkItem>();

const technologies = computed(() => {
  const concatTechItems = (label: string, items: string[]) => {
    if (items.length > 0) {
      return {
        label: label,
        items: items,
      };
    }
    return null;
  };
  return [
    concatTechItems("言語", props.technologies.langs),
    concatTechItems(
      "ライブラリ・フレームワーク",
      props.technologies.frameworks,
    ),
    concatTechItems("インフラ", props.technologies.infrastructures),
    concatTechItems("データベース", props.technologies.databases),
    concatTechItems("その他", props.technologies.others),
  ].filter((item) => item !== null);
});
</script>

<template>
  <div class="cardbox">
    <h4 class="cardbox-header">{{ title }}</h4>
    <div class="cardbox-content">
      <h5>期間</h5>
      <p>{{ period }}</p>
      <h5>担当フェーズ</h5>
      <p>{{ inCharge }}</p>
      <h5>技術スタック</h5>
      <p v-for="(item, index) in technologies" :key="index">
        <strong>[{{ item.label }}]</strong><br />
        {{ item.items.join(", ") }}
      </p>
      <h5>業務内容・実績・取り組み</h5>
      <ul>
        <li v-for="(achievement, index) in achievements" :key="index">
          {{ achievement }}
        </li>
      </ul>
    </div>
  </div>
</template>
