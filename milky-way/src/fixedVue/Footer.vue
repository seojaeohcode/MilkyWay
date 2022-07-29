<template>
    <div id="wrap" class="color footerfont">
        <a href="https://github.com/seojaeohcode" target="_blank" class="fontsize">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <p id="creator">Developer: SeoJaeOh</p>
        </a>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

/* 상용태그 */
p {
    margin: 0;
}

a {
    text-decoration: none;
    color: white;
}

/* 색상 등 클래스에서 자주 쓸 것들 */
.color {
    color: white;
}

/* 아이디 및 클래스 */
.footerfont {
    font-family: 'Libre Baskerville', serif;
    text-align: center;
}

/* 모바일 320px부터 체크*/
@media (min-width: 320px) and (max-width:767px)  {

    /* 아이디 및 클래스 */
    #wrap {
        margin-top: 1rem;
    }

    svg {
        width: 12vw;
        height: 12vw;
    }

    #creator {
        margin-top: 1vw;
    }

    .fontsize{
        font-size: 4vw;
    }
}

/* 태블릿 */
@media (min-width: 768px) and (max-width:1024px) {
    #wrap {
        margin-top: 1rem;
    }

    svg {
        width: 8vw;
        height: 8vw;
    }

    #creator {
        margin-top: 1vw;
    }

    .fontsize{
        font-size: 3vw;
    }
}

/* PC */
@media (min-width: 1025px) {
    #wrap {
        margin-top: 1rem;
    }

    svg {
        width: 6vw;
        height: 6vw;
    }

    #creator {
        margin-top: 1vw;
    }

    .fontsize{
        font-size: 2vw;
    }
}
</style>