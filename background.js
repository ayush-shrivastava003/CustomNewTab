var input = document.getElementById("searchbar")
var revert = document.getElementById("revert")
var CSSButton = document.getElementById("confirm")

var stylesheet = `
@font-face {
    font-family: "Roboto Mono Regular";
    src: url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
}

@font-face {
    font-family: "Roboto Mono Thin";
    src: url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400&display=swap");
}

html {
    background-color: black;
}

body {
    font-family: "Roboto Mono Regular";
    color: white;
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
}

h1 {
    text-align: center;
}

h2 {
    text-align: center;
}

#popupContainer {
    position: relative;
    left: 50%;
    transform: translate(-50%, 2000%);
    display: inline-block;
    text-align: center;
}

#popupContent {
    display: none;
    position: absolute;
    background-color: rgb(192, 192, 192);
    text-align: center;
    transform: translate(-25%, -107%);
}

#popupContainer:hover #popupContent {
    display: block;
}

button {
    font-family: "Roboto Mono Regular";
    border-radius: 5px;
    font-size: smaller;
    transition: 0.25s;
    margin: 5px
}

button:hover {
    background-color: rgb(185, 185, 185);
}

#newCSS {
    margin: 10px;
    height: 100px;
}

#mainContent {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#inputContainer {
    text-align: center;
}

#searchbar {
    text-align: center;
    font-family: "Roboto Mono Thin";
    height: 50px;
    width: 250px;
    border-radius: 15px;
}

#socialsContainer {
    text-align: center;
    position: relative;
    left: -15px;
    display: flex;
}

#container1 {
    flex: 1;
    text-align: right;
}

#container2 {
    flex: 1;
    text-align: left;
}

ul li {
    list-style-type: none;
}

a {
    font-family: "Roboto Mono Thin";
    color: white;
    transition: 0.25s;
}

a:hover {
    color: rgb(192, 192, 192);
}

#instagram:hover {color: #C13584}
#twitter:hover {color: #00acee}
#pinterest:hover {color: #E60023}
#twitch:hover {color: #6441a5}
#reddit:hover {color: #FF5700}
#discord:hover {color: #7289DA}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`

input.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        var query = input.value;
        
        if (query != ""){
            chrome.tabs.update(undefined, {url: `https://google.com/search?q=${query}`})
        }
    }
})

revert.addEventListener("click", () => {
    var style = document.getElementsByTagName("style")[0]
    style.innerHTML = stylesheet
    document.getElementById("newCSS").placeholder = "enter new css"
})

CSSButton.addEventListener("click", () => {
    var CSSInput = document.getElementById("newCSS")
    CSSInput.placeholder = "enter new css"
    var newCSS = CSSInput.value
        if (newCSS != "") {
            var style = document.getElementsByTagName("style")[0]
            style.innerHTML = CSSInput.value;
        }

        else {
            CSSInput.placeholder = "cannot convert to blank css"
        }
    })