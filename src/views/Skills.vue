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
        new SkillItem( "C#", 8, 5 ),
        new SkillItem( "PHP", 6, 4 ),
        new SkillItem( "C/C++", 6, 4 ),
        new SkillItem( "JavaScript", 2, 3 ),
        new SkillItem( "TypeScript", 1, 3 ),
        new SkillItem( "Python", 1, 2 ),
        new SkillItem( "Ruby", 1, 2 ),
    ]
    frameworks: Array<SkillItem> = [
        new SkillItem( ".NET Framework / Core", 8, 5 ),
        new SkillItem( "WordPress", 6, 4 ),
        new SkillItem( "CodeIgniter", 2, 4 ),
        new SkillItem( "Laravel", 1, 2 ),
        new SkillItem( "FuelPHP", 1, 1 ),
        new SkillItem( "Vue.js", 1, 3 ),
        new SkillItem( "Angular.js", 1, 1 ),
    ]
    infras: Array<SkillItem> = [
        new SkillItem( "Apache", 6, 4 ),
        new SkillItem( "nginx", 6, 4 ),
        new SkillItem( "Node.js", 2, 3 ),
        new SkillItem( "Docker", 2, 4 ),
        new SkillItem( "Vagrant", 2, 3 ),
        new SkillItem( "CentOS", 8, 4 ),
        new SkillItem( "Ubuntu / Debian", 8, 4 ),
        new SkillItem( "AWS", 2, 3 ),
    ]
    databases: Array<SkillItem> = [
        new SkillItem( "MySQL / MariaDB", 6, 4 ),
        new SkillItem( "Mongo DB", 2, 3 ),
        new SkillItem( "SQL Server", 1, 2 ),
    ]
    devTools: Array<SkillItem> = [
        new SkillItem( "Visual Studio", 9, 5 ),
        new SkillItem( "Unity", 2, 3 ),
        new SkillItem( "Git", 3, 5 ),
        new SkillItem( "SVN / TFVC", 4, 4 ),
        new SkillItem( "Jenkins", 2, 3 ),
        new SkillItem( "Zabbix", 2, 3 ),
        new SkillItem( "Webpack", 1, 2 ),
        new SkillItem( "CLIP STUDIO", 5, 4 ),
        new SkillItem( "Photoshop", 1, 1 ),
    ]
}
</script>