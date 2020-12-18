
var darkmodestate = true;
var togglemodal = false;
var bordertheme = `#373737`;
var shadetheme = `#212121`;
var colortheme = `#fff`;
var debugmode = false;
var extracss;

// DEBUGGING
if (debugmode) {
    browser.storage.local.set({ greetingemoji: "" })
}

function savesettings() {
    var newbordertheme = document.querySelector("#dark-mode-border-theme").value;
    var newshadetheme = document.querySelector("#dark-mode-shade-theme").value;
    var newcolortheme = document.querySelector("#dark-mode-color-theme").value;
    var newgreetingemoji = document.querySelector("#dark-mode-greeting-emoji").value;
    var newstudentimage = document.querySelector("#dark-mode-student-image").value;
    var extracss = document.querySelector("#dark-mode-extra-css").value;
    if (newbordertheme) {
        browser.storage.local.set({ bordertheme: newbordertheme === "*" ? `#373737` : newbordertheme })
    }
    if (newshadetheme) {
        browser.storage.local.set({ shadetheme: newshadetheme === "*" ? `#212121` : newshadetheme })
    }
    if (newcolortheme) {
        browser.storage.local.set({ colortheme: newcolortheme === "*" ? `#fff` : newcolortheme })
    }
    if (newgreetingemoji) {
        browser.storage.local.set({ greetingemoji: newgreetingemoji === "*" ? "" : newgreetingemoji })
    }
    if (newstudentimage) {
        browser.storage.local.set({ studentimage: newstudentimage === "*" ? "" : newstudentimage })
    }
    if (extracss) {
        browser.storage.local.set({ extracss: extracss === "*" ? "" : extracss })
    }
    document.querySelector("#dark-mode-message").innerHTML = "settings saved. refresh to see changes."
}

var curtain = document.createElement("div");
curtain.id = "dark-mode-curtain"

var shade = document.createElement("div");
shade.id = "dark-mode-shade";
shade.onclick = function() {
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
please include the # if you are using hex values. to restore default value for any category, use *.
</p>
<input autocomplete="false" placeholder="border theme" class="dark-mode-input" id="dark-mode-border-theme"></input>
<input autocomplete="false" placeholder="shade theme" class="dark-mode-input" id="dark-mode-shade-theme"></input>
<input autocomplete="false" placeholder="color theme" class="dark-mode-input" id="dark-mode-color-theme"></input>
<input autocomplete="false" placeholder="emoji 💖🤠🐳" class="dark-mode-input" id="dark-mode-greeting-emoji"></input>
<input autocomplete="false" placeholder="replace student image" class="dark-mode-input" id="dark-mode-student-image"></input>
<textarea autocomplete="false" placeholder="custom+™ styling" class="dark-mode-input" id="dark-mode-extra-css"></textarea>
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

var buttondiv = document.createElement("div")
buttondiv.id = "dark-mode-buttons"

buttondiv.insertBefore(closebutton, buttondiv.lastChild)
buttondiv.insertBefore(refresh, buttondiv.firstChild)
buttondiv.insertBefore(button, buttondiv.firstChild)

curtain.style.display = "none";
field.insertBefore(buttondiv, field.lastChild)

modal.insertBefore(field, curtain.lastChild)

curtain.insertBefore(modal, curtain.lastChild)
curtain.insertBefore(shade, curtain.firstChild)


function insertstyle(theme, shade, color, extracss) {
    var style = document.createElement("style")
    style.innerHTML = `
body, nav {
    color: ${color};
    background-color: #1b1b1b !important;
    font-family: 'Google Sans', arial, helvetica, sans-serif;
}
#LoginSVUE {
    margin: 24px auto;
    width: fit-content;
}
.equal, .equal > div[class*='col-'] {
    margin-top: 48px;
}
*, .dx-widget, .dx-widget input, .dx-widget textarea {
    font-family: 'Google Sans', arial, helvetica, sans-serif;
}
.panel-default>.panel-heading, .pxp-student-summary h2, .dx-menu-item {
    color: ${color};
    margin-bottom: 12px;
}
.panel-default>.panel-heading, .panel-default > .panel-heading, .panel-default > .panel-footer, .panel-body, .pxp-student-summary, .pxp-student-header, #Greeting, .pxp-navbar a, .dx-list.dx-list-select-decorator-enabled .dx-list-item.dx-state-hover .dx-radiobutton-icon:before, .dx-list.dx-list-select-decorator-enabled .dx-list-item.dx-state-hover .dx-checkbox-icon, .dx-checkbox-icon {
    background-color: ${shade};
    border-radius: 6px;
    border: .0625rem solid ${theme};
    box-shadow: none;
}
.table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    background-color: ${shade};
    margin: 12px 0;
    border-radius: 6px;
    border: none;
    box-shadow: none; 
    padding: 8px;
}
.panel, .btn, .dx-context-menu-container-border {
    border: none;
    box-shadow: none;
}
body h1, .form-control, .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary, #maincontent, .pxp-student-summary .student h2, #mainnav > .pxp-left-nav .list-group-item:last-of-type, #mainnav > .pxp-left-nav a.list-group-item:last-of-type, sm-root .button-bar, sm-compose .button-bar, sm-dialog .button-bar, sm-edit-folder .button-bar, sm-edit-signature .button-bar, sm-read-status .button-bar, sm-settings .button-bar, sm-add-recipient .button-bar, sm-recurrence .button-bar, .sm-app .button-bar, #maincontent .breadcrumb-bottom, .modal-header, .table-bordered, .pxp-summary-chart .bar-container, .popover-title {
    border: none;
}
.panel-default > .panel-heading, .panel-default > .panel-footer, label, .dx-datagrid-summary-item {
    font-weight: normal;
}
.form-control, .form-control:focus, .btn:active, .btn.active {
    box-shadow: none;
}
.form-control, input:-internal-autofill-selected {
    background-color: #1b1b1b !important;
}
.panel-footer {
    padding: 8px 15px !important;
}
footer, .student-info .student-id, hr, .form-horizontal .control-label:not(.col-md-1), .teacher-room, .teacher, #BindingRoot, #DistrictName, .login-more, .popover.top>.arrow, #gradebook-content > div > div > span > img  {
    display: none;
}
.panel-default > .panel-heading {
    text-align: left;
    font-size: 2.2em;
}
.form-horizontal .control-label {
    text-align: left;
    font-weight: normal;
}
.panel-heading {
    padding: 12px 15px;
}
.panel, #maincontent, .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td, .dx-context-menu-content-delimiter, .dx-datagrid-filter-row .dx-menu-item-has-submenu.dx-menu-item-expanded.dx-state-hover, .dx-menu .dx-menu-item-expanded, .dx-menu-item-expanded, .dx-dropdowneditor.dx-state-hover:not(.dx-custom-button-hovered) .dx-dropdowneditor-icon, .dx-dropdowneditor.dx-state-active .dx-dropdowneditor-icon {
    background-color: transparent;
}
.panel-footer .languages, .panel-footer a, .pxp-student-summary .student > .info {
    font-size: 14px;
    color: #6d6d6d;
}
.pxp-student-header .student-info {
    display: flex;
    align-items: center;
}
.pxp-student-header, #Greeting {
    padding: 6px 12px;
}
.pxp-navbar > li:not(:last-child) {
    margin-right: 4px;
}
.pxp-navbar-container {
    right: 0;
}
.pxp-navbar, .pxp-student-header {
    margin-top: 8px;
}
.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {
    background-color: #4242425a;
}
.student-info h2, *[data-action]:not([disabled]) {
    font-family: 'Google Sans', arial, helvetica, sans-serif;
    font-size: 14px;
    border: none;
}
.student-info > .student-photo {
    margin: 0 12px 0 0;
    height: 100%;
}
.student-info {
    font-size: 12px;
}
.pxp-student-summary .student ul, .pxp-student-summary .student h2, .pxp-panel {
    padding: 0;
}
.pxp-student-summary .student ul > li > a {
    border: none;
    background-color: transparent;
    margin: 12px 0;
    border-radius: 6px;
    border: .0625rem solid ${theme};
    box-shadow: none;
    padding: 8px 12px;
    width: fit-content;
    max-width: 80%;
}
.pxp-student-summary .student ul > li > a > img {
    border-radius: 8px;
    background-color: #373737;
}
.pxp-student-summary .student {
    padding: 0 24px;
}
#mainnav > .pxp-left-nav .list-group-item, #mainnav > .pxp-left-nav a.list-group-item {
    padding: 4px 10px;
    background-color: ${shade};
    border-radius: 4px;
    border: none;
    color: #efefef;
    margin: 0 4px;
}
.MessageNotificationBox {
    box-shadow: none;
    padding: 2px;
}
#mainnav > .pxp-left-nav .list-group-item:first-child {
    border-radius: 4px;
}
#mainnav > .pxp-left-nav .list-group-item.active, #mainnav > .pxp-left-nav a.list-group-item.active {
    border: none;
}
#mainnav > .pxp-left-nav .list-group-item.active, #mainnav > .pxp-left-nav a.list-group-item.active, #mainnav > .pxp-left-nav .list-group-item.active, #mainnav > .pxp-left-nav .list-group-item.active:hover, #mainnav > .pxp-left-nav .list-group-item.active:focus, #mainnav > .pxp-left-nav a.list-group-item.active, #mainnav > .pxp-left-nav a.list-group-item.active:hover, #mainnav > .pxp-left-nav a.list-group-item.active:focus {
    border-radius: 6px;
}
#mainnav > .pxp-left-nav .list-group-item, #mainnav > .pxp-left-nav a.list-group-item {
    margin: 0 0 8px 0;
}
.pxp-student-summary {
    margin: 0;
}
.pull-right:not(.btn) {
    margin: 0 0 16px 0;
}
.flexbox.padded > *:not(.unpadded) {
    padding: 0 8px 0 0;
}
.btn {
    background-color: ${shade};
    color: ${color};
    border: .0625rem solid ${theme};
}
.btn:hover, .btn:focus {
    background-color: #373737;
    color: ${color};
    border: .0625rem solid ${theme};
}
.dx-datagrid .dx-row-alt > td, .dx-datagrid .dx-row-alt > tr > td, .dx-tab.dx-state-hover {
    background-color: #4242425a;
}
sm-root ul.folder-list li .btn, sm-compose ul.folder-list li .btn, sm-dialog ul.folder-list li .btn, sm-edit-folder ul.folder-list li .btn, sm-edit-signature ul.folder-list li .btn, sm-read-status ul.folder-list li .btn, sm-settings ul.folder-list li .btn, sm-add-recipient ul.folder-list li .btn, sm-recurrence ul.folder-list li .btn, .sm-app ul.folder-list li .btn, sm-root .side-bar, sm-compose .side-bar, sm-dialog .side-bar, sm-edit-folder .side-bar, sm-edit-signature .side-bar, sm-read-status .side-bar, sm-settings .side-bar, sm-add-recipient .side-bar, sm-recurrence .side-bar, .sm-app .side-bar, .dx-datagrid-headers, .dx-datagrid-borders .dx-datagrid-rowsview, .dx-datagrid-headers + .dx-datagrid-rowsview, .dx-dropdowneditor-icon {
    border: none;
}
sm-root ul.folder-list>li, sm-compose ul.folder-list>li, sm-dialog ul.folder-list>li, sm-edit-folder ul.folder-list>li, sm-edit-signature ul.folder-list>li, sm-read-status ul.folder-list>li, sm-settings ul.folder-list>li, sm-add-recipient ul.folder-list>li, sm-recurrence ul.folder-list>li, .sm-app ul.folder-list>li {
    margin: 0 0 8px 0;
}
sm-root ul.folder-list li.folder-selected, sm-compose ul.folder-list li.folder-selected, sm-dialog ul.folder-list li.folder-selected, sm-edit-folder ul.folder-list li.folder-selected, sm-edit-signature ul.folder-list li.folder-selected, sm-read-status ul.folder-list li.folder-selected, sm-settings ul.folder-list li.folder-selected, sm-add-recipient ul.folder-list li.folder-selected, sm-recurrence ul.folder-list li.folder-selected, .sm-app ul.folder-list li.folder-selected, sm-root .folder:hover, sm-compose .folder:hover, sm-dialog .folder:hover, sm-edit-folder .folder:hover, sm-edit-signature .folder:hover, sm-read-status .folder:hover, sm-settings .folder:hover, sm-add-recipient .folder:hover, sm-recurrence .folder:hover, .sm-app .folder:hover {
    background-color: #373737;
    color: ${color};
    border-radius: 6px;
    height: fit-content;
}
sm-root ul.folder-list li.folder-selected .btn .folder-text, sm-compose ul.folder-list li.folder-selected .btn .folder-text, sm-dialog ul.folder-list li.folder-selected .btn .folder-text, sm-edit-folder ul.folder-list li.folder-selected .btn .folder-text, sm-edit-signature ul.folder-list li.folder-selected .btn .folder-text, sm-read-status ul.folder-list li.folder-selected .btn .folder-text, sm-settings ul.folder-list li.folder-selected .btn .folder-text, sm-add-recipient ul.folder-list li.folder-selected .btn .folder-text, sm-recurrence ul.folder-list li.folder-selected .btn .folder-text, .sm-app ul.folder-list li.folder-selected .btn .folder-text {
    font-weight: normal;
}
sm-root ul.folder-list .unread-count, sm-compose ul.folder-list .unread-count, sm-dialog ul.folder-list .unread-count, sm-edit-folder ul.folder-list .unread-count, sm-edit-signature ul.folder-list .unread-count, sm-read-status ul.folder-list .unread-count, sm-settings ul.folder-list .unread-count, sm-add-recipient ul.folder-list .unread-count, sm-recurrence ul.folder-list .unread-count, .sm-app ul.folder-list .unread-count {
    margin: 0;
    padding: 2px 4px;
}
sm-root .main-view, sm-compose .main-view, sm-dialog .main-view, sm-edit-folder .main-view, sm-edit-signature .main-view, sm-read-status .main-view, sm-settings .main-view, sm-add-recipient .main-view, sm-recurrence .main-view, .sm-app .main-view {
    box-shadow: none;
    margin-left: 8px;
}
.dx-gridbase-container {
    background-color: ${shade};
    border-radius: 4px;
    border: .0625rem solid ${theme};
    box-shadow: none;
    color: #f5f5f5;
}
.dx-datagrid-headers {
    color: ${color};
}
.dx-datagrid-pager, .modal-footer {
    border-top: .0625rem solid #373737;
}
.dx-loadpanel-content {
    background-color: #424242;
    border: .0625rem solid ${theme};
}
.dx-datagrid-headers .dx-datagrid-table .dx-row > td, .dx-datagrid-header-panel, sm-root .recipients-header, sm-compose .recipients-header, sm-dialog .recipients-header, sm-edit-folder .recipients-header, sm-edit-signature .recipients-header, sm-read-status .recipients-header, sm-settings .recipients-header, sm-add-recipient .recipients-header, sm-recurrence .recipients-header, .sm-app .recipients-header {
    border-bottom: .0625rem solid #373737;
}
.dx-datagrid .dx-column-lines > td {
    border-left: .0625rem solid #373737;
    border-right: .0625rem solid #373737;
}
.contact-box {
    background-color: #373737;
    border: .0625rem solid ${theme};
    color: #cecece;
}
.col-sm-11 {
    width: fit-content;
    margin: 12px 0 0 0;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    padding: 0;
}
sm-root ul.folder-list li .btn .folder-text, sm-compose ul.folder-list li .btn .folder-text, sm-dialog ul.folder-list li .btn .folder-text, sm-edit-folder ul.folder-list li .btn .folder-text, sm-edit-signature ul.folder-list li .btn .folder-text, sm-read-status ul.folder-list li .btn .folder-text, sm-settings ul.folder-list li .btn .folder-text, sm-add-recipient ul.folder-list li .btn .folder-text, sm-recurrence ul.folder-list li .btn .folder-text, .sm-app ul.folder-list li .btn .folder-text {
    padding-left: 8px;
}
sm-root ul.folder-list>li, sm-compose ul.folder-list>li, sm-dialog ul.folder-list>li, sm-edit-folder ul.folder-list>li, sm-edit-signature ul.folder-list>li, sm-read-status ul.folder-list>li, sm-settings ul.folder-list>li, sm-add-recipient ul.folder-list>li, sm-recurrence ul.folder-list>li, .sm-app ul.folder-list>li {
    border-radius: 4px;
    background-color: ${shade};
}
p {
    word-break: break-word;
}
#mainnav > .pxp-left-nav .list-group-item.active, #mainnav > .pxp-left-nav .list-group-item.active:hover, #mainnav > .pxp-left-nav .list-group-item.active:focus, #mainnav > .pxp-left-nav a.list-group-item.active, #mainnav > .pxp-left-nav a.list-group-item.active:hover, #mainnav > .pxp-left-nav a.list-group-item.active:focus {
    background-color: #373737;
    border: .0625rem solid ${theme};
    color: #cecece;
}
#gb-classes .pres-table.table > div > .gb-class-row:not(.details), #assignment-details > div > h2 {
    background-color: ${shade};
    display: flex;
    padding: 12px;
}
#gb-classes .data-table .course-title {
    border: none;
    background-color: transparent;
    font-weight: normal;
    padding: 0;
    margin: 0;
}
#gb-classes .pres-table.table > div > .gb-class-row:not(.details) > div > div, #gb-classes .pres-table.table > div > .gb-class-row:not(.details) > div {
    margin: auto;
}
.col-sm-4 {
    display: flex;
    align-items: center;
    justify-content: center;
}
#gb-classes .data-table .course-markperiod {
    padding: 0;
    border: none;
}
#gb-classes .pres-table .last-update {
    position: absolute;
    font-size: 12px;
    text-align: center;
    bottom: 8px;
    background-color: #3737375a;
    color: #cecece;
    border-radius: 4px;
    padding: 2px 6px;
}
#gb-classes .data-table .mark, #gb-classes .data-table .score {
    color: ${color};
    font-weight: normal;
}
.gb-class-row:nth-child(n+2) {
    border-top: none;
}
.gb-class-row:nth-child(n+2):not(.details), .dx-datagrid-total-footer {
    border-top: .0625rem solid #424242;
}
#MainDiv > sm-root > div.flexbox.horizontal.auto {
    margin: 12px 0 0 0;
    border-radius: 6px 6px 0 0;
}
#gb-classes .pres-table.table > div > .gb-class-row:not(.gb-class-header):not(.details) {
    border-radius: 0 0 6px 6px;
    border: .0625rem solid ${theme};
    border-top: none;
}
.gb-class-header {
    margin: 12px 0 0 0;
    border-radius: 6px 6px 0 0;
    border: .0625rem solid #424242;
}
#maincontent h2 {
    border-radius: 4px;
    background-color: transparent;
}
h1.title, h2.title, h1 .title, h2 .title {
    color: ${color};
    font-size: inherit;
}
#ctl00_ctl00_MainContent_PXPMainContent_repSchoolClasses_ctl00_ctl00_TermSelector_TermSelector, .flexbox.horizontal > .btn-group, .flexbox.horizontal > * > .btn-group {
    margin: 0;
    display: flex;
    align-items: center;
}
.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle), .btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child) {
    height: fit-content;
    padding: 6px 12px;
    border-radius: 6px;
}
.pxp-student-summary .student > .info {
    font-weight: normal;
}
#ctl00_ctl00_MainContent_PXPMainContent_repSchoolClasses_ctl00_ctl00_SchoolClassesPanel h2 {
    margin: 0;
    padding: 12px;
    border: .0625rem solid ${theme};
    background-color: ${shade};
}
.pxp-student-summary .student-image {
    height: inherit;
    border-radius: 6px;
}
#mainnav > .pxp-left-nav .list-group-item > img + .desc, sm-root h2, sm-root .h2, sm-compose h2, sm-compose .h2, sm-dialog h2, sm-dialog .h2, sm-edit-folder h2, sm-edit-folder .h2, sm-edit-signature h2, sm-edit-signature .h2, sm-read-status h2, sm-read-status .h2, sm-settings h2, sm-settings .h2, sm-add-recipient h2, sm-add-recipient .h2, sm-recurrence h2, sm-recurrence .h2, .sm-app h2, .sm-app .h2 {
    color: ${color};
    background-color: transparent;
    font-weight: normal;
}
.flexbox.padded > *:not(.unpadded), #ctl00_TermSelector_TermSelector {
    margin: 0;
}
.modal-content, sm-root .modal-content-maximized, sm-compose .modal-content-maximized, sm-dialog .modal-content-maximized, sm-edit-folder .modal-content-maximized, sm-edit-signature .modal-content-maximized, sm-read-status .modal-content-maximized, sm-settings .modal-content-maximized, sm-add-recipient .modal-content-maximized, sm-recurrence .modal-content-maximized, .sm-app .modal-content-maximized, .dx-overlay-wrapper, .dx-overlay-wrapper *, .dx-overlay-wrapper:before, .dx-overlay-wrapper:after, .dx-overlay-wrapper *:before, .dx-overlay-wrapper *:after {
    background-color: ${shade};
}
#composeDialogDrag > div > div.modal-header.clearfix.ui-draggable-handle {
    padding: 0 14px;
}
.dropdown-menu {
    background-color: ${shade};
    color: ${color};
}
.dropdown-menu>li>a, sm-root .dropdown-menu>div>li>a, sm-compose .dropdown-menu>div>li>a, sm-dialog .dropdown-menu>div>li>a, sm-edit-folder .dropdown-menu>div>li>a, sm-edit-signature .dropdown-menu>div>li>a, sm-read-status .dropdown-menu>div>li>a, sm-settings .dropdown-menu>div>li>a, sm-add-recipient .dropdown-menu>div>li>a, sm-recurrence .dropdown-menu>div>li>a, .sm-app .dropdown-menu>div>li>a, .dx-datagrid-summary-item, .dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-list-item-selected.dx-state-hover:not(.dx-state-focused), .dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-state-hover, .dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-list-item-selected {
    color: ${color};
}
.dx-loadpanel-message, .dx-list-item, .dx-list .dx-empty-message {
    color: #cecece;
}
#assignment-details > div > div {
    margin: 12px 0;
    padding: 12px;
}
canvas.sparkline {
    padding: 0 24px;
    max-width: 360px;
}
.dx-toolbar {
    background-color: transparent;
    padding: 12px;
}
.dx-texteditor-input, .dx-button-mode-contained {
    background: none;
    background-color: #4242425a;
    border: .0625rem solid ${theme};
    color: ${color};
    font-weight: normal;
}
.dx-texteditor.dx-editor-outlined {
    background: none;
    border: none;
}
.detail-content #current-grade, .dx-popup-wrapper > .dx-overlay-content, .dx-button-mode-contained.dx-state-hover {
    margin: 0;
    background-color: ${shade};
    color: ${color};
    border: .0625rem solid ${theme};
    border-radius: 6px;
}
sm-root #recipientTabs, sm-compose #recipientTabs, sm-dialog #recipientTabs, sm-edit-folder #recipientTabs, sm-edit-signature #recipientTabs, sm-read-status #recipientTabs, sm-settings #recipientTabs, sm-add-recipient #recipientTabs, sm-recurrence #recipientTabs, .sm-app #recipientTabs {
    border-radius: 4px;
}
.dx-tab.dx-tab-selected {
    background-color: #4242425a;
    color: ${color};
}
.dx-tab, .dx-editor-cell .dx-texteditor .dx-texteditor-input {
    background-color: #373737;
    color: ${color};
}
.dx-tabs, sm-root .dx-tab-selected:after, sm-compose .dx-tab-selected:after, sm-dialog .dx-tab-selected:after, sm-edit-folder .dx-tab-selected:after, sm-edit-signature .dx-tab-selected:after, sm-read-status .dx-tab-selected:after, sm-settings .dx-tab-selected:after, sm-add-recipient .dx-tab-selected:after, sm-recurrence .dx-tab-selected:after, .sm-app .dx-tab-selected:after {
    border: .0625rem solid ${theme};
}
#composeAddRecipients > div > div > div.modal-body > sm-recipient-search:nth-child(7) > div.row.margin-top > button {
    height: auto;
    padding: 0 12px !important;
}
sm-root .modal-body .row, sm-compose .modal-body .row, sm-dialog .modal-body .row, sm-edit-folder .modal-body .row, sm-edit-signature .modal-body .row, sm-read-status .modal-body .row, sm-settings .modal-body .row, sm-add-recipient .modal-body .row, sm-recurrence .modal-body .row, .sm-app .modal-body .row {
    display: flex;
}
.dx-datagrid-filter-row .dx-editor-cell .dx-editor-with-menu .dx-texteditor-input, .dx-datagrid-filter-row .dx-editor-cell .dx-editor-with-menu .dx-placeholder:before {
    padding-left: 24px;
    border-radius: 0;
}
.dx-context-menu.dx-overlay-content {
    border-radius: 6px;
    overflow: hidden;
}
.dx-menu-item.dx-state-hover, .dx-menu-item-selected {
    background-color: #4242425a;
    color: ${color};
}
.dx-context-menu .dx-submenu {
    background-color: #373737;
    color: #cecece;
    border: none;
}
.dx-menu-base .dx-menu-item-content {
    padding: 4px;
}
text, sm-root .form-control, sm-compose .form-control, sm-dialog .form-control, sm-edit-folder .form-control, sm-edit-signature .form-control, sm-read-status .form-control, sm-settings .form-control, sm-add-recipient .form-control, sm-recurrence .form-control, .sm-app .form-control {
    font-family: 'Google Sans', arial, helvetica, sans-serif !important;
    color: #fff !important;
    fill: #fff !important;
}
.layout-table, #MainDiv > div.panel.panel-default > h2, #attendance-root > div.att-attendance-data.show-details > div > div.panel.panel-default > h2 {
    margin-bottom: 12px;
}
rect {
    stroke: #373737;
    fill: #373737;
    rx: 6px !important;
}
path {
    stroke: #424242;
}
#ctl00_CategoryWeights > svg > g.dxc-series-group > g:nth-child(2) > g > *, #ctl00_CategoryWeights > svg > g.dxc-legend > g > g > rect:nth-child(3) {
    fill: #212121;
    stroke: #212121;
}
img.loading-spinner {
    display: none;
}
.pxp-summary .details .table > tbody > tr > td, .pxp-summary .details .table > tbody > tr > th {
    border-radius: 0;
}
.pxp-summary > .details {
    border-radius: 6px;
    border: .0625rem solid ${theme};
}
td.totalRowLarge {
    color: inherit;
}
.att-calendar {
    background-color: ${shade};
    border-radius: 6px;
}
#attendance-root tr > td {
    background-color: transparent;
}
.calendar-sm .day[data-action]:hover {
    color: ${color};
}
caption {
    margin: 8px 0;
    font-size: 12px;
    color: ${color};
}
.calendar-sm .month, .calendar-sm .year {
    color: ${color};
}
ul.legend > li > i {
    margin-right: 4px;
}
#MainDiv > h1, #attendance-root > h1 {
    border-radius: 6px;
    background-color: ${shade};
    padding: 12px;
    border: .0625rem solid ${theme};
    margin: 0;
    margin-bottom: 12px;
}
.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {
    margin: 0;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: ${shade};
    border: inherit;
}
#attendance-root > div.term-selector > div > button:nth-child(1) {
    padding: 6px 12px;
}
.dx-dropdowneditor-button.dx-button-mode-outlined, .dx-dropdowneditor-button.dx-button-mode-contained, .dx-dropdowneditor-button.dx-button-mode-text {
    border: none;
}
.calendar-sm .table th, .calendar-sm .table td {
    color: #424242;
}
#attendance-chart-container {
    display: flex;
    border: none;
    margin-bottom: 12px;
}
#attendance-chart-container > div {
    vertical-align: top;
    padding: 10px 20px;
    background-color: ${shade};
    border-radius: 6px;
    border: .0625rem solid ${theme};
}
#attendance-chart-container h2 {
    margin: 14px 0;
    color: ${color};
}
#attendance-by-period > canvas {
    padding: 24px;
    border: .0625rem solid ${theme};
    border-radius: 6px;
    background-color: #4242425a;
}
.pxp-summary-chart .segment {
    border-radius: 4px;
}
.popover {
    background-color: ${shade};
    border-radius: 6px;
    border: .0625rem solid ${theme};
}
.popover-title {
    background-color: #373737;
}
#calendar-legend {
    margin-bottom: 24px;
}
#attendance-root > div.term-selector > div > button:nth-child(2) {
    margin: 0 12px;
    border-radius: 6px;
}
#attendance-by-course {
    margin-right: 24px;
}
.calendar-sm td.today {
    background-color: #ffffff10 !important;
}
.btn-group>.btn+.dropdown-toggle {
    border: none;
    background-color: transparent;
}
.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
    margin: 0;
}
#ctl00_MainContent_LoginMessage {
    margin-bottom: 12px;
}
.panel-footer {
    margin-top: 12px;
}
.pxp-summary-chart .title {
    padding: 6px 6px 6px 0;
}
.dx-datagrid-focus-overlay {
    transition: none !important;
}
#MainDiv > div > div {
    border: none;
    background-color: transparent;
}
table.info_tbl.table.table-bordered {
    margin: 0;
}
#MainDiv > table {
    display: none;
}
.panel-body {
    padding: 8px 12px;
}
.pxp-student-summary .student-image {
    width: 120px;
    height: 160px;
}
.student-info > .student-photo img {
    object-fit: cover;
}
.pxp-student-summary .student-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#MainDiv > sm-root > div.flexbox.horizontal.auto > div.main-view.auto > div > sm-message > div > div.panel-body {
    padding: 8px 12px;
}
.dx-datagrid-header-panel .dx-toolbar {
    margin: 0;
}
${extracss}
`
    style.id = "dark-mode-style";
    document.body.insertBefore(style, document.body.lastChild)
}

var defaultstyle = document.createElement("style")
defaultstyle.innerHTML = `
@font-face {
    font-family: "Google Sans";
    src: url('https://fonts.gstatic.com/s/googlesans/v16/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2') format('woff');
}
@font-face {
    font-family: "Google Sans";
    src: url('https://fonts.gstatic.com/s/googlesans/v16/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2') format('woff');
    font-weight: bold;
}
body {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#dark-mode-switch {
    position: fixed;
    right: 24px;
    bottom: 24px;
    border: .0625rem solid #373737;
    border-radius: 500px;
    background-color: #212121;
    color: #cecece;
    padding: 2px 8px;
    font-family: 'Google Sans', arial, helvetica, sans-serif;       
    z-index: 2500000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
#modal-toggle-button {
    position: fixed;
    left: 24px;
    bottom: 24px;
    border: .0625rem solid #373737;
    border-radius: 500px;
    background-color: #212121;
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
#dark-mode-extra-css {
    resize: vertical;
}
`

var modalbutton = document.createElement("button");
modalbutton.id = "modal-toggle-button"
modalbutton.innerHTML = "⚙️"
modalbutton.onclick = function () {
    if (togglemodal) {
        document.querySelector("#dark-mode-curtain").style.display = "none";
        togglemodal = false;
    } else {
        document.querySelector("#dark-mode-curtain").style.display = "flex";
        browser.storage.local.get(["extracss"], function (result) {
            if (result && result.extracss) {
                document.querySelector("#dark-mode-extra-css").value = result.extracss;
            }
        })
        togglemodal = true;
    }
}

var button = document.createElement("button");
button.id = "dark-mode-switch";
button.innerHTML = "toggle light mode 🌞"
button.onclick = function () {
    if (darkmodestate) {
        document.querySelector("#dark-mode-style").remove()
        document.querySelector("#dark-mode-switch").innerHTML = "toggle dark mode 🌚"
        darkmodestate = false
        browser.storage.local.set({ darkmode: false })
    } else {
        insertstyle(bordertheme, shadetheme, colortheme, extracss)
        document.querySelector("#dark-mode-switch").innerHTML = "toggle light mode 🌞"
        darkmodestate = true
        browser.storage.local.set({ darkmode: true })
    }
}

browser.storage.local.get(["bordertheme", "shadetheme", "colortheme", "darkmode", "greetingemoji", "studentimage", "extracss"], function (result) {
    if (result && result.bordertheme) {
        bordertheme = result.bordertheme
    }
    if (result && result.shadetheme) {
        shadetheme = result.shadetheme
    }
    if (result && result.colortheme) {
        colortheme = result.colortheme
    }
    if (result && result.extracss) {
        extracss = result.extracss
    }
    if (!result.darkmode) {
        darkmodestate = false;
        button.innerHTML = "toggle dark mode 🌚"
    } else {
        insertstyle(bordertheme, shadetheme, colortheme, extracss)
    }
    document.body.insertBefore(defaultstyle, document.body.lastChild)
    document.body.insertBefore(curtain, document.body.lastChild)
    document.body.insertBefore(button, document.body.firstChild)
    document.body.insertBefore(modalbutton, document.body.firstChild)

    if (result && result.greetingemoji) {
        var element = document.querySelector("#Greeting");
        element.innerHTML += ` ${result.greetingemoji}`
    }

    if (result && result.studentimage) {
        var studentimageobserver = new MutationObserver(function (mutations, me) {
            var element = document.querySelector(".student-image > img");
            if (element) {
                element.src = `${result.studentimage}`;
                me.disconnect(); //STOP OBSERVING
                return;
            }
        });

        //START OBSERVING
        studentimageobserver.observe(document, {
            childList: true,
            subtree: true
        });

        var elementphoto = document.querySelector("div.student-info > div.student-photo > img");
        elementphoto.src = `${result.studentimage}`;

    }
})