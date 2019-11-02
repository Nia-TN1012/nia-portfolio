<template>
    <div class="cardbox">
        <h4 class="cardbox-header">{{ title }}</h4>
        <div class="cardbox-content">
            <img v-if="imageName" class="cardbox-image" :src="'/img/artifacts/' + imageName + '.png'"/>
            <img v-else class="cardbox-image" src="/img/no-img.png"/>
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
                <li v-for="( appLink, index ) in appLinks" :key="index"><a :href="appLink" target="_blank">{{ appLink }}</a></li>
            </ul>
            <h5 v-if="githubLinks">GitHub</h5>
            <ul v-if="githubLinks">
                <li v-for="( githubLink, index ) in githubLinks" :key="index"><a :href="githubLink" target="_blank">{{ githubLink }}</a></li>
            </ul>
            <h5>概要</h5>
            <ul>
                <li v-for="( summary, index ) in summaryList" :key="index">{{ summary }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export class ArtifactItem {
    title: string
    imageName: string | undefined
    createDate: string
    type: string
    technologyList: Array<string>
    appLinks: Array<string> | undefined
    githubLinks: Array<string> | undefined
    summaryList: Array<string>

    constructor( title: string, imageName: string | undefined, createDate: string, type: string, technologyList: Array<string>,
                appLinks: Array<string> | undefined, githubLinks: Array<string> | undefined, summaryList: Array<string> ) {
        this.title = title
        this.imageName = imageName
        this.createDate = createDate
        this.type = type
        this.technologyList = technologyList
        this.appLinks = appLinks
        this.githubLinks = githubLinks
        this.summaryList = summaryList
    }
}

@Component
export default class ArtifactListItem extends Vue {
    @Prop()
    private title!: string
    @Prop( { default: undefined } )
    private imageName!: string
    @Prop()
    private createDate!: string
    @Prop()
    private type!: string
    @Prop()
    private technologyList!: Array<string>
    @Prop( { default: undefined } )
    private appLinks!: Array<string>
    @Prop( { default: undefined } )
    private githubLinks!: Array<string>
    @Prop()
    private summaryList!: Array<string>

    get technologies() {
        return this.technologyList.join( "、" );
    }
}
</script>