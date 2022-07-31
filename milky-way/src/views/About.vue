<template>
    <div id="linktext">
        ABOUT
    </div>

    <div id="wrap">
        <!-- 2개는 서로 float -->
        <div id='zodiacimg'>
            <img src="" alt="" id="constellation" class=''>
        </div>
        <div id="explain">
            <div id="why">
                <p>
                    Why did I make Milky Way?
                </p>
                <p>
                    Knowledge is like a star.
                </p>
                <p>
                    If you look at the pattern,
                </p>
                <p>
                    the stars look like constellations.
                </p>
                <p>
                    If you can't find the pattern,
                </p>
                <p>
                    stars are just scattered stones.
                </p>
            </div>

            <div id="what">
                <p>
                    What am I going to show?
                </p>
                <p>
                    Lab :
                </p>
                <p>
                    I'll show you the codes.
                </p>
                <p>
                    The remaining parts :
                </p>
                <p>
                    Various information about technology.
                </p>
            </div>

            <div id="how">
                <p>
                    How am I going to show it?
                </p>
                <p>
                    I'll show you through the slide show.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* About까지는 미디어쿼리, 반응형 조정까지 */
/* Lab에서는 슬라이드 쇼 + InnerHtml */

/* Libre */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');
/* Comfortaa */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');

/* 모바일 320px부터 체크*/
@media (min-width: 320px) and (max-width:767px) {
    p {
        margin: 1rem;
        padding: 0;
    }

    #wrap {
        height: fit-content;
        margin-top: 1vh;
    }

    #linktext {
        margin-top: 3rem;
        color: white;
        font-size: 10vw;
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

    .fade {
        animation: fade 6s linear infinite;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }

        25% {
            opacity: 1;
        }

        75% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    #explain {
        text-align: center;
        font-weight: bold;
        text-shadow: 2px 2px 2px gray;
        font-family: 'Comfortaa', cursive;
    }

    #why {
        font-size: 5vw;
        color: orange;
    }

    #what {
        font-size: 5vw;
        color: orange;
    }

    #how {
        font-size: 5vw;
        color: orange;
    }

    #explain div>p:nth-child(1) {
        font-size: 6.5vw;
        color: white;
        margin: 1.5rem;
    }
}

/* 태블릿 */
@media (min-width: 768px) and (max-width:1024px) {
    #wrap {
        height: fit-content;
        margin-top: 1vh;
    }

    #linktext {
        margin-top: 3rem;
        color: white;
        font-size: 8vw;
        text-align: center;
        font-family: 'Libre Baskerville', serif;
    }

    p {
        margin: 1rem;
        padding: 0;
    }

    #zodiacimg {
        width: fit-content;
        margin: 3rem auto;
    }

    #zodiacimg>img {
        width: 50vw;
        border-radius: 20px;
    }

    .fade {
        animation: fade 6s linear infinite;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }

        25% {
            opacity: 1;
        }

        75% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    #explain {
        text-align: center;
        font-weight: bold;
        text-shadow: 2px 2px 2px gray;
        font-family: 'Comfortaa', cursive;
    }

    #why {
        font-size: 4vw;
        color: orange;
    }

    #what {
        font-size: 4vw;
        color: orange;
    }

    #how {
        font-size: 4vw;
        color: orange;
    }

    #explain div>p:nth-child(1) {
        font-size: 5.5vw;
        color: white;
        margin: 1.5rem;
    }
}

/* PC */
@media (min-width: 1025px) {
    #wrap {
        width: fit-content;
        margin: 0 auto;
        margin-top: 1vh;
    }

    #wrap:after {
        content: '';
        display: block;
        clear: both;
    }

    #linktext {
        color: white;
        font-size: 6vw;
        text-align: center;
        font-family: 'Libre Baskerville', serif;
    }

    p {
        margin: 1rem;
        padding: 0;
    }

    #zodiacimg {
        width: fit-content;
        margin: 3rem 0 3rem 5rem;
        float: left;
    }

    #zodiacimg:after {
        content: '';
        display: block;
        clear: both;
    }

    #zodiacimg>img {
        width: 24vw;
        border-radius: 20px;
        margin: 1rem;
    }

    .fade {
        animation: fade 6s linear infinite;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }

        25% {
            opacity: 1;
        }

        75% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    #explain {
        width: fit-content;
        text-align: center;
        font-weight: bold;
        text-shadow: 2px 2px 2px gray;
        font-family: 'Comfortaa', cursive;
        float: left;
        margin: 3rem 0 3rem 20rem;
    }

    #explain:after {
        content: '';
        display: block;
        clear: both;
    }

    #why {
        font-size: 1.5vw;
        color: orange;
    }

    #what {
        font-size: 1.5vw;
        color: orange;
    }

    #how {
        font-size: 1.5vw;
        color: orange;
    }

    #explain div>p:nth-child(1) {
        font-size: 2.5vw;
        color: white;
        margin: 1.5rem;
    }
}
</style>

<script>
import image1 from "../assets/zodiac/aquarius.png";
import image2 from "../assets/zodiac/pisces.png";
import image3 from "../assets/zodiac/aries.png";
import image4 from "../assets/zodiac/taurus.png";
import image5 from "../assets/zodiac/gemini.png";
import image6 from "../assets/zodiac/cancer.png";
import image7 from "../assets/zodiac/Leo.png";
import image8 from "../assets/zodiac/virgo.png";
import image9 from "../assets/zodiac/libra.png";
import image10 from "../assets/zodiac/scorpio.png";
import image11 from "../assets/zodiac/sagittarius.png";
import image12 from "../assets/zodiac/capricon.png";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
];

export default {
    mounted() {
        let i = 1;
        //"" ''를 정확하게 구분하지 않으면 찾을 수가 없음.
        // constructer / window onload / lifecycle
        const zodiac = document.getElementById("constellation");
        zodiac.classList.add('fade');
        zodiac.src = `${images[0]}`;

        setInterval(() => {
            // 이미지 변환
            zodiac.src = `${images[i]}`;

            // 이미지 인덱스 증가 
            if (i > 10) {
                i = 0;
            } else {
                i++;
            }
        }, 6000);
        // 확인용: console.log(zodiac);
    },
}
</script>