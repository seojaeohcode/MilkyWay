<template>
    <div id="wrap">
        <div id="linktext">
            ABOUT
        </div>

        <!-- 2개는 서로 float -->
        <div id="zodiacimg">
            <img src="../assets/zodiac/aquarius.svg" alt="">
        </div>
        <div id="explain">
            <div>
            why
            </div>
            
            <div>

            </div>
            
            <div>
            
            </div>
        </div>
    </div>
</template>

<style scoped>
/* About까지는 미디어쿼리, 반응형 조정까지 */
/* Lab에서는 슬라이드 쇼 + InnerHtml */

/* Libre */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

/* 모바일 320px부터 체크*/
@media (max-width:767px) {
    #wrap {
        height: fit-content;
        margin-top: 1vh;
    }

    #linktext {
        color: white;
        font-size: 8vw;
        text-align: center;
        font-family: 'Libre Baskerville', serif;
    }

    #zodiacimg {
        width: fit-content;
        margin: 3rem auto;
    }

    #zodiacimg>img {
        width: 60vw;
        border-radius: 20px;
    }
}

/* 태블릿 */
@media (min-width:768px) and (max-width:1024px) {
    #wrap {
        height: fit-content;
        margin-top: 1vh;
    }

    #linktext {
        color: white;
        font-size: 8vw;
        text-align: center;
        font-family: 'Libre Baskerville', serif;
    }
}

/* PC */
@media (min-width:1025px) {
    #wrap {
        height: fit-content;
        margin-top: 1vh;
    }

    #linktext {
        color: white;
        font-size: 8vw;
        text-align: center;
        font-family: 'Libre Baskerville', serif;
    }
}
</style>