<template>
    <div class="works">
        <h2><i class="fas fa-building"></i> Works</h2>
        <p>ここでは、業務（学生時代の時も含む）での実績を紹介します。</p>
        <br/>

        <h3><span>ゲーム</span></h3>
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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkListItem from '@/components/WorkListItem.vue';
import { WorkItem } from '@/components/WorkListItem.vue';

@Component({
    components: {
        WorkListItem
    }
})
export default class Works extends Vue {
    worksInGames: Array<WorkItem> = [
        new WorkItem(
            "ゲームの運用・機能開発（ブラウザゲーム）",
            "サーバーサイド・フロントエンドでの開発・改修、DBテーブルの設計",
            ["C#", ".NET Framework", "ASP.NET", "PHP", "SQL Server", "SVN", "Windows Server"],
            ["定期ガチャの開発", "装備の新規上位グレードの実装のための改修", "新規キャラのスキルの開発", "お問い合わせ内容の調査", "管理画面の機能拡張"]
        ),
        new WorkItem(
            "ゲームの運用・機能開発（ブラウザゲーム・ネイティブアプリ）",
            "サーバーサイド・クライアントアプリでの開発・改修",
            ["C#", ".NET", "Unity", "JavaScript", "Node.js", "PHP", "CodeIgniter", "MongoDB", "MySQL", "Git"],
            ["定期ガチャの開発・改修", "新規ボスキャラのアセット設定、振る舞いの実装", "お問い合わせ内容の調査", "管理画面の機能拡張"]
        ),
        new WorkItem(
            "ゲームの運用・機能開発（ブラウザゲーム・ネイティブアプリ）",
            "サーバーサイド・クライアントアプリでの開発・改修、DBテーブルの設計・チューニング、インフラの運用",
            ["C#", ".NET", "Unity", "PHP", "MySQL", "Memcached", "Git", "Jenkins", "Zabbix", "Docker", "Cent OS"],
            ["定期ガチャの開発・改修", "ゲーム画面のUI改修", "称号機能の開発", "ログデータ用テーブルのチューニング、古いログデータの削除", "サーバー監視設定のチューニング", "一部サーバーのスペックのスケールアウト", "お問い合わせ内容の調査", "管理画面の機能拡張"]
        ),
        new WorkItem(
            "ゲームの運用・機能開発（ネイティブアプリ）",
            "サーバーサイド・クライアントアプリでの開発・改修、DBテーブルの設計、インフラの構成・運用、ゲームの移管",
            ["C#", ".NET", "Unity", "Scala", "PlayFramework", "PHP", "FuelPHP", "MySQL", "Redis", "Git", "Jenkins", "AWS", "Vagrant", "Amazon Linux"],
            ["ゲームの移管", "ローカル環境をVagrantに移行", "お問い合わせ内容の調査", "管理画面の機能拡張", "未使用の有償仮想通貨の払い戻し用のシステムの新規実装"]
        ),
        new WorkItem(
            "ゲームの運用・機能開発（ブラウザゲーム）",
            "サーバーサイド・フロントエンドでの開発・改修、DBテーブルの設計、インフラの構成・運用、ゲームの移管",
            ["PHP", "MySQL", "Memcached", "Git", "Jenkins", "Docker", "Cent OS"],
            ["ゲームの移管", "定期ガチャの開発・改修", "開発環境を新規作成", "Docker composeを改修し、マルチ仮想ホストに対応化", "お問い合わせ内容の調査", "管理画面の機能拡張"]
        )
    ]

    worksInTools: Array<WorkItem> = [
        new WorkItem(
            "化学計算アプリの移植",
            "デスクトップアプリの移植",
            ["C#", ".NET Framework", "WPF"],
            ["化学計算の非同期処理化でアプリの応答性を確保", "UI・UXの改修"]
        ),
        new WorkItem(
            "日報生成アプリの作成",
            "デスクトップアプリの作成",
            ["C#", ".NET Framework", "WPF"],
            ["業務日報を作成しやすくするために、フォームに入力した内容から日報を生成するアプリを作成しました。"]
        ),
        new WorkItem(
            "テストアプリ配布ツールの作成",
            "Webアプリ作成",
            ["C#", ".NET Framework", "WPF"],
            ["ネイティブアプリのテストの効率化のため、ビルドマシン上でテストアプリを配布できるWebアプリを作成しました。", "API機能を実装しており、Jenkinsからテストアプリを発行できるようにしています。"]
        )
    ]
}
</script>