<script setup lang="ts">
import SkillList from "../components/SkillList.vue";
import type { SkillItem } from "../components/SkillListItem.vue";

const programingLangs: SkillItem[] = [
  {
    name: "C#",
    skillGrade: 5,
  },
  {
    name: "PHP",
    skillGrade: 4,
  },
  {
    name: "C/C++",
    skillGrade: 4,
  },
  {
    name: "JavaScript",
    skillGrade: 4,
  },
  {
    name: "TypeScript",
    skillGrade: 5,
  },
  {
    name: "Python",
    skillGrade: 2,
  },
  {
    name: "Ruby",
    skillGrade: 2,
  },
  {
    name: "GO",
    skillGrade: 4,
  },
  {
    name: "Java",
    skillGrade: 2,
  },
  {
    name: "Swift",
    skillGrade: 1,
  },
  {
    name: "Objective-C",
    skillGrade: 1,
  },
  {
    name: "Solidity",
    skillGrade: 5,
  },
];

const frameworks: SkillItem[] = [
  {
    name: ".NET Framework / Core",
    skillGrade: 5,
  },
  {
    name: "WordPress",
    skillGrade: 4,
  },
  {
    name: "CodeIgniter",
    skillGrade: 4,
  },
  {
    name: "Laravel",
    skillGrade: 2,
  },
  {
    name: "FuelPHP",
    skillGrade: 1,
  },
  {
    name: "Node.js",
    skillGrade: 5,
  },
  {
    name: "Vue.js",
    skillGrade: 3,
  },
  {
    name: "React",
    skillGrade: 3,
  },
  {
    name: "Nest.js",
    skillGrade: 4,
  },
  {
    name: "Angular",
    skillGrade: 1,
  },
  {
    name: "gRPC",
    skillGrade: 4,
  },
  {
    name: "Rails",
    skillGrade: 2,
  },
  {
    name: "Terraform",
    skillGrade: 3,
  },
  {
    name: "Hardhat",
    skillGrade: 5,
  },
];

const infras: SkillItem[] = [
  {
    name: "Apache",
    skillGrade: 4,
  },
  {
    name: "nginx",
    skillGrade: 4,
  },
  {
    name: "Docker",
    skillGrade: 4,
  },
  {
    name: "Vagrant",
    skillGrade: 3,
  },
  {
    name: "CentOS",
    skillGrade: 4,
  },
  {
    name: "Ubuntu / Debian",
    skillGrade: 4,
  },
  {
    name: "AWS",
    skillGrade: 4,
  },
  {
    name: "GCP",
    skillGrade: 3,
  },
];
const databases: SkillItem[] = [
  {
    name: "MySQL / MariaDB",
    skillGrade: 4,
  },
  {
    name: "Mongo DB",
    skillGrade: 3,
  },
  {
    name: "SQL Server",
    skillGrade: 2,
  },
  {
    name: "PostgreSQL",
    skillGrade: 3,
  },
];
const devTools: SkillItem[] = [
  {
    name: "Visual Studio",
    skillGrade: 5,
  },
  {
    name: "JetBrains IDE",
    skillGrade: 5,
  },
  {
    name: "Unity",
    skillGrade: 3,
  },
  {
    name: "Git",
    skillGrade: 5,
  },
  {
    name: "SVN / TFVC",
    skillGrade: 4,
  },
  {
    name: "Jenkins",
    skillGrade: 3,
  },
  {
    name: "Zabbix",
    skillGrade: 3,
  },
  {
    name: "Webpack",
    skillGrade: 3,
  },
  {
    name: "CLIP STUDIO",
    skillGrade: 4,
  },
  {
    name: "Photoshop",
    skillGrade: 2,
  },
];
</script>

<template>
  <div class="skills">
    <h2><i class="fas fa-laptop-code"></i> Skills</h2>
    <br />
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
          <skill-list
            name="フレームワーク名"
            :skill-items="frameworks"
          ></skill-list>
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
