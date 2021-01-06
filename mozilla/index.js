//import confetti from "./confetti.js";

var darkmodestate = true;
var togglemodal = false;
var accentcolor = "#ffffff";
var textcolor = "#ffffff";
var warningcolor = "#c5221f";
var successcolor = "#1e8e3e";
var bordercolor = "#373737";
var backgroundcolor = "#1b1b1b";
var secondarybackgroundcolor = "#212121";
var secondarytextcolor = "#9e9e9e";
var hovercolor = "#373737"
var debugmode = false;
var extracss;

//DEBUGGING
if (debugmode) {
    alert(window.location.pathname.split(/\//gm)[window.location.pathname.split(/\//gm).length - 1])
}

var oldHref = document.location.href;

var urlobserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (oldHref != document.location.href) {
            oldHref = document.location.href;
            if (window.location.pathname.split(/\//gm)[window.location.pathname.split(/\//gm).length - 1].toLowerCase() === "details") {
                const confettiscript = document.createElement('script');
                confettiscript.setAttribute("type", "module");
                confettiscript.setAttribute("src", browser.extension.getURL('confetti.js'));
                confettiscript.id = "confetti-script";
                document.body.insertBefore(confettiscript, document.body.lastChild);
            } else {
                var removescript = document.querySelector("#confetti-script");
                if (removescript) {
                    removescript.remove();
                }
            }
        }
    });
});

urlobserver.observe(document.querySelector("body"), {
    childList: true,
    subtree: true
});

//INSERT SCRIPT TAG
const confettisrc = document.createElement("script");
confettisrc.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js";
confettisrc.type = "module";
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(confettisrc, head.lastChild)

const confettiscript = document.createElement('script');
confettiscript.setAttribute("type", "module");
confettiscript.setAttribute("src", browser.extension.getURL('confetti.js'));
confettiscript.id = "confetti-script";
document.body.insertBefore(confettiscript, document.body.lastChild);

function savesettings() {
    var newaccentcolor = document.querySelector("#dark-mode-accent-color").value;
    var newtextcolor = document.querySelector("#dark-mode-text-color").value;
    var newsecondarytextcolor = document.querySelector("#dark-mode-secondary-text-color").value;
    var newwarningcolor = document.querySelector("#dark-mode-warning-color").value;
    var newsuccesscolor = document.querySelector("#dark-mode-success-color").value;
    var newbordercolor = document.querySelector("#dark-mode-border-color").value;
    var newbackgroundcolor = document.querySelector("#dark-mode-background-color").value;
    var newsecondarybackgroundcolor = document.querySelector("#dark-mode-secondary-background-color").value;
    var newhovercolor = document.querySelector("#dark-mode-hover-color").value;
    var extracss = document.querySelector("#dark-mode-extra-css").value;
    if (newaccentcolor) {
        browser.storage.local.set({ "gc-accentcolor": newaccentcolor.trim() === "*" ? "#ffffff" : newaccentcolor })
    }
    if (newtextcolor) {
        browser.storage.local.set({ "gc-textcolor": newtextcolor.trim() === "*" ? "#ffffff" : newtextcolor })
    }
    if (newsecondarytextcolor) {
        browser.storage.local.set({ "gc-secondarytextcolor": newsecondarytextcolor.trim() === "*" ? "#9e9e9e" : newsecondarytextcolor })
    }
    if (newwarningcolor) {
        browser.storage.local.set({ "gc-warningcolor": newwarningcolor.trim() === "*" ? "#c5221f" : newwarningcolor })
    }
    if (newsuccesscolor) {
        browser.storage.local.set({ "gc-successcolor": newsuccesscolor.trim() === "*" ? "#1e8e3e" : newsuccesscolor })
    }
    if (newbordercolor) {
        browser.storage.local.set({ "gc-bordercolor": newbordercolor.trim() === "*" ? "#373737" : newbordercolor })
    }
    if (newbackgroundcolor) {
        browser.storage.local.set({ "gc-backgroundcolor": newbackgroundcolor.trim() === "*" ? "#1b1b1b" : newbackgroundcolor })
    }
    if (newsecondarybackgroundcolor) {
        browser.storage.local.set({ "gc-secondarybackgroundcolor": newsecondarybackgroundcolor.trim() === "*" ? "#212121" : newsecondarybackgroundcolor })
    }
    if (newhovercolor) {
        browser.storage.local.set({ "gc-hovercolor": newhovercolor.trim() === "*" ? "#373737" : newhovercolor })
    }
    if (extracss) {
        browser.storage.local.set({ "gc-extracss": extracss.trim() === "*" ? "" : extracss })
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
use hex values whenever possible (include the #). to restore default value for any category, use *.
</p>
<input autocomplete="false" placeholder="accent color" class="dark-mode-input" id="dark-mode-accent-color"></input>
<input autocomplete="false" placeholder="text color" class="dark-mode-input" id="dark-mode-text-color"></input>
<input autocomplete="false" placeholder="secondary text color" class="dark-mode-input" id="dark-mode-secondary-text-color"></input>
<input autocomplete="false" placeholder="warning color" class="dark-mode-input" id="dark-mode-warning-color"></input>
<input autocomplete="false" placeholder="success color" class="dark-mode-input" id="dark-mode-success-color"></input>
<input autocomplete="false" placeholder="border color" class="dark-mode-input" id="dark-mode-border-color"></input>
<input autocomplete="false" placeholder="background color" class="dark-mode-input" id="dark-mode-background-color"></input>
<input autocomplete="false" placeholder="secondary background color" class="dark-mode-input" id="dark-mode-secondary-background-color"></input>
<input autocomplete="false" placeholder="hover color" class="dark-mode-input" id="dark-mode-hover-color"></input>
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
        browser.storage.local.set({ "gc-darkmode": false })
    } else {
        insertstyle(accentcolor, warningcolor, successcolor, extracss, bordercolor, backgroundcolor, textcolor, secondarybackgroundcolor, secondarytextcolor, hovercolor)
        document.querySelector("#dark-mode-switch").innerHTML = "🌞"
        darkmodestate = true
        browser.storage.local.set({ "gc-darkmode": true })
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
@font-face {
    font-family: "Google Sans";
    src: url('https://fonts.gstatic.com/s/googlesans/v16/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2') format('woff');
}
canvas {
    z-index: 40 !important;
}
#dark-mode-switch {
    position: fixed;
    right: 68px;
    bottom: 24px;
    border: .0625rem solid #3737371a;
    border-radius: 500px;
    background-color: #2121211a;
    color: #cecece;
    padding: 2px 8px;
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
}
#modal-toggle-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    border: .0625rem solid #3737371a;
    border-radius: 500px;
    background-color: #2121211a;
    color: #cecece;
    padding: 2px 8px;
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
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
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
}
.dark-mode-input {
    margin: 6px 0;
    padding: 4px 8px;
    border-radius: 6px;
    border: none;
    background-color: #3737375a;
    color: #fff;
    border: .0625rem solid #373737;
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
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
#dark-mode-settings p, #dark-mode-settings a {
    color: #fff !important;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
}
#dark-mode-title {
    font-weight: normal;
    color: #fff;
    font-size: 32px;
    margin: 12px 0;
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
#dark-mode-extra-css {
    resize: vertical;
}
`
function insertstyle(accent, warning, success, extra, border, bg, text, secondary, secondarytext, hover) {
    var style = document.createElement("style")
    style.innerHTML = `
    body, .LlcfK, .u73Apc {
        color: ${text} !important;
        background-color: ${bg} !important;
        box-shadow: none !important;
    }
    .ETRkCe, nav, .joJglb {
        background: ${bg.split("")[0] === "#" && bg.length === 7 ? `${bg}ee` : bg} !important;
        background-color: ${bg.split("")[0] === "#" && bg.length === 7 ? `${bg}ee` : bg} !important;
    }
    .idtp4e, .Xp0OCe, .hVNH5c .K0NPx, .bFjUmb-Wvd9Cc, .xHPsid .hN1OOc, .uHMk6b, .tWKJ2 {
        border-radius: 6px !important;
    }
    .iobNdf, .mh4Cme, .P47N4e.P47N4e, .vUBwW {
        border-radius: 500px !important;
    }
    .Aopndd, .idtp4e, .zTrXGf, .d4Fe0d, .uQ3ESd, .hgjBDc, .ncFHed, .MHxtic, .ndcsBf, .I7OXgf, .hVNH5c .K0NPx, .AJFihd, .IzVHde, .GWZ7yf, .D3oBEe .qTs5Xc, .TisIWb .kKn9Nc:before, .feojCc {
        background-color: ${secondary} !important;
    }
    .Aopndd, .idtp4e, .d4Fe0d, .lXuxY, .u73Apc, .ncFHed, .oleV8d, .hVNH5c .K0NPx, .AJFihd, .GWZ7yf, .ybOdnf .eU809d {
        border-color: ${border} !important;
        border: .0625rem solid ${border} !important;
    }
    .Yalane {
        background-color: #ffffff1a !important;
    }
    .idtp4e:hover, .UvQypf:hover, .qk0lee:focus:after, .z80M1.FwR7Pc, .MHxtic:hover {
        background-color: ${hover} !important; 
    }
    .s2g3Xd, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .PeGHgb.Q8U8uc .ruTJle+.fETHd, .O9YpHb, .LKqFXc, .SZ0kZe, .P02DYb, .d6CWTd, .kCtYwe, .E5f6Vd {
        border-top: .0625rem solid ${border} !important;
    }
    .WMQb5e .oBSRLe, .ycbm1d {
        border-top: .0625rem solid ${border};
    }
    .ar1wE .eqqrO, .ySjuvd .eqqrO {
        /* LARGER BORDER! */
        border-top: .125rem solid ${border} !important;
    }
    .yoORU, .joJglb, .xPAMbf, .qj5L0, .gKkZCe {
        border-bottom: .0625rem solid ${border} !important;      
    }
    .BOW64, .JwOYEc {
        border-right: .0625rem solid ${border} !important;        
    }
    .QTD2uf, .MHxtic:not(:last-child) {
        border: none !important;
    }
    .tUJKGd:not(:first-child) {
        border-top: none !important;
    }
    .VWtDre .bKJwEd {
        font-weight: normal;
    }
    .K6Ovqd, .asQXV, .NjE5zd, .onkcGd, .onkcGd:visited, .EZrbnd, a, .A6dC2c, .rpo4wf, .O98Lj, .z80M1, .IqJTee, .ksaOtd, .asQXV-FGzYL, .l4V7wb .NPEfkd, .YVvGBb, .sW08rb, .fV9iCe, .JsqLM.F262Ye, input, .Dh6gpc, .Dh6gpc.UxkAGc {
        color: ${text} !important;
    }
    .GWZ7yf, .MHxtic, .QkA63b:not(.RDPZE):hover, .Y5sE8d:not(.RDPZE):hover, .QkA63b:not(.RDPZE).u3bW4e, .Y5sE8d:not(.RDPZE).u3bW4e, .rZXyy.YwNp1, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):hover, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):focus, .lXuxY, .pO6AMc, .PqkECe {
        box-shadow: none !important;
    }
    .Kma9Mb, .lYU7F {
        color: ${warning} !important;
    }
    .EhRlC, .vzcr8 {
        /* GREEN */
        color: ${success} !important;
    }
    .OlXwxf, .MHxtic {
        margin-bottom: 8px !important;
    }
    .MHxtic {
        padding: 1rem 1.5rem !important;
        /* margin-right: 0px !important;
        margin-left: 0 !important; */
        border-radius: 0.5rem !important;
    }
    .LlcfK, .MHxtic, .ETRkCe {
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .u73Apc {
        height: 3.75rem !important;
        padding-top: 0 !important;
    }
    .JPdR6b {
        background: none !important; 
    }
    .udxSmc, .dDKhVc, .sdDCme, .WOPwXe, .tLDEHd, .HZ3kWc, .wZTANe .J1raN, .oBSRLe, .Evt7cb, .Evt7cb:visited, .Lzdwhd-BrZSOd, .UQuaGc, .ppMo6b, .ViCi4, .IMvYId, .IMvYId:visited, .gJk24c, .NMm5M, .gb_qa svg, .gb_Cc svg, .gb_Zc .gb_fe, .gb_Oc .gb_fe, .DwLQSc, .JsqLM.pCcXPe, .JsqLM.N4XV7d {
        /* SECONDARY COLOR */
        color: ${secondarytext} !important;
    }
    .neggzd {
        color: ${secondarytext.split("")[0] === "#" && secondarytext.length === 7 ? `${secondarytext}ee` : secondarytext} !important;
        text-shadow: none !important;
    }
    .gHz6xd {
        margin: .0625rem 1.5625rem 1.5625rem .0625rem;
    }
    .d4Fe0d.s3BYNe, .Xp0OCe, .LlcfK, .Xi8cpb:active .p1KYTc, .bFjUmb-Ysl7Fe {
        border-color: transparent !important;
        background-color: transparent !important;
    }
    .R4EiSb, nav, .joJglb {
        backdrop-filter: blur(2px);
    }
    .ETRkCe {
        backdrop-filter: blur(4px);
    }
    .uO32ac, .ypv4re {
        border-bottom: none !important;
        margin-bottom: 12px !important;
        border-radius: 6px !important;
    }
    .joJglb.kLHn3 {
        background-color: ${bg.split("")[0] === "#" && bg.length === 7 ? `${bg}be` : bg} !important;
        backdrop-filter: blur(4px);
    }
    .MbhUzd {
        background-image: none !important;
    }

    /* THEMATIC COLORS */

    .eumXzf:after, .tgNIJf-Wvd9Cc:focus, .ndcsBf.cjzpkc-Wvd9Cc, .AeAAkf:not(.RDPZE):hover, .AeAAkf:not(.RDPZE).u3bW4e, .BEAGS:not(.RDPZE):hover, .BEAGS:not(.RDPZE).u3bW4e, .AeAAkf {
        border-color: ${accent} !important;
    }
    .OZ6W0d:not(.RDPZE), .wwnMtb:not(.RDPZE), .DqwBN:not(.RDPZE), .l3F1ye:not(.RDPZE), .BEAGS:not(.RDPZE), .AeAAkf:not(.RDPZE), .DPvwYc, .HyS0Qd input:not([disabled]):focus ~ .snByac, .D3oBEe input:not([disabled]):focus ~ .snByac, .u3bW4e .snByac {
        color: ${accent} !important;
    }
    .OZ6W0d:not(.RDPZE), .wwnMtb:not(.RDPZE) {
        fill: ${accent} !important;
    }
    .ybOdnf:not(.iWO5td) .LMgvRb.KKjvXb, .ybOdnf:not(.RDPZE).iWO5td, .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .ncFHed .MocG8c.KKjvXb, .bFjUmb-Wvd9Cc, .bFjUmb-Wvd9Cc, .CNpREd.bFjUmb-Wvd9Cc, .CNpREd .bFjUmb-Wvd9Cc, .DShyMc-AaTFfe .Xi8cpb.qs41qe .LlcfK, .Xi8cpb:hover .LlcfK, .UISY8d-Ysl7Fe:hover, .MymH0d:hover .UISY8d-Ysl7Fe, .MymH0d:hover .UISY8d-Ysl7Fe {
        background-color: ${accent.split("")[0] === "#" && accent.length === 7 ? `${accent}1a` : accent} !important; 
    }
    .tfGBod.tfGBod:not(.xp2dJ), .tfGBod.xp2dJ .jWCzBe, .tfGBod.xp2dJ .iobNdf {
        background-color: transparent !important;
    }
    .BEAGS {
        border: .0625rem solid ${accent.split("")[0] === "#" && accent.length === 7 ? `${accent}5a` : accent} !important; 
    }
    .QkA63b:not(.RDPZE), .Y5sE8d:not(.RDPZE), .AeAAkf:not(.RDPZE) .CeoRYc, .BEAGS:not(.RDPZE) .CeoRYc, .l3F1ye:not(.RDPZE) .CeoRYc, .DqwBN:not(.RDPZE) .CeoRYc {
        background-color: ${accent.split("")[0] === "#" && accent.length === 7 ? `${accent}6a` : accent} !important; 
    }
    .G1kKid, .bNpzdf, .HyS0Qd:not(.RDPZE) .cXrdqd, .fWf7qe:not(.RDPZE) .cXrdqd, .vnnr5e:not(.RDPZE) .cXrdqd, .JsqLM.F262Ye {
        background-color: ${accent} !important; 
    }
    .bFjUmb-Wvd9Cc.COMMENT {
        /* WILL OVERWRITE ALL BUBBLES */
        background-color: ${accent} !important;    
    }
    .GcVcmc .RdyDwe, .j2Z1yb {
        color: ${text} !important;
        fill: ${text} !important;
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
        browser.storage.local.get(["gc-extracss"], function (result) {
            if (result && result["gc-extracss"]) {
                document.querySelector("#dark-mode-extra-css").value = result["gc-extracss"];
            }
        })
        togglemodal = true;
    }
}

browser.storage.local.get(["gc-darkmode", "gc-accentcolor", "gc-warningcolor", "gc-successcolor", "gc-extracss", "gc-bordercolor", "gc-backgroundcolor", "gc-textcolor", "gc-secondarybackgroundcolor", "gc-secondarytextcolor", "gc-hovercolor"], function (result) {
    if (result && result["gc-accentcolor"]) {
        accentcolor = result["gc-accentcolor"]
    }
    if (result && result["gc-textcolor"]) {
        textcolor = result["gc-textcolor"]
    }
    if (result && result["gc-secondarytextcolor"]) {
        secondarytextcolor = result["gc-secondarytextcolor"]
    }
    if (result && result["gc-warningcolor"]) {
        warningcolor = result["gc-warningcolor"]
    }
    if (result && result["gc-successcolor"]) {
        successcolor = result["gc-successcolor"]
    }
    if (result && result["gc-extracss"]) {
        extracss = result["gc-extracss"]
    }
    if (result && result["gc-bordercolor"]) {
        bordercolor = result["gc-bordercolor"]
    }
    if (result && result["gc-backgroundcolor"]) {
        backgroundcolor = result["gc-backgroundcolor"]
    }
    if (result && result["gc-hovercolor"]) {
        hovercolor = result["gc-hovercolor"]
    }
    if (result && result["gc-secondarybackgroundcolor"]) {
        secondarybackgroundcolor = result["gc-secondarybackgroundcolor"]
    }
    if (!result["gc-darkmode"]) {
        darkmodestate = false;
        togglebutton.innerHTML = "🌚"
    } else {
        insertstyle(accentcolor, warningcolor, successcolor, extracss, bordercolor, backgroundcolor, textcolor, secondarybackgroundcolor, secondarytextcolor, hovercolor)
    }
})

//DECLARED ON TOP
document.body.insertBefore(togglebutton, document.body.lastChild)
document.body.insertBefore(defaultstyle, document.body.lastChild)
document.body.insertBefore(curtain, document.body.lastChild)
document.body.insertBefore(modalbutton, document.body.firstChild)