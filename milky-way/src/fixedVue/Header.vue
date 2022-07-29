
<template>
    <div class="wrap">
        <div id="nav">
            <!-- 메뉴구성 + 개발 기술별 순서 News = grid형태의 구성방식 + JS 이미지 슬라이드 + DB-->
            <ul>
                <li>
                    <router-link to="/">About</router-link>
                </li>
                <li>
                    <router-link to="/Lab">Lab</router-link>
                </li>
                <li>
                    <router-link to="/Technology">Technology</router-link>
                </li>
                <li>
                    <router-link to="/Award">Award</router-link>
                </li>
                <li>
                    <router-link to="/News">News</router-link>
                </li>
                <li>
                    <router-link to="/Survey">Survey</router-link>
                </li>
            </ul>
        </div>
        <div id="intro">
            <!-- 이미지 -->
            <div id="logobox">
                <img src="../assets/HatchfulExport-All/logo-removebg-preview.png" alt="">
            </div>
            <!-- 소개 설명 -->
            <div id="explain">
                <div id="headline">
                    <p>Milky-Way has a lot of</p>
                    <p>Information likes Star</p>
                    <p>In the milkyway.</p>
                </div>

                <div id="maintext" class="alpha">
                    <p>Laboratory, technical introduction, awards of the month, latest news, surveys, etc</p>
                    <p>Press the button on the menu to get more news about the development</p>
                    <p>It will help new developers. Let's learn hard as a new developer.</p>
                </div>

                <div id="induce">
                    <!-- 아이콘넣기 -->
                    <p><span class="material-icons iconsizeup">keyboard_double_arrow_up</span> click Menu &amp; Look
                        Down <span class="material-icons iconsizeup">keyboard_double_arrow_down</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 메리웨더 */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto:wght@300&display=swap');
/* Bebas */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@300&family=Roboto:wght@300&display=swap');
/* Libre */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

/* 색상 등 클래스에서 자주 쓸 것들 */
.alpha {
    color: rgba(255, 255, 255, 0.75);
}

.iconsizeup {
    vertical-align: middle;
}

ul {
    padding: 0;
}

/* 모바일 320px부터 체크*/
@media (min-width: 320px) and (max-width:767px) {

    /* 상용태그 */
    p {
        margin: 0;
        /*font-family: 'Libre Baskerville', serif;*/
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.25rem;
    }

    li {
        text-align: center;
        display: block;
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 4vw;
        font-family: 'Libre Baskerville', serif;
    }

    a:hover {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75px #0fa;
    }

    a:active {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px rgb(218, 255, 86), 0 0 41px rgb(218, 255, 86), 0 0 46px rgb(218, 255, 86), 0 0 51px rgb(218, 255, 86), 0 0 75px rgb(218, 255, 86);
    }

    /* 아이디 및 클래스 */
    #nav {
        margin-top: 3rem;
    }

    #intro {
        /* color: white;
        font-size: 3rem; */
        /* min-height: 75rem; */
    }

    #logobox {
        width: 60vw;
        height: 60vw;
        margin: 0 auto;
    }

    #logobox>img {
        width: 60vw;
        height: 60vw;
    }

    #explain {
        /* width: 700px;
        height: 700px;
        text-align: left;
        padding-left: 6rem; */
        text-align: center;
    }

    #headline {
        color: white;
        font-size: 6vw;
    }

    #maintext {
        /* margin-top: 3rem;
        font-size: 4vw; */
        display: none;
    }

    #induce {
        color: rgba(255, 255, 255, 0.85);
        margin-top: 1rem;
        font-size: 4vw;
    }
}

/* 태블릿 */
@media (min-width: 768px) and (max-width:1024px) {

    /* 상용태그 */
    p {
        margin: 0;
        /*font-family: 'Libre Baskerville', serif;*/
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.25rem;
    }

    li {
        text-align: center;
        display: block;
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 4vw;
        font-family: 'Libre Baskerville', serif;
    }

    a:hover {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75px #0fa;
    }

    a:active {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px rgb(218, 255, 86), 0 0 41px rgb(218, 255, 86), 0 0 46px rgb(218, 255, 86), 0 0 51px rgb(218, 255, 86), 0 0 75px rgb(218, 255, 86);
    }

    /* 아이디 및 클래스 */
    #nav {
        margin-top: 3rem;
    }

    #intro {
        /* color: white;
        font-size: 3rem; */
        /* min-height: 75rem; */
    }

    #logobox {
        width: 60vw;
        height: 60vw;
        margin: 0 auto;
    }

    #logobox>img {
        width: 60vw;
        height: 60vw;
    }

    #explain {
        /* width: 700px;
        height: 700px;
        text-align: left;
        padding-left: 6rem; */
        text-align: center;
    }

    #headline {
        color: white;
        font-size: 6vw;
    }

    #maintext {
        display: block;
        margin: 0 auto;
        width: 80%;
        margin-top: 3rem;
        font-size: 3vw;
    }

    #induce {
        color: rgba(255, 255, 255, 0.85);
        margin-top: 1rem;
        font-size: 4vw;
    }
}

/* PC */
@media (min-width: 1025px) {

    /* 상용태그 */
    p {
        margin: 0;
        /*font-family: 'Libre Baskerville', serif;*/
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.25rem;
    }

    ul {
        width: fit-content;
        margin: 0 auto;
    }

    ul:after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        text-align: center;
        display: block;
        float: left;
        margin-top: 1rem;
        margin-left: 2rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 2.2vw;
        font-family: 'Libre Baskerville', serif;
    }

    a:hover {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75px #0fa;
    }

    a:active {
        text-shadow:
            /* White glow */
            0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
            /* Green glow */
            0 0 24px rgb(218, 255, 86), 0 0 41px rgb(218, 255, 86), 0 0 46px rgb(218, 255, 86), 0 0 51px rgb(218, 255, 86), 0 0 75px rgb(218, 255, 86);
    }

    /* 아이디 및 클래스 */
    #nav {
        margin-top: 3rem;
    }

    #nav:after {
        content: '';
        display: block;
        clear: both;
    }

    #intro {
        /* color: white;
        font-size: 3rem; */
        /* min-height: 75rem; */
        width: fit-content;
        margin: 0 auto;
        margin-top: 6rem;
    }

    #intro:after {
        content: '';
        display: block;
        clear: both;
    }

    #logobox {
        width: 42vw;
        height: 42vw;
        float: right;
    }

    #logobox>img {
        width: 42vw;
        height: 42vw;
    }

    #explain {
        /* width: 700px;
        height: 700px;
        text-align: left;
        padding-left: 6rem; */
        width: 45%;
        float: left;
        margin-left: 5%;
    }

    #headline {
        color: white;
        font-size: 3vw;
    }

    #maintext {
        display: block;
        margin-top: 3rem;
        font-size: 2vw;
    }

    #maintext>p {
        margin-top: 1.5rem;
    }

    #induce {
        color: rgba(255, 255, 255, 0.85);
        margin-top: 1.5rem;
        font-size: 2vw;
    }

    #induce>p {
        margin-right: 1rem;
    }
}
</style>