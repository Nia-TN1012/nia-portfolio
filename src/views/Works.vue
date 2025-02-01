<script setup lang="ts">
import WorkListItem from '../components/WorkListItem.vue';
import type { WorkItem } from '../components/WorkListItem.vue';

const worksInGames: WorkItem[] = [
  {
    title: "ゲームの運用・機能開発（Webアプリ）",
    inCharge: "サーバーサイド・フロントエンドの開発・改修、DBテーブルの設計",
    technologyList: ["C#", ".NET Framework", "ASP.NET", "PHP", "SQL Server", "SVN", "Windows Server"],
    workList: ["定期ガチャの開発", "装備の新規上位グレードの実装のための改修", "新規キャラのスキルの開発", "お問い合わせ内容の調査", "管理画面の機能拡張"],
  },
  {
    title: "ゲームの運用・機能開発（Webアプリ・ネイティブアプリ）",
    inCharge: "サーバーサイド・クライアントアプリの開発・改修",
    technologyList: ["C#", ".NET", "Unity", "JavaScript", "Node.js", "PHP", "CodeIgniter", "MongoDB", "MySQL", "Git"],
    workList: ["定期ガチャの開発・改修", "新規ボスキャラのアセット設定、振る舞いの実装", "お問い合わせ内容の調査", "管理画面の機能拡張"]
  },
  {
    title: "ゲームの運用・機能開発（Webアプリ・ネイティブアプリ）",
    inCharge: "サーバーサイド・クライアントアプリの開発・改修、DBテーブルの設計・チューニング、インフラの運用",
    technologyList:  ["C#", ".NET", "Unity", "PHP", "MySQL", "Memcached", "Git", "Jenkins", "Zabbix", "Docker", "CentOS"],
    workList: ["定期ガチャの開発・改修", "ゲーム画面のUI改修", "称号機能の開発", "ログデータ用テーブルのチューニング、古いログデータの削除", "サーバー監視設定のチューニング", "一部サーバーのスペックのスケールアウト", "お問い合わせ内容の調査", "管理画面の機能拡張"]
  },
  {
    title: "ゲームの運用・機能開発（ネイティブアプリ）",
    inCharge: "サーバーサイド・クライアントアプリの開発・改修、DBテーブルの設計、インフラの構成・運用、ゲームの移管",
    technologyList: ["C#", ".NET", "Unity", "Scala", "PlayFramework", "PHP", "FuelPHP", "MySQL", "Redis", "Git", "Jenkins", "AWS", "Vagrant", "Amazon Linux"],
    workList: ["ゲームの移管", "ローカル環境をVagrantに移行", "お問い合わせ内容の調査", "管理画面の機能拡張", "未使用の有償仮想通貨の払い戻し用のシステムの新規実装"]
  },
  {
    title: "ゲームの運用・機能開発（Webアプリ）",
    inCharge: "サーバーサイド・フロントエンドの開発・改修、DBテーブルの設計、インフラの構成・運用、ゲームの移管",
    technologyList:  ["PHP", "MySQL", "Memcached", "Git", "Jenkins", "Docker", "CentOS"],
    workList: ["ゲームの移管", "定期ガチャの開発・改修", "開発環境を新規作成", "Docker composeを改修し、マルチ仮想ホストに対応化", "お問い合わせ内容の調査", "管理画面の機能拡張"]
  },
  {
    title: "ブロックチェーンゲームの新規開発・運用（Web3アプリ）",
    inCharge: "サーバーサイド・フロントエンドの開発、DBテーブルの設計、インフラの設計・構築",
    technologyList: ["GO言語", "TypeScript", "MySQL", "Git", "Docker", "Jenkins", "Zabbix", "Redash", "AWS", "CentOS"],
    workList: ["サーバーサイド及びクライアントアプリの基盤部分を開発", "シナリオエンジンの開発", "PvPバトルの開発", "etc..."]
  },
  {
    title: "ブロックチェーンを利用したソーシャルアプリの開発（Web3アプリ）",
    inCharge: "サーバーサイドの開発、DBテーブルの設計、インフラの設計・構築、コントラクト開発",
    technologyList: ["TypeScript", "Nest.js", "PostgreSQL", "Solidity", "Git", "Docker", "Vercel", "AWS", "AWS CDK"],
    workList: ["サーバーサイドの開発", "AWS CDKでWebアプリのインフラを設計・構築", "NFTコントラクトの開発"]
  },
]

const worksInTools: WorkItem[] = [
  {
    title: "化学計算アプリの移植",
    inCharge: "デスクトップアプリの移植",
    technologyList: ["C#", ".NET Framework", "WPF"],
    workList: ["デスクトップアプリの移植","化学計算の非同期処理化でアプリの応答性を確保", "UI・UXの改修"]
  },
  {
    title: "日報生成アプリの作成",
    inCharge: "デスクトップアプリの作成",
    technologyList: ["C#", ".NET Framework", "WPF"],
    workList: ["業務日報を作成しやすくするために、フォームに入力した内容から日報を生成するアプリを作成"]
  },
]
</script>

<template>
  <div class="works">
    <h2><i class="fas fa-building"></i> Works</h2>
    <p>ここでは、業務（学生時代の時も含む）での実績を紹介します。</p>
    <br/>

    <h3><span>Webアプリ、Web3アプリ、ゲーム</span></h3>
    <div class="wraplist">
      <work-list-item v-for="( item, index ) in worksInGames" :key="index"
                      :title="item.title"
                      :in-charge="item.inCharge"
                      :technology-list="item.technologyList"
                      :work-list="item.workList">
      </work-list-item>
    </div>
    <br/>

    <h3><span>ツールアプリ・その他</span></h3>
    <div class="wraplist">
      <work-list-item v-for="( item, index ) in worksInTools" :key="index"
                      :title="item.title"
                      :in-charge="item.inCharge"
                      :technology-list="item.technologyList"
                      :work-list="item.workList">
      </work-list-item>
    </div>
  </div>
</template>