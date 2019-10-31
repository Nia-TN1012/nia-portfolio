<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ expYears }}年</td>
        <td>{{ skillGradeStar }}</td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export class SkillItem {
    name: string
    expYears: number
    skillGrade: number

    constructor( name: string, expYears: number, skillGrade: number ) {
        this.name = name
        this.expYears = expYears
        this.skillGrade = skillGrade
    }
}

@Component
export default class SkillListItem extends Vue {
    @Prop()
    private name!: string;

    @Prop()
    private expYears!: number;

    @Prop()
    private skillGrade!: number;

    get skillGradeStar() {
        let adjustSkillGrade = Math.min( 5, Math.max( 1, this.skillGrade ) )
        return "★".repeat( adjustSkillGrade ) + "☆".repeat( 5 - adjustSkillGrade )
    }
}

</script>