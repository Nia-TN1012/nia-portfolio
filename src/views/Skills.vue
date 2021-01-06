<template>
    <div class="skills">
        <h2><i class="fas fa-laptop-code"></i> Skills</h2>
        <br/>
        <div class="wraplist">
            <div class="cardbox">
                <h4 class="cardbox-header">プログラミング言語</h4>
                <div class="cardbox-content">
                    <skill-list name="言語名" :skill-items="programingLangs"></skill-list>
                </div>
            </div>
            <div class="cardbox">
                <h4 class="cardbox-header">フレームワーク</h4>
                <div class="cardbox-content">
                    <skill-list name="フレームワーク名" :skill-items="frameworks"></skill-list>
                </div>
            </div>
            <div class="cardbox">
                <h4 class="cardbox-header">インフラ</h4>
                <div class="cardbox-content">
                    <skill-list name="名前" :skill-items="infras"></skill-list>
                </div>
            </div>
            <div class="cardbox">
                <h4 class="cardbox-header">データベース</h4>
                <div class="cardbox-content">
                    <skill-list name="名前" :skill-items="databases"></skill-list>
                </div>
            </div>
            <div class="cardbox">
                <h4 class="cardbox-header">その他ツール</h4>
                <div class="cardbox-content">
                    <skill-list name="名前" :skill-items="devTools"></skill-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SkillList from '@/components/SkillList.vue';
import { SkillItem } from '@/components/SkillListItem.vue';

@Component({
    components: {
        SkillList
    }
})
export default class Skills extends Vue {
    programingLangs: Array<SkillItem> = [
        new SkillItem( "C#", 5 ),
        new SkillItem( "PHP", 4 ),
        new SkillItem( "C/C++", 4 ),
        new SkillItem( "JavaScript", 3 ),
        new SkillItem( "TypeScript", 4 ),
        new SkillItem( "Python", 2 ),
        new SkillItem( "Ruby", 2 ),
        new SkillItem( "GO言語", 4 ),
        new SkillItem( "Java", 1 ),
        new SkillItem( "Swift", 1 ),
        new SkillItem( "Objective-C", 1 ),
    ]
    frameworks: Array<SkillItem> = [
        new SkillItem( ".NET Framework / Core", 5 ),
        new SkillItem( "WordPress", 4 ),
        new SkillItem( "CodeIgniter", 4 ),
        new SkillItem( "Laravel", 2 ),
        new SkillItem( "FuelPHP", 1 ),
        new SkillItem( "Vue.js", 3 ),
        new SkillItem( "Angular", 1 ),
        new SkillItem( "gRPC", 4 ),
        new SkillItem( "Rails", 2 ),
    ]
    infras: Array<SkillItem> = [
        new SkillItem( "Apache", 4 ),
        new SkillItem( "nginx", 4 ),
        new SkillItem( "Node.js", 3 ),
        new SkillItem( "Docker", 4 ),
        new SkillItem( "Vagrant", 3 ),
        new SkillItem( "CentOS", 4 ),
        new SkillItem( "Ubuntu / Debian", 4 ),
        new SkillItem( "AWS", 3 ),
    ]
    databases: Array<SkillItem> = [
        new SkillItem( "MySQL / MariaDB", 4 ),
        new SkillItem( "Mongo DB", 3 ),
        new SkillItem( "SQL Server", 2 ),
    ]
    devTools: Array<SkillItem> = [
        new SkillItem( "Visual Studio", 5 ),
        new SkillItem( "JetBrains IDE", 5 ),
        new SkillItem( "Unity", 3 ),
        new SkillItem( "Git", 5 ),
        new SkillItem( "SVN / TFVC", 4 ),
        new SkillItem( "Jenkins", 3 ),
        new SkillItem( "Zabbix", 3 ),
        new SkillItem( "Webpack", 3 ),
        new SkillItem( "CLIP STUDIO", 4 ),
        new SkillItem( "Photoshop", 1 ),
    ]
}
</script>
