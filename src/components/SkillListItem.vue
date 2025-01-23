<script setup lang="ts">
import {computed} from "vue";

export interface SkillItem {
  name: string
  skillGrade: number
}

const props = defineProps<SkillItem>();

const skillGradeStar = computed(() => {
  let adjustSkillGrade = Math.min( 5, Math.max( 1, props.skillGrade ) )
  return "★".repeat( adjustSkillGrade ) + "☆".repeat( 5 - adjustSkillGrade )
})
</script>

<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ skillGradeStar }}</td>
  </tr>
</template>