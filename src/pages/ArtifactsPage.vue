<script setup lang="ts">
import ArtifactListItem from "../components/ArtifactListItem.vue";
import type { ArtifactItem } from "../components/ArtifactListItem.vue";

const activeArtifacts: ArtifactItem[] = [
  {
    title: "ポートフォリオ（※このサイトです）",
    imageName: "portfolio",
    createDate: "2019/10",
    type: "Webアプリ",
    technologyList: ["TypeScript", "Vue3", "Sass", "Vercel"],
    appLinks: ["https://nia-tn1012.com/"],
    githubLinks: ["https://github.com/Nia-TN1012/nia-portfolio"],
    summaryList: [
      "学生時代からやったこと、作ってみたことを整理するのと、フロントエンドの技術をさらに探求するために、ポートフォリオを作成しました。",
      "TypeScriptとVue.jsを選定したのは、前者は業務でこれから使用するための予習で、後者はLaravelの勉強をきっかけに知ったのでより深く学習しようと思ったからです。",
      "CSSの設定で、使用しているOSのダークモードと連動させています。（画像は、ダークモードの時です。）",
      "2021/05より、ホスティング環境をVercelに変更しました。",
      "（今後やりたいこと）AI駆動に対応した構成しようと思います。",
    ],
  },
  {
    title: "Robocon Timer",
    imageName: "robocon-timer",
    createDate: "2013/07",
    type: "Windowsアプリ（WPF）",
    technologyList: ["C#", ".NET Framework", "WPF"],
    githubLinks: ["https://github.com/Nia-TN1012/robocon-timer"],
    summaryList: [
      "大学2年の夏休みに、新入生向けのロボットコンテストの模擬戦で使用するタイマーアプリを開発しました。はじめはHSP言語で開発していましたが、大学3年の頃にWPFを学習した際に、WPFアプリに移植しました。",
      "チーム名を選択するコンボボックスは、試合中はトグルボタンを非表示にして、単なるテキスト表示なる仕掛けを施しています。",
    ],
  },
  {
    title: "Guten-bubble",
    imageName: "guten-bubble",
    createDate: "2019/01",
    type: "WordPress用プラグイン",
    technologyList: ["PHP", "JavaScript", "Sass"],
    appLinks: ["https://wordpress.org/plugins/guten-bubble/"],
    githubLinks: ["https://github.com/Nia-TN1012/guten-bubble"],
    summaryList: [
      "当時WordPressのGutenberg用カスタムブロックの勉強していたので、開発しました。",
    ],
  },
];

const archivedArtifacts: ArtifactItem[] = [
  {
    title: "アイコンフォントこれくしょん",
    imageName: "iconfont-collection",
    createDate: "2016/10",
    type: "UWPアプリ",
    technologyList: ["C#", ".NET Core", "Windows 10 SDK"],
    githubLinks: ["https://github.com/Nia-TN1012/IconFontCollection"],
    summaryList: [
      "「すぱこみっく！ ユニバース」を開発していた時に、ハンバーガーボタンなどのアイコンの文字コードを探すのが大変だったので、それを簡単に探せるアプリがあればと思い、開発しました。",
      "お気に入り機能を使って、よく使うアイコンを登録することができます。",
      "また日本語（ja-JP）だけでなく、英語（en-US）などの多言語に対応しています。",
    ],
  },
  {
    title: "WSBマネージャー",
    imageName: "wsbmanager",
    createDate: "2019/08",
    type: "UWPアプリ",
    technologyList: ["C#", ".NET Core", "Windows 10 SDK"],
    githubLinks: ["https://github.com/Nia-TN1012/WSBManager"],
    summaryList: [
      "Windows 10 1903で登場したWindowsサンドボックスでは、XML形式の設定ファイルを使ってサンドボックスの設定をすることができるのですが、これをGUI上から簡単に設定できたらと思い、開発しました。",
      "Windowsサンドボックスの設定を管理し、このアプリからWindowsサンドボックスを起動することができます。（アプリの一時フォルダに設定ファイルを作成し、ファイルに応じた既定のアプリの起動機能で実現させています）",
      "ダークモードに対応しており、使用しているWindowsのダークモード設定と連動します。（画像はダークモードの時です。）",
    ],
  },
  {
    title: "すぱこみっく！ ユニバース",
    imageName: "spacomic",
    createDate: "2016/10",
    type: "UWPアプリ",
    technologyList: ["C#", ".NET Core", "Windows 10 SDK"],
    githubLinks: ["https://github.com/Nia-TN1012/SpacomicUniverse"],
    summaryList: [
      "2016年9月に行ったインターンで学んだことを復習するため、前々から興味のあったWindowsストアアプリの開発をしました。",
      "すぱこーRSSフィードを取得し、一覧表示します。（レスポンシブ対応済み）",
      "RSSフィード一覧から項目を選択すると、漫画画像を表示するページを開きます。拡大縮小表示ができる他、FlipViewを使用して前後の話に切り替えられます。",
      "取得したRSSフィードをローカルにキャッシュし、次回以降の読み込みを高速化しています。また、アプリ起動時にWeb常に最新話があれば、トースト通知が来ます。",
    ],
  },
];
</script>

<template>
  <div class="artifacs">
    <h2><i class="fas fa-box"></i> Artifacts</h2>
    <p>ここでは、プライベートでの制作物を紹介します。</p>
    <br />

    <h3><span>現在開発中のアプリなど</span></h3>
    <div class="wraplist">
      <artifact-list-item
        v-for="(item, index) in activeArtifacts"
        :key="index"
        :title="item.title"
        :image-name="item.imageName"
        :create-date="item.createDate"
        :type="item.type"
        :technology-list="item.technologyList"
        :app-links="item.appLinks"
        :github-links="item.githubLinks"
        :summary-list="item.summaryList"
      >
      </artifact-list-item>
    </div>
    <br />

    <h3><span>過去に開発したアプリなど</span></h3>
    <div class="wraplist">
      <artifact-list-item
        v-for="(item, index) in archivedArtifacts"
        :key="index"
        :title="item.title"
        :image-name="item.imageName"
        :create-date="item.createDate"
        :type="item.type"
        :technology-list="item.technologyList"
        :app-links="item.appLinks"
        :github-links="item.githubLinks"
        :summary-list="item.summaryList"
      >
      </artifact-list-item>
    </div>
  </div>
</template>
