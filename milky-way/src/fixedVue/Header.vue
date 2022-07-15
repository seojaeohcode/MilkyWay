<template>
    <div id="wrap">
        <div id="title">
        Milky-Way
        </div>
        <div id="nav">
            <!-- 메뉴구성 -->
            <router-link to="/">About</router-link>
            <router-link to="/Award">Award</router-link>
            <router-link to="/Lab">Lab</router-link>
            <router-link to="/News">News</router-link>
            <router-link to="/Survey">Survey</router-link>
            <router-link to="/Technology">Technology</router-link>
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

}

#title{
    display: inline-block;
    color: white;
    font-size: 3rem;
}

#nav{
    display: inline-block;
    float: right;
}
</style>