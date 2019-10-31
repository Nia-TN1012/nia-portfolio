<template>
    <div class="about">
        <h2><i class="fas fa-address-card"></i> About</h2>
        <br/>
        
        <h3><span>My Profile</span></h3>
        <div class="profile-card">
            <img class="profile-card-img" src="/img/Nia-profile.png"/>
            <div class="profile-content">
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
                                    <a class="sns-button sns-button-twitter" href="https://twitter.com/nia_tn1012" target="_blank">
                                        <i class="fab fa-twitter"></i> Twitter
                                    </a>
                                    <a class="sns-button sns-button-facebook" href="https://www.facebook.com/niatn1012" target="_blank">
                                        <i class="fab fa-facebook"></i> Facebook
                                    </a>
                                    <a class="sns-button sns-button-github" href="https://github.com/Nia-TN1012" target="_blank">
                                        <i class="fab fa-github"></i> Github
                                    </a>
                                    <a class="sns-button sns-button-blog" href="https://chronoir.net/" target="_blank">
                                        <i class="fas fa-pen-fancy"></i> Blog
                                    </a>
                                    <a class="sns-button sns-button-qiita" href="https://qiita.com/nia_tn1012" target="_blank">
                                        Qiita
                                    </a>
                                    <a class="sns-button sns-button-docker" href="https://hub.docker.com/u/niatn1012/" target="_blank">
                                        <i class="fab fa-docker"></i> Docker Hub
                                    </a>
                                    <a class="sns-button sns-button-nuget" href="https://www.nuget.org/profiles/nia_tn1012" target="_blank">
                                        NuGet Gallery
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br/>

        
    </div>
</template>

<style lang="scss" scoped>
.profile-card {
    display: flex;
    flex-wrap: wrap;
    
    &-img {
        width: 256px;
        max-width: 100%;
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