<script setup lang="ts">
import SkillList from "../components/SkillList.vue";
import type { SkillItem } from "../components/SkillListItem.vue";

const expericences: string[] = [
  "要件定義〜設計/実装〜運用改善までの一気通貫経験、バックエンド / フロントエンド / データベース / インフラを含むシステム全体の開発・運用経験",
  "TypeScript / Nest.js / Next.js / C# / PHP / GO / Solidity などによるアプリケーション開発",
  "Amazon Web Services / Google Cloud Platform / Terraform / AWS CDK / CI/CD / 監視（Zabbix、Makerel）・セキュリティ対策 / BI（Redash / Metabase）などの利用経験",
  "プロジェクトの新規立ち上げ、運用経験",
  "ブロックチェーンや暗号技術の知識（コントラクト開発など）",
];

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
    skillGrade: 4,
  },
  {
    name: "Nest.js",
    skillGrade: 4,
  },
  {
    name: "Next.js",
    skillGrade: 3,
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
    skillGrade: 4,
  },
  {
    name: "Hardhat",
    skillGrade: 5,
  },
  {
    name: "Foundry",
    skillGrade: 2,
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
    skillGrade: 5,
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
    name: "Amazon Web Services",
    skillGrade: 4,
  },
  {
    name: "Google Cloud Platform",
    skillGrade: 4,
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
    name: "Cursor",
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
    <h3>活かせる経験・知識・技術</h3>
    <ul>
      <li v-for="(experience, index) in expericences" :key="index">
        {{ experience }}
      </li>
    </ul>
    <br />
    <h3>テクニカルスキル</h3>
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
