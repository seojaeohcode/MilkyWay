<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div id="wrap">
        <div id="container">
            <div id="html">
                <div class="title">
                    <div class="titleimg">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>HTML5</title>
                            <path
                                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                        </svg>
                    </div>
                    <div class="titletext">
                        <button><span class="material-icons" id="htmlminus">arrow_back</span></button>
                        <span>HTML VIEW</span>
                        <button><span class="material-icons" id="htmlplus">arrow_forward</span></button>
                    </div>
                    <div id="htmlstorage">
                        <div class="category">

                        </div>
                        <div class="view">

                        </div>
                    </div>
                </div>
            </div>
            <div id="css">
                <div class="title">
                    <div class="titleimg">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>CSS3</title>
                            <path
                                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                        </svg>
                    </div>
                    <div class="titletext">
                        <button><span class="material-icons" id="cssminus">arrow_back</span></button>
                        <span>CSS VIEW</span>
                        <button><span class="material-icons" id="cssplus">arrow_forward</span></button>
                    </div>
                    <div id="cssstorage">
                        <div class="category">

                        </div>
                        <div class="view">

                        </div>
                    </div>
                </div>
            </div>
            <div id="javascript">
                <div class="title">
                    <div class="titleimg">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>JavaScript</title>
                            <path
                                d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                        </svg>
                    </div>
                    <div class="titletext">
                        <button><span class="material-icons" id="jsminus">arrow_back</span></button>
                        <span>JS VIEW</span>
                        <button><span class="material-icons" id="jsplus">arrow_forward</span></button>
                    </div>
                    <div id="jsstorage">
                        <div class="category">

                        </div>
                        <div class="view">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#html {
    background: rgba(255, 0, 0, .5);
}

#css {
    background: rgba(0, 0, 255, .5);
}

#javascript {
    background: rgba(255, 255, 0, .5);
}

#htmlstorage {
    background: gray;
}

#cssstorage {
    background: gray;
}

#jsstorage {
    background: gray;
}

@media (min-width: 320px) and (max-width:767px) {
    .title {
        font-size: 8vw;
        text-shadow: 2px 2px 2px gray;
        margin: 0 auto;
        vertical-align: middle;
        color: white;
    }

    .view {
        /* overflow-x: scroll; */
        width: fit-content;
        margin: 0 auto;
        text-align: center;
        text-shadow: 2px 2px 2px black;
    }

    .material-icons {
        font-size: 8vw;
    }

    .titletext button {
        background: transparent;
        border: 0;
        padding: 0;
        margin: 0;
    }

    .titletext span {
        vertical-align: middle;
        margin: 1rem;
        color: white;
    }

    .title>.titleimg {
        width: fit-content;
        margin: 0 auto;
    }

    .title>.titletext {
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
    }

    .title>.titleimg>svg:nth-child(1) {
        width: 10vw;
        fill: white;
        vertical-align: middle;
    }

    .category {
        text-align: center;
        font-size: 10vw;

    }
}

@media (min-width: 768px) and (max-width:1024px) {}

@media (min-width: 1025px) {}
</style>

<script>
const htmls = [
    // form1
    `
        Text<br><input type="text" autofocus><br><br>
        Main<br><input type="email" placeholder="메일을 입력하세요"><br><br>
        Password<br><input type="password"><br><br>
        Tel<br><input type="tel"><br><br>
        Search<br><input type="search"><br><br>
        Number<br><input type="number" min="1" max="10" step="0.5"><br><br>
        range<br><input type="range" style="margin-bottom: 3rem">`,
    // form2
    `color<br><input type="color"><br><br>
        Month<br><input type="month"><br><br>
        Week<br><input type="week"><br><br>
        Day<br><input type="date"><br><br>
        Time<br><input type="time"><br><br>
        Datetime<br><input type="datetime"><br><br>
        Datetime-Local<br><input type="datetime-local" style="margin-bottom: 3rem">`,
    // form3
    `Button<br><input type="button"><br><br>
        File<br><input type="file"><br><br>
        RadioButton<br>Male<input type="radio" name="radio" checked><br>Female<input type="radio" name="radio"><br><br>
        Checkbox<br><input type="checkbox"><br><br>
        <select style="margin-bottom: 3rem">
            <option>Choose</option>
            <option>gmail.com</option>
            <option>naver.com</option>
        </select>`,
    // form4
    `<form>
        <h1>필수정보</h1>
        <label>이름</label><br><input type="text" maxlength="4" size="10" placeholder="이름을 입력하세요" autofocus required><br>
        <label>회원등급</label><br><input type="text" size="10" readonly value="신입회원"><br>
        <label>아이디</label><br><input type="text" size="20" placeholder="아이디를 입력하세요" required><button>중복확인</button><br>
        <label>비밀번호</label><br><input type="password" placeholder="숫자포함 10자 비밀번호" size="20" required><br>
        <label>비밀번호확인</label><br><input type="password" placeholder="다시 한번 비밀번호 입력" size="20" required><br>
        <label>휴대폰 번호</label><br>
        <select>
            <option>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
        </select>
        - <input type="text" size="6" required> - <input type="text" size="6" required><button>중복확인</button><br>
        <label>이메일</label><br><input type="text" size="10" required>@<input type="text" size="15" required>
        <select>
            <option>직접입력</option>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
        </select>
        <button>중복확인</button><br>
        <input type="checkbox" checked>정보수신에 동의합니다.<br>

        <h1>선택정보</h1>
        <label>자택</label>
        <label>주소</label><br><input type="text" size="15" placeholder="상세주소"><button>우편번호검색</button><br>
        <label>전화번호</label><br>
        <select>
            <option>선택</option>
            <option>010</option>
            <option>02</option>
        </select>
        - <input type="text" size="5"> - <input type="text" size="5"><br>
        <label>직장</label>
        <label>주소</label><br><input type="text" size="15" placeholder="상세주소"><button>우편번호검색</button><br>
        <label>전화번호</label><br>
        <select>
            <option>선택</option>
            <option>032</option>
            <option>031</option>
        </select>
        - <input type="text" size="5"> - <input type="text" size="5"><br>
        <label>생년월일</label><br><input type="date">
        <input type="radio" name="birthday" checked>양력<input type="radio" name="birthday">음력<br><br>

        <input type="reset" value="취소"><button type="submit" style="margin-bottom: 3rem">확인</button>
    </form>`,
    // p
    `
    <p>
    Pellentesque fermentum faucibus odio, maximus consequat arcu placerat in. Ut quis urna vitae odio sollicitudin posuere scelerisque ac arcu. Pellentesque sit amet suscipit massa, a vehicula lorem. Duis id lacus ante. Maecenas quis suscipit lacus, in luctus mi. Pellentesque sed erat blandit, aliquet nibh a, consequat ante. Nunc ultricies tortor sem, vitae commodo ex iaculis a. Nam pharetra et nisl et posuere. 
    </p>
    <p style="margin-bottom: 0">
    Quisque at urna sed tortor eleifend malesuada. Sed congue ante eu congue egestas. Praesent ornare hendrerit nisl eget blandit. Vivamus et leo at velit euismod auctor a at tellus. Vestibulum commodo sed lacus sit amet pretium. Mauris pulvinar pretium elit, et imperdiet erat dignissim finibus. Aliquam metus justo, maximus a efficitur in, rutrum ac dolor. Vestibulum eu ipsum finibus, iaculis nibh a, pretium felis.
    </p>
    <br>`
];
const csss = [0];
const jss = [0];

export default {
    mounted() {
        let i = 0;
        const htmlcategory = document.querySelector("#htmlstorage .category");
        const html = document.querySelector("#htmlstorage .view");

        htmlcategory.innerHTML = `form`;

        // if (i < 4) {
        //     htmlcategory.innerHTML = `form`;
        // }else if(i < 6){
        //     htmlcategory.innerHTML = `p`;
        // }

        html.innerHTML = htmls[0];

        const css = document.querySelector("#cssstorage .view");
        console.log(css);

        const js = document.querySelector("#jsstorage .view");
        console.log(js);

        document.getElementById("htmlminus").addEventListener('click', htmlMinus);
        document.getElementById("htmlplus").addEventListener('click', htmlPlus);
        document.getElementById("cssminus").addEventListener('click', cssMinus);
        document.getElementById("cssplus").addEventListener('click', cssPlus);
        document.getElementById("jsminus").addEventListener('click', jsMinus);
        document.getElementById("jsplus").addEventListener('click', jsPlus);

        function htmlMinus() {
            if (i - 1 < 0) {
                i = htmls.length - 1;
            }
            else {
                i--;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
        function htmlPlus() {
            if (i + 1 >= htmls.length) {
                i = 0;
            }
            else {
                i++;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
        function cssMinus() {
            if (i - 1 < 0) {
                i = htmls.length - 1;
            }
            else {
                i--;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
        function cssPlus() {
            if (i + 1 >= htmls.length) {
                i = htmls.length - 1;
            }
            else {
                i++;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
        function jsMinus() {
            if (i - 1 < 0) {
                i = htmls.length - 1;
            }
            else {
                i--;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
        function jsPlus() {
            if (i + 1 >= htmls.length) {
                i = htmls.length - 1;
            }
            else {
                i++;
            }
            html.innerHTML = htmls[i];

            if (i < 4) {
                htmlcategory.innerHTML = `form`;
            } else if (i < 6) {
                htmlcategory.innerHTML = `p`;
            }
        }
    },
    updated() {
    },
}
</script>