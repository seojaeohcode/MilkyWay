<template>
    <div id="wrap">
        <div id="title">
        Milky-Way
        </div>
        <div id="nav">
            <!-- 메뉴구성 + 개발 기술별 순서 News = grid형태의 구성방식 + JS 이미지 슬라이드 + DB-->
            <router-link to="/">About</router-link>
            <router-link to="/Lab">Lab</router-link>
            <router-link to="/Technology">Technology</router-link>
            <router-link to="/Award">Award</router-link>
            <router-link to="/News">News</router-link> 
            <router-link to="/Survey">Survey</router-link>
        </div>
    </div>
</template>

<style scoped>
h2 {
    color: white;
}

a {
    text-decoration: none;
    color: white;
    font-size: 2rem;
}

a:hover {
    color: red;
}

a:nth-child(n+2) {
    margin-left: 1rem;
}

#wrap{
    /* min-width: ; */
    /* height: 40px; */
    /* flex로 구성하고 flex no-wrap으로 메뉴바 구성 */
    overflow: hidden; /* hidden이 float이 벗어나는 것을 막아준다. */
    /* 밑으로 떨어지는 것을 막으려면? */
}

#title{
    display: inline-block;
    width: fit-content;
    color: white;
    font-size: 3rem;
    /* 로고를 넣고 사이즈 조정 => 배경은 제거하는걸로 */
}

#nav{
    display: inline-block;
    width: fit-content;
    /* float: right; 플롯은 단점이 많아서 사용하기엔 꺼려지는 기능 div에서 자동 줄바꿈 되는 것이 너무 단점. 그럴 바엔 flex로 정렬하는 것이 훨씬 낫다. */
}
</style>