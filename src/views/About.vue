<template>
    <div class="about">
        <h2><i class="fas fa-address-card"></i> About</h2>
        <br/>
        
        <h3><span>My Profile</span></h3>
        <div class="profile-card">
            <img class="profile-card-img" src="/img/Nia-profile.png"/>
            <div class="profile-card-content">
                <table class="borderless-table">
                    <tbody>
                        <tr>
                            <th><i class="fas fa-signature"></i> Name</th>
                            <td>中曽根 智文（Tomofumi Nakasone）</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-signature"></i> (a.k.a.)</th>
                            <td>智中 ニア（Nia Tomonaka）</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-birthday-cake"></i> Birthday</th>
                            <td>1992/10/12</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-landmark"></i> Speciality</th>
                            <td>フロントエンドやサーバーサイドでの開発、データベースの設計・チューニング、インフラ（AWSなどのクラウドを利用）の構成・運用</td>
                        </tr>
                        <tr>
                            <th><i class="far fa-play-circle"></i> Hobby</th>
                            <td>音ゲー、写真撮影</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-link"></i> SNS / Links</th>
                            <td>
                                <div class="sns-buttons">
                                    <sns-button icon-name="twitter" link="https://twitter.com/nia_tn1012" button-name="Twitter" bg-color="#00acee"></sns-button>
                                    <sns-button icon-name="facebook" link="https://www.facebook.com/niatn1012" button-name="Facebook" bg-color="#3b5998"></sns-button>
                                    <sns-button icon-name="github" link="https://github.com/Nia-TN1012" button-name="GitHub" bg-color="#24292e"></sns-button>
                                    <sns-button icon-name="pen-fancy" icon-type="s" link="https://chronoir.net/" button-name="Blog" bg-color="#2464ff"></sns-button>
                                    <sns-button is-show-icon="false" link="https://qiita.com/nia_tn1012" button-name="Qiita" bg-color="#55c500"></sns-button>
                                    <sns-button icon-name="github" link="https://hub.docker.com/u/niatn1012/" button-name="Docker Hub" bg-color="#099cec"></sns-button>
                                    <sns-button is-show-icon="false" link="https://www.nuget.org/profiles/nia_tn1012" button-name="NuGet Gallery" bg-color="#004880"></sns-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br/><br/>
        <div class="profile-balloon">
            <img class="profile-balloon-chara" src="/img/Nia-SD-profile.png"/>
            <div class="profile-balloon-container">
                <div class="profile-balloon-content">
                    <p>こんにちはー！ 私は生まれも育ちも湘南のエンジニアです！ </p>
                    <p>
                        新卒ではITのベンチャー企業に入社し、学生時代からC#やPHPを使ったプログラミングやアプリ開発をした経験を活かしつつ、
                        業務ではゲームのサーバーサイドやフロントエンドでの運用・開発に携わりました。<br/>
                        運用をしているうちに、データベースやインフラも含めてゲームのシステム全体を見れるようにしたいと思い、
                        2年目からは、データベースの設計・チューニングやインフラの運用にも携わり、キャリアとしてのフルスタックエンジニアを目指していました。
                    </p>
                    <p>
                        最近ではブロックチェーンに興味を持ったのと、1からゲームの開発に携わりたく思い、ブロックチェーンゲームの開発会社に転職しました。<br/>
                        フルスタックエンジニアをベースに、ブロックチェーンなどの技術を探究し続けるエンジニアとして精進していきます。
                    </p>
                    <p>
                        趣味は写真撮影と音ゲーです。たまに非日常を求めて一人旅しています。<br/>
                        好きなものは、コーヒー、紅茶、シラス丼（湘南といえば、江ノ島のシラス丼！）
                    </p>
                    <p>
                        プロフィール画像のイラストは自分で描きました。TwitterなどのSNSのプロフィール画像で使うためです。
                    </p>
                    <p>よろしくお願いします！</p>
                </div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SnsButton from '@/components/SnsButton.vue';

@Component({
    components: {
        SnsButton
    }
})
export default class About extends Vue {
}
</script>

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
    @media only screen and ( max-width: $mobileWidth ) {
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

    th, td {
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