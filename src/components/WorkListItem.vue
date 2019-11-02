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
                <li v-for="( work, index ) in workList" :key="index">{{ work }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export class WorkItem {
    title: string
    inCharge: string
    technologyList: Array<string>
    workList: Array<string>

    constructor( title: string, inCharge: string, technologyList: Array<string>, workList: Array<string> ) {
        this.title = title
        this.inCharge = inCharge
        this.technologyList = technologyList
        this.workList = workList
    }
}

@Component
export default class WorkListItem extends Vue {
    @Prop()
    private title!: string
    @Prop()
    private inCharge!: string
    @Prop()
    private technologyList!: Array<string>
    @Prop()
    private workList!: Array<string>

    get technologies() {
        return this.technologyList.join( "、" );
    }
}
</script>