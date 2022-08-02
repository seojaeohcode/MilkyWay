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
        margin: 0 auto;
        vertical-align: middle;
        color: white;
    }

    .view {
        /* overflow-x: scroll; */
        width: fit-content;
        margin: 0 auto;
        text-align: center;
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
        text-shadow: 2px 2px 2px gray;
    }

    .title>.titleimg>svg:nth-child(1) {
        width: 10vw;
        fill: white;
        vertical-align: middle;
    }

    .category {
        text-align: center;
        font-size: 8vw;
        text-shadow: 2px 2px 2px black;
    }
}

@media (min-width: 768px) and (max-width:1024px) {}

@media (min-width: 1025px) {}
</style>

<script>
import img1 from "../assets/vueimg/logo.png";
const htmls = [
    // div
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }

        #wrap1 div:last-child {
            margin-bottom: 0;
        }
        
        #wrap1 div{
            padding-right: 1rem;
            padding-left: 1rem;
        }

        @media (min-width:320px)and (max-width:767px) {
            #wrap1 div{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            #wrap1 div{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            #wrap1 div{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </div>
        <div>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </div>
        <div>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </div>
    </div>
</body>

</html>`
    ,
    // p
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }
            
        #wrap1 p:last-child{
                margin-bottom: 0;
                padding-bottom: 3rem;
            }
        
        #wrap1 p{
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (min-width:320px)and (max-width:767px) {
            .font{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            .font{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            .font{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1" class="font">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </p>
        <p>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </p>
        <p>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </p>
    </div>
</body>

</html>`
    ,
    // span
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 90%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }
            
        #wrap1 span:last-child{
                margin-bottom: 0;
                padding-bottom: 3rem;
            }
        
        #wrap1 span{
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (min-width:320px)and (max-width:767px) {
            .font{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            .font{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            .font{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1" class="font">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </span>
        <span>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </span>
        <span>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </span>
    </div>
</body>

</html>`
    ,
    // table
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 90%;
                margin: 0 auto;
                text-align: justify;
                position:relative;
            }
        table{
            color:black;
        }
        table:first-child tr{
            background: #eee;
        }
        table:last-child tr:nth-child(n+2){
            background: #eee;
        }
        #wrap1 table:last-child{
            
        }
        @media (min-width:320px)and (max-width:767px) {
            #wrap1 table:first-child{
            font-size: 4vw;
            }
            
            #wrap1 table:last-child{
            font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
        }

        @media (min-width: 1025px) {
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <table border="1" align = "center" width="150">
            <th>table</th>
            <th>making</th>
            <tr>
                <td>first cell</td>
                <td>second cell</td>
            </tr>
            <tr>
                <td>first cell</td>
                <td>second cell</td>
        </table>

        <table border="1" bordercolor="blue" align = "center" width="150">
            <tr bgcolor="blue" align ="center">
            <p><td colspan = "3" span style="color:white">today income/spending</td></p>
            </tr>
            <tr align = "center" bgcolor="skybule">
            <td>content</td>
            <td>income</td>
            <td>spending</td>
            </tr>
            <tr>
            <td>salary</td>
            <td>1,000,000</td>
            <td></td>
            </tr>
            <tr>
            <td>lunch</td>
            <td></td>
            <td>5,000</td>
            </tr>
            <tr>
            <td>present</td>
            <td></td>
            <td>30,000</td>
            </tr>
            <tr>
            <td rowspan="3" align = "center" bgcolor="skyblue">sum</td>
            <td>income</td>
            <td>spending</td>
            </tr>
            <tr>
            <td>1,000,000</td>
            <td>35,000</td>	
            </tr>
            <tr>
            <td>change</td>
            <td>965,000</td>	
            </tr>
        </table>
    </div>
</body>

</html>`
    ,
    // img
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
            }
        @media (min-width:320px)and (max-width:767px) {
            img{
            width: 60vw;
        }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            img{
            width: 20vw;
        }
        }

        @media (min-width: 1025px) {
            img{
            width: 30vw;
        }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <img src=${img1} alt="Vue!">
    </div>
</body>

</html>`
    ,
    // form
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap {
            width: 100%;
            margin: 0 auto;
        }
        @media (min-width:320px)and (max-width:767px) {
            input{
                width: 50%;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
        }

        @media (min-width: 1025px) {
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap">
        <h1>필수정보</h1>
        <label>이름</label><input type="text" maxlength="4" size="10" placeholder="이름을 입력하세요" autofocus required><br>
        <label>회원등급</label><input type="text" size="10" readonly value="신입회원"><br>
        <label>아이디</label><input type="text" size="20" placeholder="아이디를 입력하세요" required><button>중복확인</button><br>
        <label>비밀번호</label><input type="password" placeholder="숫자포함 10자 비밀번호" size="20" required><br>
        <label>비밀번호확인</label><input type="password" placeholder="다시 한번 비밀번호 입력" size="20" required><br>
        <label>휴대폰 번호</label>
        <select>
            <option>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
        </select>
        - <input type="text" size="6" required> - <input type="text" size="6" required><button>중복확인</button><br>
        <label>이메일</label><input type="text" size="10" required>@<input type="text" size="15" required>
        <select>
            <option>직접입력</option>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
        </select>
        <button>중복확인</button><br>
        <input type="checkbox" checked>정보수신에 동의합니다.<br>
    </div>
</body>

</html>`
    ,
    // iframe
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap {
            width: 100%;
            margin: 0 auto;
        }
        iframe{
            width: 75vw;
            height: 50vw;
        }
        @media (min-width:320px)and (max-width:767px) {
            
        }

        @media (min-width: 768px) and (max-width:1024px) {
            
        }

        @media (min-width: 1025px) {
            
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap">
        <iframe src="https://www.youtube.com/embed/t0Q2otsqC4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</body>

</html>`
];
const csss = [0];
const jss = [0];

export default {
    mounted() {
        let i = 0;
        const htmlcategory = document.querySelector("#htmlstorage .category");
        const html = document.querySelector("#htmlstorage .view");

        htmlcategory.innerHTML = `div vs p vs span(div)`;

        // if (i < 4) {
        //     htmlcategory.innerHTML = `form`;
        // }else if(i < 6){
        //     htmlcategory.innerHTML = `p`;
        // }

        // 애니메이션과 태그카테고리 수정
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
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

            if (i == 0) {
                htmlcategory.innerHTML = `div vs p vs span(div)`;
            } else if (i == 1) {
                htmlcategory.innerHTML = `div vs p vs span(p)`;
            } else if (i == 2) {
                htmlcategory.innerHTML = `div vs p vs span(span)`;
            } else if (i == 3) {
                htmlcategory.innerHTML = `table`;
            } else if (i == 4) {
                htmlcategory.innerHTML = `image`;
            } else if (i == 5) {
                htmlcategory.innerHTML = `form`;
            } else if (i == 6) {
                htmlcategory.innerHTML = `Iframe`;
            }
        }
    },
    updated() {
    },
}
</script>