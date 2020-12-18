var darkmodestate = true;
var togglemodal = false;
var accenttheme = `rgb(45, 140, 255)`;
var backgroundcolor = `#1b1b1b`;
var colortheme = `#fff`;
var secondarytheme = `#373737`;
var debugmode = false;
var buttontext;
var postimage;
var extracss;

function savesettings() {
    var newaccenttheme = document.querySelector("#dark-mode-accent-theme").value;
    var newbuttontext = document.querySelector("#dark-mode-button-text").value;
    var newpostimage = document.querySelector("#dark-mode-post-image").value;
    var newbackgroundcolor = document.querySelector("#dark-mode-background-color").value;
    var extracss = document.querySelector("#dark-mode-extra-css").value;
    var newsecondarytheme = document.querySelector("#dark-mode-secondary-theme").value;
    var newcolortheme = document.querySelector("#dark-mode-color-theme").value;
    if (newaccenttheme) {
        browser.storage.local.set({ "zoom-accenttheme": newaccenttheme === "*" ? `#373737` : newaccenttheme })
    }
    if (newcolortheme) {
        browser.storage.local.set({ "zoom-colortheme": newcolortheme === "*" ? `#fff` : newcolortheme })
    }
    if (newbuttontext) {
        browser.storage.local.set({ "zoom-buttontext": newbuttontext === "*" ? "" : newbuttontext })
    }
    if (newpostimage) {
        browser.storage.local.set({ "zoom-postimage": newpostimage === "*" ? "" : newpostimage })
    }
    if (newsecondarytheme) {
        browser.storage.local.set({ "zoom-secondarytheme": newsecondarytheme === "*" ? `#373737` : newsecondarytheme })
    }
    if (newbackgroundcolor) {
        browser.storage.local.set({ "zoom-backgroundcolor": newbackgroundcolor === "*" ? `#1b1b1b` : newbackgroundcolor })
    }
    if (extracss) {
        browser.storage.local.set({ "zoom-extracss": extracss === "*" ? "" : extracss })
    }
    document.querySelector("#dark-mode-message").innerHTML = "settings saved. refresh to see changes."
}

var curtain = document.createElement("div");
curtain.id = "dark-mode-curtain"

var shade = document.createElement("div");
shade.id = "dark-mode-shade";
shade.onclick = function () {
    document.querySelector("#dark-mode-curtain").style.display = "none";
    togglemodal = false;
}

var modal = document.createElement("div");
modal.id = "dark-mode-modal";
modal.innerHTML = `
<div id="dark-mode-settings">
<h2 id="dark-mode-title">dark mode settings</h2>
<p>created with <3 by <a href="https://github.com/waymondrang">raymond wang</a></p>
</div>
`;

var field = document.createElement("div");
field.id = "dark-mode-field";
field.innerHTML = `
<p>
please include the # if you are using hex values. to restore default value for any category, use *. to remove post-meeting zoom image, use **.
</p>
<input autocomplete="false" placeholder="accent theme" class="dark-mode-input" id="dark-mode-accent-theme"></input>
<input autocomplete="false" placeholder="color theme" class="dark-mode-input" id="dark-mode-color-theme"></input>
<input autocomplete="false" placeholder="secondary theme" class="dark-mode-input" id="dark-mode-secondary-theme"></input>
<input autocomplete="false" placeholder="button text" class="dark-mode-input" id="dark-mode-button-text"></input>
<input autocomplete="false" placeholder="post-meeting image" class="dark-mode-input" id="dark-mode-post-image"></input>
<input autocomplete="false" placeholder="override background color" class="dark-mode-input" id="dark-mode-background-color"></input>
<textarea autocomplete="false" placeholder="custom™ styling" class="dark-mode-input" id="dark-mode-extra-css"></textarea>
<p id="dark-mode-message"></p>
`

var button = document.createElement("button");
button.id = "dark-mode-save";
button.onclick = savesettings;
button.innerHTML = "save settings 🎄";
button.className = "dark-mode-input dark-mode-button";

var refresh = document.createElement("button");
refresh.id = "dark-mode-refresh";
refresh.onclick = function () {
    location.reload()
};
refresh.innerHTML = "refresh page 🥶";
refresh.className = "dark-mode-input dark-mode-button";

var closebutton = document.createElement("button");
closebutton.id = "dark-mode-close";
closebutton.onclick = function () {
    document.querySelector("#dark-mode-curtain").style.display = "none";
    togglemodal = false;
};
closebutton.innerHTML = "close 🎅";
closebutton.className = "dark-mode-input dark-mode-button";

var togglebutton = document.createElement("button");
togglebutton.id = "dark-mode-switch";
togglebutton.innerHTML = "🌞"
togglebutton.onclick = function () {
    if (darkmodestate) {
        document.querySelector("#dark-mode-style").remove()
        document.querySelector("#dark-mode-switch").innerHTML = "🌚"
        darkmodestate = false
        browser.storage.local.set({ "zoom-darkmode": false })
    } else {
        insertstyle(accenttheme, postimage, backgroundcolor, extracss, colortheme, secondarytheme)
        document.querySelector("#dark-mode-switch").innerHTML = "🌞"
        darkmodestate = true
        browser.storage.local.set({ "zoom-darkmode": true })
    }
}

var buttondiv = document.createElement("div")
buttondiv.id = "dark-mode-buttons"

buttondiv.insertBefore(closebutton, buttondiv.firstChild)
buttondiv.insertBefore(refresh, buttondiv.firstChild)
buttondiv.insertBefore(button, buttondiv.firstChild)

curtain.style.display = "none";
field.insertBefore(buttondiv, field.lastChild)

modal.insertBefore(field, curtain.lastChild)

curtain.insertBefore(modal, curtain.lastChild)
curtain.insertBefore(shade, curtain.firstChild)

var defaultstyle = document.createElement("style")
defaultstyle.innerHTML = `
* {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#dark-mode-switch {
    position: fixed;
    left: 68px;
    bottom: 24px;
    border: .0625rem solid #3737371a;
    border-radius: 500px;
    background-color: #2121211a;
    color: #cecece;
    padding: 2px 8px;
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
#modal-toggle-button {
    position: fixed;
    left: 24px;
    bottom: 24px;
    border: .0625rem solid #3737371a;
    border-radius: 500px;
    background-color: #2121211a;
    color: #cecece;
    padding: 2px 8px;
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
#dark-mode-switch:hover, #modal-toggle-button:hover {
    background-color: #2a2a2a;
}
#dark-mode-curtain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000000000;
    display: flex;
    align-items: center;
    justify-content: center;
}
#dark-mode-shade {
    position: absolute;
    z-index: 2500000000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b1b1bda;
    backdrop-filter: blur(4px);
}
#dark-mode-modal {
    position: relative;
    background-color: #212121;
    z-index: 3000000000;
    color: #fff;
    border-radius: 6px;
    border: .0625rem solid #373737;
    max-width: 480px;
}
.dark-mode-input {
    margin: 6px 0;
    padding: 4px 8px;
    border-radius: 6px;
    border: none;
    background-color: #3737375a;
    color: #fff;
    border: .0625rem solid #373737;
}
.dark-mode-input:hover {
    background-color: #424242;
}
#dark-mode-save {
    border: .0625rem solid #558b2f;
}
#dark-mode-close {
    border: .0625rem solid #c62828;
}
#dark-mode-refresh {
    border: .0625rem solid #0277bd;
}
#dark-mode-settings {
    margin: 0;
    padding: 12px 24px;
    border-bottom: .0625rem solid #373737;
}
#dark-mode-settings p {
    margin: 0;
    font-size: 14px;
    font-weight: normal;
}
#dark-mode-title {
    font-weight: normal;
    color: #fff;
    font-size: 32px;
    margin: 4px 0;
}
#dark-mode-field {
    padding: 6px 24px 12px 24px;
    display: flex;
    flex-direction: column;
}
#dark-mode-field p {
    margin: 4px 0;
    font-size: 12px;
    color: #bdbdbd;
    word-break: break-word;
}
#dark-mode-message {
    margin: 4px 0;
    font-size: 12px;
    color: #fff;
}
.dark-mode-button {
    margin-right: 8px;
    background-color: #373737;
    color: #fff;
    padding: 2px 8px;
    border-radius: 500px;
}
#zoom-logo-replace {
    height: 25px;
    outline: none;
    border: 0;
    width: auto;
    margin-left: 24px;
    margin-right: 20px;
    vertical-align: middle;
    left: 0;
}
#dark-mode-extra-css {
    resize: vertical;
}
`
function insertstyle(accent, post, bgcolor, extra, color, secondary) {
    var style = document.createElement("style")
    style.innerHTML = `
    html, body, ._38WwFC_g, .launch-section, .join-frame #footer_container, .join-frame #content_container {
        color: ${color};
        background-color: ${bgcolor} !important;
    }
    *:not(body, html) {
        z-index: 99;
    }
    ._1doXW0tM h1, ._1doXW0tM h2, ._1doXW0tM h3, .drop-down_option_3yxt_, #rotate-content .title, #rotate-content .new-title, #rotate-content .new-desc {
        color: ${color};
    }
    ._1doXW0tM hr, .drop-down_option_3yxt_:hover, .drop-down_optionActive_HJQSa {
        background-color: ${secondary};
    }
    .drop-down_options_o5gTq, .dropdown-language .dropdown-menu, .dropdown-currency .dropdown-menu {
        background-color: #212121;
        color: ${color};
        border: .0625rem solid ${secondary};
    }
    #footer_container, #footer_container a {
        color: ${secondary};
    }
    #header_container {
        transition: none;
        background-color: transparent;
        backdrop-filter: blur(4px);
    }
    a, ._1doXW0tM a, .join-frame #header_container .action-btns a {
        color: ${accent} !important;
    }
    .header-logo, circle {
        fill: ${accent} !important;
    }
    ._1FvRrPS6:active, ._1FvRrPS6:hover, ._1FvRrPS6:active, ._1FvRrPS6:hover, ._1FvRrPS6, .ada-embed-button-container .ada-embed-button, ._2djRjYUu:before, .btn-checkout, .btn-checkout:hover, .btn-checkout:active, .btn-checkout:focus {
        background-color: ${accent} !important;
    }
    .btn-checkout, .btn-checkout:hover, .btn-checkout:active, .btn-checkout:focus {
        border: none !important;
        border-color: transparent !important;
        text-shadow: none;
    }
    ._2djRjYUu {
        background: conic-gradient(${bgcolor} 2%,${accent});
    }
    ._1wN0sWdc {
        background-color: ${bgcolor};
    }
    .dropdown-language .dropdown-menu:after, .dropdown-currency .dropdown-menu:after, div.dropdown-language .dropdown-menu:after, div.dropdown-currency .dropdown-menu:after {
        display: none !important;
    }
    .join-frame #footer_container p, .join-frame #footer_container p a {
        color: ${secondary};
        font-size: 14px;
        font-weight: 300;
    }
    ${post ? post === "**" ?
            `.default-zoom {
        display: none;
    }`
            :
            `.default-zoom {
        display: none;
    }
    .default-zoom.zoom-post-image {
        display: inherit;
        padding: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    #rotate-content {
        max-width: 650px;
        text-align: center;
        margin: 0 auto;
        margin-top: 60px;
        padding-top: 0;
        overflow: hidden;
        border-radius: 6px;
    }` : ""}
    img {
        border-radius: 6px;
    }
    .launch-section {
        box-shadow: none;
    }
    #footer_container {
        display: none;
    }
    #background-blur-curtain {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        z-index: 1;
    }
    #background-blur-image {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: 0.1;
    }
    div#launch_rotate {
        z-index: 999;
        background-color: transparent !important;
    }
    ${extra}
    `
    style.id = "dark-mode-style";
    document.body.insertBefore(style, document.body.lastChild)
}

var modalbutton = document.createElement("button");
modalbutton.id = "modal-toggle-button"
modalbutton.innerHTML = "⚙️"
modalbutton.onclick = function () {
    if (togglemodal) {
        document.querySelector("#dark-mode-curtain").style.display = "none";
        togglemodal = false;
    } else {
        document.querySelector("#dark-mode-curtain").style.display = "flex";
        togglemodal = true;
    }
}

browser.storage.local.get(["zoom-darkmode", "zoom-accenttheme", "zoom-buttontext", "zoom-postimage", "zoom-backgroundcolor", "zoom-extracss", "zoom-colortheme", "zoom-secondarytheme"], function (result) {
    if (result && result["zoom-accenttheme"]) {
        accenttheme = result["zoom-accenttheme"]
    }
    if (result && result["zoom-buttontext"]) {
        buttontext = result["zoom-buttontext"]
    }
    if (result && result["zoom-postimage"]) {
        postimage = result["zoom-postimage"]
    }
    if (result && result["zoom-backgroundcolor"]) {
        backgroundcolor = result["zoom-backgroundcolor"]
    }
    if (result && result["zoom-extracss"]) {
        extracss = result["zoom-extracss"]
    }
    if (result && result["zoom-colortheme"]) {
        colortheme = result["zoom-colortheme"]
    }
    if (result && result["zoom-secondarytheme"]) {
        secondarytheme = result["zoom-secondarytheme"]
    }
    if (!result["zoom-darkmode"]) {
        darkmodestate = false;
        togglebutton.innerHTML = "🌚"
    } else {
        insertstyle(accenttheme, postimage, backgroundcolor, extracss, colortheme, secondarytheme)
    }
    if (buttontext) {
        var buttonobserver = new MutationObserver(function (mutations, me) {
            var element = document.querySelector("._13FZYIXU._2lLZo0ll > ._1FvRrPS6");
            if (element) {
                element.innerHTML = buttontext;
                me.disconnect(); //STOP OBSERVING
                return;
            }
        });

        //START OBSERVING
        buttonobserver.observe(document, {
            childList: true,
            subtree: true
        });
    }
    if (postimage && postimage !== "**") {
        document.querySelector(".default-zoom").className += " zoom-post-image"
        document.querySelector(".default-zoom").src = postimage;
        var imagebackground = document.createElement("div");
        imagebackground.className = "background-image";
        imagebackground.innerHTML = `
        <div id="background-blur-curtain"></div>
        <img id="background-blur-image" src="${postimage}" alt="Zoom"></img>
        `
        document.body.insertBefore(imagebackground, document.body.lastChild)
    }
})

//DECLARED ON TOP
document.body.insertBefore(togglebutton, document.body.lastChild)
document.body.insertBefore(defaultstyle, document.body.lastChild)
document.body.insertBefore(curtain, document.body.lastChild)
document.body.insertBefore(modalbutton, document.body.firstChild)

var buttonobserver = new MutationObserver(function (mutations, me) {
    var element = document.querySelector("a.imglink");
    if (element) {
        element.innerHTML = `<svg width="115" height="25" viewBox="0 0 90 20" fill="#2D8CFF" class="header-logo" id="zoom-logo-replace" style="width: 115px !important;"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1691 17.0711C40.0314 13.1658 40.0314 6.83418 36.1691 2.92895C34.2395 0.97793 31.711 0.00161441 29.1694 0C26.6404 0.00161441 24.1119 0.97793 22.1824 2.92895C18.32 6.83418 18.32 13.1658 22.1824 17.0711C26.0447 20.9763 32.3068 20.9763 36.1691 17.0711ZM33.3717 14.2425C35.6891 11.8993 35.6891 8.10037 33.3717 5.75722C31.0543 3.41406 27.2971 3.41406 24.9797 5.75722C22.6623 8.10037 22.6623 11.8993 24.9797 14.2425C27.2971 16.5856 31.0543 16.5856 33.3717 14.2425ZM57.4327 2.92895C61.2951 6.83418 61.2951 13.1658 57.4327 17.0711C53.5704 20.9763 47.3084 20.9763 43.446 17.0711C39.5837 13.1658 39.5837 6.83418 43.446 2.92895C45.3756 0.97793 47.9041 0.00161441 50.4331 0C52.9747 0.00161441 55.5032 0.97793 57.4327 2.92895ZM54.6354 5.75722C56.9528 8.10037 56.9528 11.8993 54.6354 14.2425C52.318 16.5856 48.5607 16.5856 46.2434 14.2425C43.9259 11.8993 43.9259 8.10037 46.2434 5.75722C48.5607 3.41406 52.318 3.41406 54.6354 5.75722ZM74.1262 8C74.0879 7.24898 73.9816 6.58351 73.6428 5.99375C72.9579 4.80159 71.6813 4 70.2196 4C68.7592 4 67.4837 4.80005 66.7983 5.99029C66.4583 6.58083 66.3547 7.24786 66.313 8L66.2635 9V16L66.2141 17.0004C66.1495 18.6605 64.9483 19.8401 63.2965 19.95L62.3075 20V0C63.2965 0 65.019 0.505638 65.7885 1.37131C67.0527 0.505638 68.5777 0 70.2196 0C72.5827 0 74.7039 1.04751 76.1536 2.70835C77.6034 1.04751 79.7246 0 82.0877 0C86.4574 0 89.9998 3.58172 89.9998 8V9.00903V20L89.0117 19.95C87.3775 19.8542 86.1958 18.644 86.0932 16.999L86.0437 16V8.99893L85.9943 8C85.9551 7.26721 85.8509 6.58767 85.514 5.99912C84.8299 4.804 83.5516 4 82.0877 4C80.629 4 79.3547 4.79826 78.6688 5.98632C78.3273 6.57775 78.2197 7.25832 78.1811 8L78.1317 9V20L77.1436 19.95C75.5118 19.8455 74.3229 18.6344 74.2251 16.999L74.1756 16V9L74.1262 8ZM4.94506 20L3.95604 19.95C2.31347 19.8406 1.13603 18.6476 1.03846 16.9991L0.989011 16L12.8571 4H3.95604L2.96583 3.95C1.34815 3.85556 0.177592 2.62595 0.0494498 0.999056L0 7.42403e-06L14.8352 0.000912409L15.8241 0.0499992C17.4625 0.137543 18.6634 1.34167 18.7418 3.00124L18.7912 4L6.92308 16H15.8242L16.8132 16.05C18.4453 16.1531 19.5984 17.3544 19.7308 19.0009L19.7802 20H4.94506Z"></path></svg>`;
        me.disconnect(); //STOP OBSERVING
        return;
    }
});

//START OBSERVING
buttonobserver.observe(document, {
    childList: true,
    subtree: true
});