<script setup lang="ts">
import SnsButtonComponent from "../components/SnsButton.vue";
</script>

<template>
  <div class="about">
    <h2><i class="fas fa-address-card"></i> About</h2>
    <br />

    <h3><span>プロフィール</span></h3>
    <div class="profile-card">
      <img class="profile-card-img" src="/img/Nia-profile.png" />
      <div class="profile-card-content">
        <table class="borderless-table">
          <tbody>
            <tr>
              <th><i class="fas fa-signature"></i> 名前</th>
              <td>中曽根 智文（Tomofumi Nakasone）</td>
            </tr>
            <tr>
              <th><i class="fas fa-signature"></i> (別名義)</th>
              <td>智中 ニア（Nia Tomonaka）</td>
            </tr>
            <tr>
              <th><i class="fas fa-birthday-cake"></i> 誕生日</th>
              <td>1992/10/12</td>
            </tr>
            <tr>
              <th><i class="fas fa-landmark"></i> 職業</th>
              <td>
                フルスタックITエンジニア（バックエンド、フロントエンド、データベース、インフラ（クラウド））、
                プログラマー、ブロックチェーンエンジニア
              </td>
            </tr>
            <tr>
              <th><i class="far fa-play-circle"></i> 趣味</th>
              <td>写真撮影、旅行、料理、アニメ鑑賞</td>
            </tr>
            <tr>
              <th><i class="fas fa-link"></i> SNS / リンク</th>
              <td>
                <div class="sns-buttons">
                  <sns-button-component
                    icon-name="x-twitter"
                    link="https://x.com/nia_tn1012"
                    button-name="X (旧Twitter)"
                    bg-color="#000000"
                  ></sns-button-component>
                  <sns-button-component
                    icon-name="facebook"
                    link="https://www.facebook.com/niatn1012"
                    button-name="Facebook"
                    bg-color="#3b5998"
                  ></sns-button-component>
                  <sns-button-component
                    icon-name="instagram"
                    link="https://www.instagram.com/nia_tn1012"
                    button-name="Instagram"
                    bg-color="#bb00ee"
                  ></sns-button-component>
                  <sns-button-component
                    icon-name="github"
                    link="https://github.com/Nia-TN1012"
                    button-name="GitHub"
                    bg-color="#24292e"
                  ></sns-button-component>
                  <sns-button-component
                    icon-name="pen-fancy"
                    icon-type="s"
                    link="https://tech.nia-tn1012.com/"
                    button-name="Blog (Tech)"
                    bg-color="#2464ff"
                  ></sns-button-component>
                  <sns-button-component
                    icon-name="pen-fancy"
                    icon-type="s"
                    link="https://blog.nia-tn1012.com/"
                    button-name="Blog (Private)"
                    bg-color="#00aaff"
                  ></sns-button-component>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br /><br />
    <div class="profile-balloon">
      <img class="profile-balloon-chara" src="/img/Nia-sd-profile.png" />
      <div class="profile-balloon-container">
        <div class="profile-balloon-content">
          <p>こんにちはー！ 私は湘南出身、海老名在住のITエンジニアです！</p>
          <p>
            新卒ではITのベンチャー企業に入社し、学生時代からC#やPHPを使ったプログラミングやアプリ開発をした経験を活かしつつ、
            業務ではゲームのサーバーサイドやフロントエンドでの運用・開発に携わりました。<br />
            運用をしているうちに、データベースやインフラも含めてゲームのシステム全体を見れるようにしたいと思い、
            2年目からは、データベースの設計やインフラの運用にも携わり、キャリアとしてのフルスタックエンジニアを目指していました。
          </p>
          <p>
            2019年頃にブロックチェーンに興味を持ったのと、1からシステムの開発に携わりたく思い、ブロックチェーンを使用したシステムの開発会社に転職し、<br />
            コントラクトの開発やブロックチェーンと連携したシステム開発に7年ほど携わりました。<br />
            最近では、フルスタックITエンジニアとして原点回帰し、AIを活用して、Webサービスやプロダクト開発に携わっています。
          </p>
          <p>
            私がITエンジニアとして心がけていることは、以下のの2つです。<br />
          </p>
          <p>
            <strong>[ユーザー・チームフレンドリーなプロダクト開発]</strong
            ><br />
            ユーザーからの要望に加えて、ユーザーが必要な機能や課題を推測・提案し、満足度の高いプロダクトの開発に貢献しています。<br />
            また、チーム内での課題を発見して解決を提案したり、必要なものを推測して整備したりすることで、プロジェクトの円滑な遂行やプロダクトの開発効率の向上を実現しています。<br />
            また開発中や運用において、担当領域を超えてシステム全体を意識した実装・調査・提案をすることで、開発効率の向上や問題の早期解決に貢献しています。
          </p>
          <p>
            <strong>[技術の探究心と応用力]</strong><br />
            業務で必要になる技術や新技術を独学・探究し、さらに業務で習得した経験と知識を組み合わせて応用することで、プロダクト開発に素早く貢献したり、技術選定の時に複数のプランを提案したりしています。<br />
            またエンジニアチーム全体の技術力向上やエンジニア同士の繋がりの構築のために、IT勉強会を開催しています。
          </p>
          <p>
            趣味は写真撮影と音ゲーです。たまに非日常を求めて一人旅しています。<br />
            好きなものは、コーヒー、紅茶、シラス丼（湘南といえば、江ノ島のシラス丼！）
          </p>
          <p>
            プロフィール画像のイラストは自分で描きました。X（旧Twitter）などのSNSのプロフィール画像で使うためです。
          </p>
          <p>よろしくお願いします！</p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<style lang="scss" scoped>
$pcs: dark;
$mobileWidth: 768px;

.profile-card {
  display: flex;
  flex-wrap: wrap;

  &-img {
    max-width: 100%;
  }

  &-text-content {
    margin: 1em;
    overflow-wrap: normal;
  }
}

.profile-balloon {
  display: flex;
  @media only screen and (max-width: $mobileWidth) {
    flex-wrap: wrap;
  }

  &-chara {
    margin: 2em;
    width: 256px;
    max-width: 100%;
    height: 256px;
    max-height: 100%;
  }

  &-container {
    &::before {
      border-right-width: 3em;
      border-style: solid solid solid none;
      border-color: transparent #00ccff;
      z-index: 1;
    }
  }

  &-content {
    padding: 0.5em 1em;
    border: 1px solid #00ccff;
  }
}

.borderless-table {
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0.5em;

  th,
  td {
    padding: 0.5em;
  }
}
.sns-buttons {
  display: flex;
  flex-wrap: wrap;
}
.sns-button {
  margin: 0.5em;
  padding: 0.1em 0.5em;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  color: white;

  &-twitter {
    background-color: #00acee;
  }
  &-facebook {
    background-color: #3b5998;
  }
  &-github {
    background-color: #24292e;
  }
  &-blog {
    background-color: #2464ff;
  }
  &-qiita {
    background-color: #55c500;
  }
  &-docker {
    background-color: #099cec;
  }
  &-nuget {
    background-color: #004880;
  }
}
</style>
