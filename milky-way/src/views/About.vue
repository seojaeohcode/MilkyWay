<template>
    <div id="wrap">
        <div id="linktext">
            ABOUT
        </div>

        <!-- 2개는 서로 float -->
        <div id='zodiacimg'>
            <!-- <img src="../assets/zodiac/aquarius.png" alt=""> -->
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
                    I'll show you the codes.
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

<script>
import image1 from "../assets/zodiac/aquarius.png"
import image2 from "../assets/zodiac/pisces.png"
import image3 from "../assets/zodiac/aries.png"
import image4 from "../assets/zodiac/taurus.png"
import image5 from "../assets/zodiac/gemini.png"
import image6 from "../assets/zodiac/cancer.png"
import image7 from "../assets/zodiac/Leo.png"
import image8 from "../assets/zodiac/virgo.png"
import image9 from "../assets/zodiac/libra.png"
import image10 from "../assets/zodiac/scorpio.png"
import image11 from "../assets/zodiac/sagittarius.png"
import image12 from "../assets/zodiac/capricon.png"

const images = 
    [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12];

const bgImage = document.createElement("img");
bgImage.src = `${images[0]}`;

const zodiac = document.getElementById('zodiacimg');

console.log(zodiac);
console.log(bgImage);

zodiac.appendChild(bgImage);

console.log(zodiac);
</script>

<style scoped>
/* About까지는 미디어쿼리, 반응형 조정까지 */
/* Lab에서는 슬라이드 쇼 + InnerHtml */

/* Libre */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');
/* Comfortaa */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');

/* 모바일 320px부터 체크*/
@media (min-width: 320px) and (max-width:767px) {
    p{
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

    p{
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
@media (min-width: 1025px) and (max-width:1200px) {
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