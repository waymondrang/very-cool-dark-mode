const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;

function insertstyle() {
    var style = document.createElement("style")
    style.innerHTML = `
    @font-face {
        font-family: "Google Sans";
        src: url('https://fonts.gstatic.com/s/googlesans/v16/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2') format('woff');
    }
    * {
        color: #ffffff !important;
        font-family: "Google Sans",'Product Sans',Arial,Helvetica,sans-serif !important;
    }
    a {
        /* BLUE LINKS */
        color: #42a5f5 !important;
    }
    .freebirdFormviewerComponentsQuestionBaseRequiredAsterisk, .hasError .freebirdFormviewerComponentsQuestionTextTextInput .exportUnderline, .hasError .freebirdFormviewerComponentsQuestionTextTextInput .exportFocusUnderline, .freebirdFormviewerViewHeaderRequiredLegend, .m2 .freebirdFormviewerViewHeaderRequiredLegend {
        /* RED COLOR */
        color: #ef5350 !important;
    }
    body {
        background-color: #1b1b1b !important;
    }
    .freebirdFormviewerViewResponseConfirmContentContainer, .freebirdFormviewerViewHeaderHeader, .freebirdFormviewerComponentsQuestionBaseRoot, .freebirdFormviewerViewNavigationNoSubmitButton {
        background-color: #212121 !important;
    }
    .freebirdFormviewerViewResponseConfirmContentContainer, .freebirdFormviewerViewHeaderHeader, .freebirdFormviewerComponentsQuestionBaseRoot, .freebirdFormviewerViewHeaderHeader {
        border: 0.125rem solid #373737 !important;
    }
    .quantumWizTextinputPaperinputUnderline {
        background-color: #373737 !important;
    }
    .freebirdDisclaimerColor, .freebirdDisclaimerColor a {
        color: #9e9e9e !important;
    }
    .freebirdFormviewerViewHeaderEmailAddress, .freebirdFormviewerViewHeaderDisclosure .freebirdFormviewerViewHeaderEmailAddress {
        font-weight: normal;
    }
    `
    style.id = "dark-mode-style";
    head.insertBefore(style, head.lastChild)
}

insertstyle();

var oldHref = document.location.href;

var urlobserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (oldHref != document.location.href) {
            console.log("URL CHANGE DETECTED, REINJECTING.")
            oldHref = document.location.href;
            insertstyle();
        }
    });
});

urlobserver.observe(document.querySelector("body"), {
    childList: true,
    subtree: true
});