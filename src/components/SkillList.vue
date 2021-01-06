<template>
    <table class="skills-table">
        <thead>
            <tr>
                <th>{{ name }}</th>
                <th>スキル</th>
            </tr>
        </thead>
        <tbody>
            <skill-list-item v-for="( skillItem, index ) in skillItems" :key="index"
                            :name="skillItem.name"
                            :skill-grade="skillItem.skillGrade">
            </skill-list-item>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SkillListItem, { SkillItem } from './SkillListItem.vue';

@Component({
    components: {
        SkillListItem
    }
})
export default class SkillList extends Vue {
    @Prop()
    private name!: string

    @Prop()
    private skillItems!: Array<SkillItem>
}
</script>

<style lang="scss" scoped>

.skills-table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    thead {
        border-bottom: 1px solid #111;
        @media ( prefers-color-scheme: dark ) {
            border-bottom: 1px solid #eee;
        }
    }
    tbody {
        text-align: center;
    }
}
</style>
