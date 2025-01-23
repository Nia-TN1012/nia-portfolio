<script setup lang="ts">
import ArtifactListItem from '../components/ArtifactListItem.vue';
import type { ArtifactItem } from '../components/ArtifactListItem.vue';

const artifactsInApp: ArtifactItem[] = [
  {
    title: "アイコンフォントこれくしょん",
    imageName: "iconfont-collection",
    createDate: "2016/10",
    type: "UWPアプリ",
    technologyList: ["C#", ".NET Core", "Windows 10 SDK"],
    appLinks: ["https://www.microsoft.com/store/apps/9nblggh4321l"],
    githubLinks: ["https://github.com/Nia-TN1012/IconFontCollection"],
    summaryList: [
      "「すぱこみっく！ ユニバース」を開発していた時に、ハンバーガーボタンなどのアイコンの文字コードを探すのが大変だったので、それを簡単に探せるアプリがあればと思い、開発しました。",
      "お気に入り機能を使って、よく使うアイコンを登録することができます。",
      "また日本語（ja-JP）だけでなく、英語（en-US）などの多言語に対応しています。"
    ]
  },
  {
    title: "WSBマネージャー",
    imageName: "wsbmanager",
    createDate: "2019/08",
    type: "UWPアプリ",
    technologyList: ["C#", ".NET Core", "Windows 10 SDK"],
    appLinks: ["https://www.microsoft.com/store/apps/9P09B9DSPB95"],
    githubLinks: ["https://github.com/Nia-TN1012/WSBManager"],
    summaryList: [
      "Windows 10 1903で登場したWindowsサンドボックスでは、XML形式の設定ファイルを使ってサンドボックスの設定をすることができるのですが、これをGUI上から簡単に設定できたらと思い、開発しました。",
      "Windowsサンドボックスの設定を管理し、このアプリからWindowsサンドボックスを起動することができます。（アプリの一時フォルダに設定ファイルを作成し、ファイルに応じた既定のアプリの起動機能で実現させています）",
      "ダークモードに対応しており、使用しているWindowsのダークモード設定と連動します。（画像はダークモードの時です。）"
    ]
  },
  {
    title: "Chronoir Robocon Timer",
    imageName: "chronoir-robocon-timer",
    createDate: "2013/07",
    type: "Windowsアプリ（WPF）",
    technologyList: ["C#", ".NET Framework", "WPF"],
    githubLinks: ["https://github.com/Nia-TN1012/WSBManager"],
    summaryList: [
      "大学2年の夏休みに、新入生向けのロボットコンテストの模擬戦で使用するタイマーアプリを開発しました。はじめはHSP言語で開発していましたが、大学3年の頃にWPFを学習した際に、WPFアプリに移植しました。",
      "チーム名を選択するコンボボックスは、試合中はトグルボタンを非表示にして、単なるテキスト表示なる仕掛けを施しています。"
    ]
  },
  {
    title: "ポートフォリオ（※このサイトです）",
    imageName: "portfolio",
    createDate: "2019/10",
    type: "Webアプリ",
    technologyList: ["HTML5", "TypeScript", "Vue3", "Sass", "Vercel"],
    appLinks: ["https://nia-tn1012.com/"],
    githubLinks: ["https://github.com/Nia-TN1012/Nia-Portfolio"],
    summaryList: [
        "学生時代からやったこと、作ってみたことを整理するのと、フロントエンドの技術をさらに探求するために、ポートフォリオを作成しました。",
        "TypeScriptとVue.jsをチョイスしたのは、前者は業務でこれから使用するための予習で、後者はLaravelの勉強をきっかけに知ったのでより深く学習しようと思ったからです。",
        "CSSの設定で、使用しているOSのダークモードと連動させています。（画像は、ダークモードの時です。）",
        "2021/05より、ホスティング環境をVercelに変更しました。"
    ]
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
      "取得したRSSフィードをローカルにキャッシュし、次回以降の読み込みを高速化しています。また、アプリ起動時にWeb常に最新話があれば、トースト通知が来ます。"
    ]
  },
]

const artifactsInLib: ArtifactItem[] = [
  {
    title: "Guten-bubble",
    imageName: "guten-bubble",
    createDate: "2019/01",
    type: "WordPress用プラグイン",
    technologyList: ["PHP", "JavaScript", "Sass"],
    appLinks: ["https://wordpress.org/plugins/guten-bubble/"],
    githubLinks: ["https://github.com/Nia-TN1012/guten-bubble"],
    summaryList: [
        "当時WordPressのGutenberg用カスタムブロックの勉強していたので、開発しました。"
    ]
  },
  {
    title: "Concrete5用Dockerイメージ",
    createDate: "2018/09",
    type: "Docker用イメージ",
    technologyList: ["Docker"],
    appLinks: ["https://hub.docker.com/r/niatn1012/concrete5/"],
    githubLinks: ["https://github.com/Nia-TN1012/docker-concrete5"],
    summaryList: [
      "当時Dockerの勉強をしていたのと、Concrete5（バージョン8）用のDockerイメージがなかったので、作成しました。ちなみにConcrete5を知ったきっかけは、当時勤め先のコーポレートサイトのリニューアルする時のCMSの候補を探していた時です。"
    ]
  },
  {
    title: "Xamarin向けのAndroid Wearのウォッチフェイス用カスタムプロジェクトテンプレート",
    imageName: "watchface",
    createDate: "2018/03",
    type: "Visual Studio用カスタムプロジェクトテンプレート",
    technologyList: ["C#", ".NET", "Xamarin Android"],
    githubLinks: ["https://github.com/Nia-TN1012/Chronoir_net.Chronica.WatchfaceTemplates"],
    summaryList: [
      "当時Androidのスマートウォッチを購入したので、自分好みのウォッチフェイスをC#で作るために、このプロジェクトテンプレートを作成しました。"
    ]
  },
  {
    title: "Xamarin向けのAndroid Wear 2.0アプリ用カスタムプロジェクトテンプレート",
    imageName: "android-with-wear",
    createDate: "2018/03",
    type: "Visual Studio用カスタムプロジェクトテンプレート",
    technologyList: ["C#", ".NET", "Xamarin Android"],
    githubLinks: ["https://github.com/Nia-TN1012/AndroidWithWear"],
    summaryList: [
      "当時Visual Studioで用意されていたAndroid Wear用テンプレートがWear 1.0向けだったので、Android StudioにあるWear用のテンプレート（言語はJava）を参考に、Wear 2.0用のテンプレートを作成してみました。",
      "さらに、Xamarin.Formsで使用しているコードの共通化を参考にして、スマートフォン用とウェアラブル用のハイブリッドで開発できるプロジェクトテンプレートも作りました。"
    ]
  },
  {
    title: "すぱーダ（SPADA）",
    imageName: "spada",
    createDate: "2015/12",
    type: ".NET ライブラリ",
    technologyList: ["C#", ".NET Framework", ".NET Core", "Xamarin"],
    githubLinks: ["https://github.com/Nia-TN1012/SPADA"],
    summaryList: [
      "プログラミング生放送主催の勉強会のLTネタで、LINQ to XMLを使ってすぱこーRSSフィードからデータを取得するプログラムを作っていたのですが、ちょうど.NETクラスライブラリとNuGetパッケージのパブリッシングの勉強をしており、せっかくなのでライブラリを作成してNuGetパッケージとしてリリースしました。",
      "UWP用の「ユニすぱーダ（UniSPADA）」は、前述の「すぱこみっく！ ユニバース」で使用しています。"
    ]
  },
]
</script>

<template>
  <div class="artifacs">
    <h2><i class="fas fa-box"></i> Artifacts</h2>
    <p>ここでは、プライベートでの制作物を紹介します。</p>
    <br/>

    <h3><span>アプリ</span></h3>
    <div class="wraplist">
      <artifact-list-item v-for="( item, index ) in artifactsInApp" :key="index"
                          :title="item.title"
                          :image-name="item.imageName"
                          :create-date="item.createDate"
                          :type="item.type"
                          :technology-list="item.technologyList"
                          :app-links="item.appLinks"
                          :github-links="item.githubLinks"
                          :summary-list="item.summaryList">
      </artifact-list-item>
    </div>
    <br/>

    <h3><span>ライブラリ、テンプレート、プラグインなど</span></h3>
    <div class="wraplist">
      <artifact-list-item v-for="( item, index ) in artifactsInLib" :key="index"
                          :title="item.title"
                          :image-name="item.imageName"
                          :create-date="item.createDate"
                          :type="item.type"
                          :technology-list="item.technologyList"
                          :app-links="item.appLinks"
                          :github-links="item.githubLinks"
                          :summary-list="item.summaryList">
      </artifact-list-item>
    </div>
  </div>
</template>
