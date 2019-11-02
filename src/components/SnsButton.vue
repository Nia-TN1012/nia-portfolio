<template>
    <a v-if="isShowIcon == true" class="sns-button" :style="{ backgroundColor: bgColor }" :href="link" target="_blank">
        <i :class="iconClass"></i> {{ buttonName }}
    </a>
    <a v-else class="sns-button" :style="{ backgroundColor: bgColor }" :href="link" target="_blank">
        {{ buttonName }}
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SnsButton extends Vue {
    @Prop()
    private buttonName!: string
    @Prop()
    private link!: string
    @Prop( { default: true } )
    private isShowIcon!: boolean
    @Prop( { default: "b" } )
    private iconType!: string
    @Prop()
    private iconName!: string
    @Prop()
    private bgColor!: string

    get iconClass() {
        return [
            "fa" + this.iconType,
            "fa-" + this.iconName
        ]
    }
}
</script>

<style lang="scss" scoped>
.sns-button {
    margin: 0.5em;
    padding: 0.1em 0.5em;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    color: white;
}
</style>