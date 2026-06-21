<script setup lang="ts">
import WorkListItem from "../components/WorkListItem.vue";
import type { WorkItem } from "../components/WorkListItem.vue";

const worksInGames: WorkItem[] = [
  // 3
  {
    title: "GameFi向けコントラクト＆バックエンド開発",
    period: "2023/10 - 2025/07",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["TypeScript", "Solidity", "PHP"],
      frameworks: ["Nest.js", "Next.js", "CodeIgniter", "OpenZeppelin"],
      infrastructures: [
        "Google Cloud Platform",
        "Linux (ubuntu)",
        "Alchemy",
        "Fireblocks",
        "Immutable",
      ],
      databases: ["Google Spanner"],
      others: ["Git", "Docker", "Terraform", "Slither"],
    },
    achievements: [
      "コントラクト/API/DBの設計・実装、CI/CD整備、Terraformでのインフラ構築をしました。",
      "コントラクトにアクセス・操作を行う、フロントエンド向けのモジュールの設計・実装をしました。",
      "一部のコントラクトにおいて、アップグレード可能な設計（UUPS Upgradeable）にし、運営の追加施策に応じて機能を更新可能にしました。",
      "コントラクトの脆弱性を検出するライブラリ（Slither）を利用し、コントラクトの品質とセキュリティを担保をしました。",
      "ブロックチェーン「Immutable zkEVM」へコントラクトのデプロイや操作を行う機能の設計・実装、ドキュメントの整備をし、運営者による運用のサポートに貢献しました。",
    ],
  },
  {
    title: "暗号資産の運用システムの開発",
    period: "2023/01〜2025/11",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["TypeScript"],
      frameworks: ["Nest.js"],
      infrastructures: ["Google Cloud Platform", "Linux (ubuntu)"],
      databases: [],
      others: ["Git", "Docker", "Terraform"],
    },
    achievements: [
      "APIの設計・実装、Terraformでのインフラ構築をしました。",
      "Google CloudのWorkflowsの操作で、システムの運用開始・停止操作やステータスの取得する機能を設計・実装し、運用の効率化を実現しました。",
      "クライアントからの追加要件をヒアリングしたり、実際に運用して発見した課題を解決したりして、継続的なアップデートを行いました。",
    ],
  },
  {
    title:
      "トランザクション署名管理システムとブラウザ向けウォレットの拡張機能の開発",
    period: "2025/12〜2026/03",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["TypeScript"],
      frameworks: [
        "Nest.js",
        "Next.js",
        "React Native",
        "ブラウザ向けウォレットのSDK",
      ],
      infrastructures: ["Amazon Web Services", "Linux (ubuntu)"],
      databases: ["PostgreSQL"],
      others: ["Git", "Docker", "Terraform"],
    },
    achievements: [
      "API、DB、フロントエンド、ブラウザ向けウォレットの拡張機能を設計・実装しました。",
      "トランザクションのデータ構造の調査をしました。",
      "ブラウザ向けウォレットの拡張機能のトランザクションインサイト部分の設計・実装をしました。",
      "ブラウザ向けウォレットの拡張機能からバックエンドへの認証処理を提案・設計・実装（フロントエンドと同様のユーザーログインや認証を組み込み）しました。",
      "フロントエンドのUXをより良くするための相談・提案・設計・実装を行い、ユーザーが使いやすいシステムの開発に貢献しました。",
    ],
  },
  {
    title: "コーポレートサイトの開発",
    period: "2025/12〜2026/06",
    inCharge: "要件定義、ページの設計・実装、テスト、運用",
    technologies: {
      langs: ["PHP", "TypeScript"],
      frameworks: ["WordPress", "React"],
      infrastructures: ["X server", "Google Cloud"],
      databases: ["MySQL"],
      others: ["Git", "Docker", "Terraform"],
    },
    achievements: [
      "コーポレートサイトに必要なサーバーや外部APIの選定をしました。",
      "コーポレート担当や役員からの要望をヒアリングし、Webサイトのテーマ、記事・固定ページを設計・実装しました。",
      "トップページでは、3Dモデルを表示し、マウスオーバーでモデルを回転させる機能を設計・実装しました。",
      "固定ページの要素では、カスタム投稿タイプやブロックを活用し、コーポレート担当がコンテンツを管理しやすい形にしました。",
      "Reactアプリ（SPA）を組み込むための、React埋め込み用のタグを設置した固定ページのテンプレートを実装し、Reactアプリ開発担当と連携しました。",
    ],
  },
  // 2
  {
    title:
      "GameFiプロジェクトの新規立ち上げ、バックエンド及びフロントエンド開発",
    period: "2019/11〜2022/06",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["GO", "TypeScript", "Solidity"],
      frameworks: [
        "Pixi.js",
        "パートナー会社のSDK",
        "Protocol Buffers",
        "OpenZeppelin",
      ],
      infrastructures: ["Amazon Web Services", "Linux (CentOS)"],
      databases: ["MySQL"],
      others: ["Git", "Redash", "Docker", "Jenkins", "Zabbix", "Spine"],
    },
    achievements: [
      "プロジェクトの新規立ち上げを完遂しました。",
      "前職での経験や知識を活用し、要件定義〜設計・実装、テスト、運用を一貫して担当をしました。",
      "パートナー会社と連携し、NFTの管理システムと通信を行う処理を実装しました。",
      "ゲームのマスターデータの作成・デプロイする環境整備し、お知らせの追加などの作業はプランナーのみで完結できるようにしました。",
      "ゲーム画面のコンポーネントやシナリオのシステムを設計・実装しました。",
      "Redashを利用して、売上やアクティブユーザー数などのKPIを可視化し、プランナーの次なる施策の戦略に貢献しました。",
      "ゲーム内仮想通貨をクレジットカード経由で購入にも対応し、暗号資産を持っていないユーザーがNFTを購入する手段を用意しました。",
    ],
  },
  {
    title: "ソーシャルアプリのコントラクト＆バックエンド開発",
    period: "2021/11〜2023/09",
    inCharge: "要件定義／基本・詳細設計／実装／テスト／運用",
    technologies: {
      langs: ["TypeScript", "Solidity"],
      frameworks: ["Nest.js", "Next.js", "OpenZeppelin"],
      infrastructures: [
        "Amazon Web Services",
        "Linux (CentOS)",
        "Vercel",
        "Alchemy",
      ],
      databases: ["PostgreSQL"],
      others: ["Git", "Docker", "AWS CDK", "Stripe", "Metabase"],
    },
    achievements: [
      "コントラクト/API/DBの設計・実装、CI/CD整備をしました。",
      "AWS CDKを利用したAmazon Web Serviceの環境構築を完遂しました。",
      "Webサービス運営者がNFTコントラクトをデプロイするための環境整備をしました。",
      "Metabaseを利用して、アクティブユーザー数などのKPIを可視化及び、運営者がイベントデータを追加するための環境整備（管理ツールとしての機能を兼ねる）し、運用効率化に貢献しました。",
    ],
  },
  // 1
  {
    title: "ソーシャルゲーム（Web）の運用・機能開発",
    period: "2017/04〜2017/12",
    inCharge: "詳細設計／実装／テスト／運用",
    technologies: {
      langs: ["C#"],
      frameworks: [".NET Framework", "ASP.NET", "CodeIgniter", "Adobe Flash"],
      infrastructures: ["Windows Server"],
      databases: ["SQL Server"],
      others: ["SVN"],
    },
    achievements: [
      "API/DBの設計・実装、管理画面の機能拡張をしました。",
      "前任のエンジニアから引き継ぎ、定期ガチャや装備の新規上位グレードの装備品、新規キャラのスキルを設計・実装しました。",
    ],
  },
  {
    title: "ソーシャルゲーム（Web/Android）の運用・機能開発",
    period: "2017/12〜2018/03",
    inCharge: "詳細設計 / 実装 / /テスト / 運用",
    technologies: {
      langs: ["C#", "JavaScript", "PHP"],
      frameworks: ["Node.js", ".NET", "CodeIgniter"],
      infrastructures: ["Linux"],
      databases: ["MySQL", "MongoDB"],
      others: ["Unity", "Git", "MAMP", "Jenkins"],
    },
    achievements: [
      "API/DB/フロントエンドの設計・実装、管理画面の機能拡張をしました。",
      "前任のエンジニアから引き継ぎ、定期ガチャや新規ボスキャラ設計・実装しました。",
    ],
  },
  {
    title: "ソーシャルゲーム（Web/Android）の運用・機能開発",
    period: "2018/03〜2018/09",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["C#", "PHP", "JavaScript"],
      frameworks: [".NET", "独自フレームワーク"],
      infrastructures: ["IDCFクラウド", "Linux (CentOS)"],
      databases: ["MySQL", "Memcached"],
      others: ["Git", "Docker", "Jenkins", "Zabbix", "Spine"],
    },
    achievements: [
      "API/DB/フロントエンドの設計・実装をしました。",
      "前任のエンジニアから引き継ぎ、定期ガチャや称号、ゲーム画面のUIなどを設計・実装しました。",
      "Jenkinsを利用したUnityアプリのビルド用の環境を構築し、フロントエンドエンジニアの開発効率を向上。またローカル環境をDocker化し、エンジニアの開発効率を向上しました。",
      "プランナーから要望をヒアリングし、管理画面の機能追加・改修して、運営効率を改善しました。",
      "サーバーのスペックを調整しコストを最適化。ログデータ用のDBテーブルを期間ごとにパーティショニングし、不要な古いログデータを定期的に削除することで、DB用のストレージを7割以上削減しました。",
    ],
  },
  {
    title: "ソーシャルゲーム（iOS/Android/Windows）の運用・機能開発",
    period: "2018/10〜2019/08",
    inCharge: "運営移管 / 要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["C#", "Scala", "PHP"],
      frameworks: [".NET", "PlayFramework", "FuelPHP"],
      infrastructures: ["Amazon Web Services", "Amazon Linux"],
      databases: ["MySQL", "Redis"],
      others: ["Unity", "Vagrant", "Git", "Jenkins", "Makerel"],
    },
    achievements: [
      "クライアントから技術周りのヒアリングや引き継ぎをし、スムーズな移管作業に貢献しました。",
      "API/DB/フロントエンドの設計・実装、管理画面の機能拡張をしました。",
      "Jenkinsを利用したUnityアプリのビルド用の環境を構築し、フロントエンドエンジニアの開発効率を向上。ローカル環境をVagrantに移行しました。",
      "サービス終了後に、アプリ内仮想通貨（有償）の払い戻し対応に必要な要件定義〜設計・実装。また必要なインフラの洗い出しとスペックの選定・コスト見積もり・設計・実装を行い、約100のユーザー分の払い戻し対応を1〜2ヶ月ほどで完了しました。",
    ],
  },
  {
    title: "ソーシャルゲーム（Web）の運用・機能開発",
    period: "2019/01〜2019/10",
    inCharge: "運営移管 / 要件定義 / 基本・詳細設計 / 実装 / テスト / 運用",
    technologies: {
      langs: ["PHP", "JavaScript"],
      frameworks: ["独自フレームワーク", "Adobe Flash"],
      infrastructures: ["Amazon Web Services", "Linux (CentOS)"],
      databases: ["MySQL"],
      others: ["Git", "Jenkins", "Docker"],
    },
    achievements: [
      "クライアントから技術周りのヒアリングや引き継ぎをし、スムーズな移管作業に貢献しました。",
      "API/DB/フロントエンドの設計・実装、管理画面の機能拡張をしました。",
      "ローカル環境をDocker化し、エンジニアの開発効率を向上しました。",
      "Flash対応のAndroid端末を調達し、Android上でのFlashの動作検証をできるようにしました。",
    ],
  },
  // 0
  {
    title: "化学計算アプリの改修（学生時代）",
    period: "2014/04〜2016/03",
    inCharge: "要件定義 / 基本・詳細設計 / 実装 / テスト",
    technologies: {
      langs: ["C#"],
      frameworks: [".NET Framework", "WPF"],
      infrastructures: [],
      databases: [],
      others: ["Team Foundation Version Control"],
    },
    achievements: [
      "デスクトップアプリの設計・実装",
      "UI・UXの改修し、特に化学計算処理の非同期処理化でアプリの応答性を確保しました。",
      "化学計算処理で並列処理が可能な部分を抽出し、マルチスレッド化することで、処理速度を向上しました。",
    ],
  },
  {
    title: "日報生成アプリの作成（学生時代）",
    period: "2016/04〜2017/03",
    inCharge: "デスクトップアプリの設計・実装",
    technologies: {
      langs: ["C#"],
      frameworks: [".NET Framework", "WPF"],
      infrastructures: [],
      databases: [],
      others: ["Team Foundation Version Control"],
    },
    achievements: [
      "情報処理教室のアシスタント業務で毎日作成する日報の効率化・記入漏れ防止のために、フォームに入力した内容から日報を生成するアプリを作成しました。",
    ],
  },
];
</script>

<template>
  <div class="works">
    <h2><i class="fas fa-building"></i> Works</h2>
    <p>ここでは、業務（学生時代の時も含む）での実績を紹介します。</p>
    <br />

    <div class="wraplist">
      <work-list-item
        v-for="(item, index) in worksInGames"
        :key="index"
        :title="item.title"
        :period="item.period"
        :in-charge="item.inCharge"
        :technologies="item.technologies"
        :achievements="item.achievements"
      >
      </work-list-item>
    </div>
  </div>
</template>
