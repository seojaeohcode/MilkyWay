<template>
    <div class="wrap">
        <div id="nav">
            <!-- 메뉴구성 + 개발 기술별 순서 News = grid형태의 구성방식 + JS 이미지 슬라이드 + DB-->
            <router-link to="/">About</router-link>
            <router-link to="/Lab">Lab</router-link>
            <router-link to="/Technology">Technology</router-link>
            <router-link to="/Award">Award</router-link>
            <router-link to="/News">News</router-link>
            <router-link to="/Survey">Survey</router-link>
        </div>
        <div id="intro">
            <!-- 소개 설명 -->
            <div id="explain">
                <div id="headline">
                    <h1>
                    <p>Milky-Way has a lot of</p>
                    <p>Information likes Star</p> 
                    <p>In the milkyway.</p>
                    </h1>
                </div>

                <div id="maintext" class="alpha">
                    <h3>
                    <p>Laboratory, technical introduction, awards of the month, latest news, surveys, etc</p>
                    <p>Press the button on the menu to get more news about the development</p>
                    <p>It will help new developers. Let's learn hard as a new developer.</p>
                    </h3>
                </div>

                <div id="induce" class="">
                    <!-- 아이콘넣기 -->
                    <h4> 
                    <p>click The Menu &amp; Look Down</p>
                    </h4>
                </div>
            </div>
            <!-- 이미지 -->
            <div id="logo">
                <img src="../assets/HatchfulExport-All/logo-removebg-preview.png" alt="" id="logo">
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

p{
    margin: 0;
    /*font-family: 'Libre Baskerville', serif;*/
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 0.25rem;
}

h1{

}

h3{

}

h4{
    
}

a {
    text-decoration: none;
    color: white;
    font-size: 3rem;
    font-family: 'Libre Baskerville', serif;
}

a:hover {
    text-shadow: /* White glow */ 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 
    /* Green glow */ 0 0 24px #0fa, 0 0 41px #0fa, 0 0 46px #0fa, 0 0 51px #0fa, 0 0 75px #0fa;
}

a:nth-child(n+2) {
    margin-left: 1rem;
}

/* 전체 wrap flex */
.wrap {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    flex-basis: content;
    /* min-width: ; */
    /* height: 40px; */
    /* flex로 구성하고 flex no-wrap으로 메뉴바 구성 */
    /* overflow: hidden; hidden이 float이 벗어나는 것을 막아준다. */
    /* 밑으로 떨어지는 것을 막으려면? */
}

/* 네비게이션 바 */
#nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-shrink: 1;
    margin-top: 3rem;
    /* display: inline-block;
    width: fit-content; */
    /* float: right; 플롯은 단점이 많아서 사용하기엔 꺼려지는 기능 div에서 자동 줄바꿈 되는 것이 너무 단점. 그럴 바엔 flex로 정렬하는 것이 훨씬 낫다. */
}

/* 인트로 */
#intro {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    color: white;
    font-size: 3rem;
    min-height: 750px;
    flex-shrink: 1;
    flex-basis: content;
    /* 로고를 넣고 사이즈 조정 => 배경은 제거하는걸로 */
}

#explain {
    width: 700px;
    height: 700px;
    text-align: left;
    padding-left: 6rem;
}

#headline{

}

#maintext{

}

#induce{

}

#logo {
    width: 700px;
    height: 700px;
}

.alpha{
    color: rgba(255, 255, 255, 0.75);
}
</style>