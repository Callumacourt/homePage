/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/background.jpg */ "./src/assets/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------------------------
   CSS Reset
------------------------------------ */

*,
.iconContainer::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

/* ------------------------------------
   Variables
------------------------------------ */

:root {
  --primary-color: #7d7f7c;
  --secondary-color: #b8b4ab;
  --text-color: #d4d2cf;
  --font-main: 'Roboto', sans-serif;
  --font-accent: 'Inter', sans-serif;
  --fade-in-duration: 1s;
}

/* ------------------------------------
   Global Styles
------------------------------------ */

body {
  font-family: var(--font-main);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0;
  animation: fadeIn var(--fade-in-duration) ease-in forwards;
}

html {
  scroll-behavior: smooth;
}

/* ------------------------------------
   Typography
------------------------------------ */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-accent);
}

.textContainer p,
.workTxtContainer p {
  line-height: 1.4;
  font-size: clamp(1.2rem, 2vw, 1.25rem);
  margin: 0 1em 1em;
}

/* ------------------------------------
   Layout
------------------------------------ */

.wrapper {
  overflow: hidden;
}

/* ------------------------------------
   Header
------------------------------------ */

header {
  display: grid;
  justify-items: center;
  padding-top: 5vh;
}

.headerContainer {
  padding-top: 0.5em;
  font-size: 1.3em;
  font-family: var(--font-accent);
  font-style: italic;
}

/* ------------------------------------
   About Section
------------------------------------ */

.aboutContainer {
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  justify-items: center;
}

.headerContainer h1 {
  margin-left: 15px;
  font-size: calc(2.6rem + 0.5vw);
  font-style: italic;
}

.aboutContainer p {
  font-size: calc(1rem + 0.5vw);
}

/* ------------------------------------
   Image Container
------------------------------------ */

.imageContainer img {
  padding: 10vmin;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* ------------------------------------
   Icon Container
------------------------------------ */

.iconContainer {
  width: 100%;
  display: flex;
  gap: 0.5em;
  justify-content: center;
}

.iconContainer img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 35px;
}

.footerIconContainer {
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-bottom: 20%;
}

/* ------------------------------------
   Work Section
------------------------------------ */

.workSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30%;
}

.myWork {
  margin-top: 2vh;
  display: grid;
  gap: 5rem;
  justify-items: center;
  max-width: 80%;
}

.workHeader{
  display: flex;
  justify-content: center;
}

.workTxtContainer {
  grid-row-start: 2;
  background-color: white;
  opacity: 85%;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  font-size: 1.3em;
}

.workTxtContainer p {
  padding: 20px;
}

/* ------------------------------------
   Project Section
------------------------------------ */

.project {
  display: grid;
  height: auto;
  min-width: 100%;
  grid-template-rows: auto 1fr;
  justify-items: center;
  padding: 2px;
  background-color: var(--secondary-color);
  box-shadow: 2px 4px 10px -5px black;
}

.project img {
  height: auto;
  object-fit: cover;
}

.topRow {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 6px;
  margin-bottom: 7px;
  padding-left: 10%;
  padding-right: 10%;
}

.topRow h5 {
  font-size: 1.5rem;
  font-style: italic;
  font-family: var(--font-accent);
  margin: 0;
  overflow-wrap: break-word;
}

.topRow a {
  margin-left: 10px;
  flex-shrink: 0;
  height: auto;
  width: 30px;
}

/* ------------------------------------
   Call to Action
------------------------------------ */

.callToAction {
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  width: 100%;
  text-align: center;
}

/* ------------------------------------
   Footer
------------------------------------ */

.footerContainer {
  background-color: var(--primary-color);
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 2rem);
  display: grid;
  gap: 30px;
  padding: 7%;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
}

.footerContainer h2 {
  font-size: 3rem;
}

.footerPortrait{
  height: 50vh;;
}

.footerPortrait img{
  height: 100%;
}

.footerContainer h3 {
  font-size: 1.6rem;
}

/* ------------------------------------
   Animations
------------------------------------ */

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* ------------------------------------
   Scrollbar Styling
------------------------------------ */

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 3px solid transparent;
}

/* ------------------------------------
   Media Queries
------------------------------------ */

/* Desktop and Laptop Screens */
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 99%;
  }

  .imageContainer {
    height: 60vh;
    max-width: 30vw;
  }

  .imageContainer img {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
  }

  .aboutContainer {
    background-color: lightgray;
    flex-basis: 60%;
    grid-template-rows: repeat(3, auto);
    align-items: center;
    width: calc(100vw - 0.5rem);
    justify-items: start;
  }

  .textContainer p {
    margin-left: 15px;
  }

  .iconContainer {
    justify-content: flex-end;
    padding-right: 3vmin;
    gap: 2vmin;
  }

  .iconContainer img {
    max-width: 60px;
  }

  .topRow a {
    margin-left: 10px;
    flex-shrink: 0;
    height: auto;
    width: 100%;
  }

  .workHeader {
    margin-top: 10%;
    font-size: calc(2.6rem + 0.5vw);
    width: 100%;
   display: flex;
   justify-content: center;
  }

  .workSection {
    display: grid;
    justify-items: center;
    margin-bottom: 10%;
    height: auto;
  }

  .myWork {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  }

 .projectLinkImg{
  max-width: 50px;
 }
  .project {
    grid-template-rows: 1fr 1fr;
  }

  .project h5 {
    font-size: calc(1.6rem + 0.5vw);
  }

  .project p {
    font-size: calc(1.5rem + 0.5vw);
  }

  .project img {
    height: 100%;
    width: 100%
  }

  .workTxtContainer img {
    min-height: 50px;
  }

  .callToAction{
    text-align: left;
    justify-items: start;
  }

  .footerContainer{
  display: flex;
  flex-direction: column;
  padding-left: 7%;
  padding-top: 7%;
  padding-right: 0;
  }

  .footerContainer p{
    font-size: calc(1.5rem + 0.7vw);
  }

  .footerContainer h2{
    font-size: calc(2.5rem + 0.7vw);
  }

  .footerContainer h3{
    font-size: calc(1.5rem + 0.7vw);
  }

  .footerPortrait {
    display: flex;
    background-color: grey;
    width: 100%; /* Make sure container is as wide as needed */
    grid-column: 2;
    padding: 5%;
  }
  
  .footerPortrait img { /* Ensure the image can stretch to fit the container width */
    width: 100%;
    height: auto;
  }
  
  .bottomContainer{
    display: grid;

grid-template-columns: 1fr 1.25fr;
font-size: 3rem;
  }
  
}

/* Tablet Screens */
@media (min-width: 768px) and (max-width: 1023px) {


 
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ------------------------------------\n   CSS Reset\n------------------------------------ */\n\n*,\n.iconContainer::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* ------------------------------------\n   Variables\n------------------------------------ */\n\n:root {\n  --primary-color: #7d7f7c;\n  --secondary-color: #b8b4ab;\n  --text-color: #d4d2cf;\n  --font-main: 'Roboto', sans-serif;\n  --font-accent: 'Inter', sans-serif;\n  --fade-in-duration: 1s;\n}\n\n/* ------------------------------------\n   Global Styles\n------------------------------------ */\n\nbody {\n  font-family: var(--font-main);\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background-image: url(./assets/images/background.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  opacity: 0;\n  animation: fadeIn var(--fade-in-duration) ease-in forwards;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* ------------------------------------\n   Typography\n------------------------------------ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: var(--font-accent);\n}\n\n.textContainer p,\n.workTxtContainer p {\n  line-height: 1.4;\n  font-size: clamp(1.2rem, 2vw, 1.25rem);\n  margin: 0 1em 1em;\n}\n\n/* ------------------------------------\n   Layout\n------------------------------------ */\n\n.wrapper {\n  overflow: hidden;\n}\n\n/* ------------------------------------\n   Header\n------------------------------------ */\n\nheader {\n  display: grid;\n  justify-items: center;\n  padding-top: 5vh;\n}\n\n.headerContainer {\n  padding-top: 0.5em;\n  font-size: 1.3em;\n  font-family: var(--font-accent);\n  font-style: italic;\n}\n\n/* ------------------------------------\n   About Section\n------------------------------------ */\n\n.aboutContainer {\n  display: grid;\n  grid-template-rows: 1fr 7fr 1fr;\n  justify-items: center;\n}\n\n.headerContainer h1 {\n  margin-left: 15px;\n  font-size: calc(2.6rem + 0.5vw);\n  font-style: italic;\n}\n\n.aboutContainer p {\n  font-size: calc(1rem + 0.5vw);\n}\n\n/* ------------------------------------\n   Image Container\n------------------------------------ */\n\n.imageContainer img {\n  padding: 10vmin;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\n/* ------------------------------------\n   Icon Container\n------------------------------------ */\n\n.iconContainer {\n  width: 100%;\n  display: flex;\n  gap: 0.5em;\n  justify-content: center;\n}\n\n.iconContainer img {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  max-width: 35px;\n}\n\n.footerIconContainer {\n  display: flex;\n  justify-content: center;\n  gap: 5%;\n  margin-bottom: 20%;\n}\n\n/* ------------------------------------\n   Work Section\n------------------------------------ */\n\n.workSection {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30%;\n}\n\n.myWork {\n  margin-top: 2vh;\n  display: grid;\n  gap: 5rem;\n  justify-items: center;\n  max-width: 80%;\n}\n\n.workHeader{\n  display: flex;\n  justify-content: center;\n}\n\n.workTxtContainer {\n  grid-row-start: 2;\n  background-color: white;\n  opacity: 85%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 0.1fr 1fr;\n  font-size: 1.3em;\n}\n\n.workTxtContainer p {\n  padding: 20px;\n}\n\n/* ------------------------------------\n   Project Section\n------------------------------------ */\n\n.project {\n  display: grid;\n  height: auto;\n  min-width: 100%;\n  grid-template-rows: auto 1fr;\n  justify-items: center;\n  padding: 2px;\n  background-color: var(--secondary-color);\n  box-shadow: 2px 4px 10px -5px black;\n}\n\n.project img {\n  height: auto;\n  object-fit: cover;\n}\n\n.topRow {\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 6px;\n  margin-bottom: 7px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.topRow h5 {\n  font-size: 1.5rem;\n  font-style: italic;\n  font-family: var(--font-accent);\n  margin: 0;\n  overflow-wrap: break-word;\n}\n\n.topRow a {\n  margin-left: 10px;\n  flex-shrink: 0;\n  height: auto;\n  width: 30px;\n}\n\n/* ------------------------------------\n   Call to Action\n------------------------------------ */\n\n.callToAction {\n  display: grid;\n  grid-template-rows: auto auto;\n  justify-items: center;\n  width: 100%;\n  text-align: center;\n}\n\n/* ------------------------------------\n   Footer\n------------------------------------ */\n\n.footerContainer {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  font-size: clamp(1.2rem, 2vw, 2rem);\n  display: grid;\n  gap: 30px;\n  padding: 7%;\n  word-wrap: break-word;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.footerContainer h2 {\n  font-size: 3rem;\n}\n\n.footerPortrait{\n  height: 50vh;;\n}\n\n.footerPortrait img{\n  height: 100%;\n}\n\n.footerContainer h3 {\n  font-size: 1.6rem;\n}\n\n/* ------------------------------------\n   Animations\n------------------------------------ */\n\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n\n/* ------------------------------------\n   Scrollbar Styling\n------------------------------------ */\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n  border: 3px solid transparent;\n}\n\n/* ------------------------------------\n   Media Queries\n------------------------------------ */\n\n/* Desktop and Laptop Screens */\n@media (min-width: 1024px) {\n  .wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 99%;\n  }\n\n  .imageContainer {\n    height: 60vh;\n    max-width: 30vw;\n  }\n\n  .imageContainer img {\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n    padding: 0;\n  }\n\n  .aboutContainer {\n    background-color: lightgray;\n    flex-basis: 60%;\n    grid-template-rows: repeat(3, auto);\n    align-items: center;\n    width: calc(100vw - 0.5rem);\n    justify-items: start;\n  }\n\n  .textContainer p {\n    margin-left: 15px;\n  }\n\n  .iconContainer {\n    justify-content: flex-end;\n    padding-right: 3vmin;\n    gap: 2vmin;\n  }\n\n  .iconContainer img {\n    max-width: 60px;\n  }\n\n  .topRow a {\n    margin-left: 10px;\n    flex-shrink: 0;\n    height: auto;\n    width: 100%;\n  }\n\n  .workHeader {\n    margin-top: 10%;\n    font-size: calc(2.6rem + 0.5vw);\n    width: 100%;\n   display: flex;\n   justify-content: center;\n  }\n\n  .workSection {\n    display: grid;\n    justify-items: center;\n    margin-bottom: 10%;\n    height: auto;\n  }\n\n  .myWork {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n\n  }\n\n .projectLinkImg{\n  max-width: 50px;\n }\n  .project {\n    grid-template-rows: 1fr 1fr;\n  }\n\n  .project h5 {\n    font-size: calc(1.6rem + 0.5vw);\n  }\n\n  .project p {\n    font-size: calc(1.5rem + 0.5vw);\n  }\n\n  .project img {\n    height: 100%;\n    width: 100%\n  }\n\n  .workTxtContainer img {\n    min-height: 50px;\n  }\n\n  .callToAction{\n    text-align: left;\n    justify-items: start;\n  }\n\n  .footerContainer{\n  display: flex;\n  flex-direction: column;\n  padding-left: 7%;\n  padding-top: 7%;\n  padding-right: 0;\n  }\n\n  .footerContainer p{\n    font-size: calc(1.5rem + 0.7vw);\n  }\n\n  .footerContainer h2{\n    font-size: calc(2.5rem + 0.7vw);\n  }\n\n  .footerContainer h3{\n    font-size: calc(1.5rem + 0.7vw);\n  }\n\n  .footerPortrait {\n    display: flex;\n    background-color: grey;\n    width: 100%; /* Make sure container is as wide as needed */\n    grid-column: 2;\n    padding: 5%;\n  }\n  \n  .footerPortrait img { /* Ensure the image can stretch to fit the container width */\n    width: 100%;\n    height: auto;\n  }\n  \n  .bottomContainer{\n    display: grid;\n\ngrid-template-columns: 1fr 1.25fr;\nfont-size: 3rem;\n  }\n  \n}\n\n/* Tablet Screens */\n@media (min-width: 768px) and (max-width: 1023px) {\n\n\n \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadDom)
/* harmony export */ });
/* harmony import */ var _assets_images_portrait_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/portrait.jpg */ "./src/assets/images/portrait.jpg");
/* harmony import */ var _assets_images_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/github.svg */ "./src/assets/images/github.svg");
/* harmony import */ var _assets_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/linkedin.svg */ "./src/assets/images/linkedin.svg");
/* harmony import */ var _assets_images_cat_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/cat.jpg */ "./src/assets/images/cat.jpg");
/* harmony import */ var _assets_images_cat2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/cat2.jpg */ "./src/assets/images/cat2.jpg");
/* harmony import */ var _assets_images_cat3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/cat3.jpg */ "./src/assets/images/cat3.jpg");
/* harmony import */ var _assets_images_cat4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/cat4.jpg */ "./src/assets/images/cat4.jpg");
/* harmony import */ var _assets_images_cat5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/cat5.jpg */ "./src/assets/images/cat5.jpg");
/* harmony import */ var _assets_images_cat6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/cat6.jpg */ "./src/assets/images/cat6.jpg");
/* harmony import */ var _assets_images_cat7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/cat7.jpg */ "./src/assets/images/cat7.jpg");
/* harmony import */ var _assets_images_cat8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/cat8.jpg */ "./src/assets/images/cat8.jpg");
/* harmony import */ var _assets_images_footerP_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/footerP.jpg */ "./src/assets/images/footerP.jpg");
/* harmony import */ var _assets_images_footerP2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/footerP2.jpg */ "./src/assets/images/footerP2.jpg");
// Import all project images














function loadDom() {
  // Select DOM elements
  const portraitContainer = document.querySelector('.imageContainer');
  const gitHubLink = document.querySelector('.social-link1');
  const linkedInLink = document.querySelector('.social-link');
  const projectLink1 = document.querySelector('.project-link-1');
  const project1PicContainers = document.querySelectorAll('.project');
  const footerIcn1 = document.querySelector('.footerIcn1');
  const footerIcn2 = document.querySelector('.footerIcn2');

  const footerPcontainer = document.querySelector('.footerPortrait');

  // Check if the elements exist to avoid errors
  if (!portraitContainer || !gitHubLink || !linkedInLink) {
    console.error('One or more required DOM elements are missing.');
    return;
  }

  // Create and append portrait image
  const myPortrait = new Image();
  myPortrait.src = _assets_images_portrait_jpg__WEBPACK_IMPORTED_MODULE_0__;
  myPortrait.alt = 'Portrait of Callum';
  myPortrait.classList.add('portrait');
  portraitContainer.appendChild(myPortrait);

  // Create and append GitHub icon
  const gitHubImg = new Image();
  gitHubImg.src = _assets_images_github_svg__WEBPACK_IMPORTED_MODULE_1__;
  gitHubImg.alt = 'GitHub logo';
  gitHubLink.appendChild(gitHubImg);

  // Create and append LinkedIn icon
  const linkedInImg = new Image();
  linkedInImg.src = _assets_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__;
  linkedInImg.alt = 'LinkedIn logo';
  linkedInLink.appendChild(linkedInImg);

  // Initialize an empty array for project images
  const projectImages = [
    _assets_images_cat_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _assets_images_cat2_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _assets_images_cat3_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _assets_images_cat4_jpg__WEBPACK_IMPORTED_MODULE_6__,
    _assets_images_cat5_jpg__WEBPACK_IMPORTED_MODULE_7__,
    _assets_images_cat6_jpg__WEBPACK_IMPORTED_MODULE_8__,
    _assets_images_cat7_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _assets_images_cat8_jpg__WEBPACK_IMPORTED_MODULE_10__,
  ];

  for (let i = 0; i < project1PicContainers.length; i += 1) {
    // Create and append the project image
    const img = new Image();
    img.src = projectImages[i];
    img.alt = `project image ${i + 1}`;
    project1PicContainers[i].appendChild(img);

    // Create and append the GitHub icon link
    const projectGit = new Image();
    projectGit.src = _assets_images_github_svg__WEBPACK_IMPORTED_MODULE_1__;
    projectGit.alt = 'Link to project GitHub repo';
    projectGit.classList.add('projectLinkImg');

    // Select the corresponding project link element
    const projectLinkElement = document.querySelector(`.project-link-${i + 1}`);

    // Check if the element exists to avoid errors
    if (projectLinkElement) {
      projectLinkElement.appendChild(projectGit);
    } else {
      console.error(`.project-link-${i + 1} not found`);
    }
  }

  const footerLinkedIn = new Image();
  footerLinkedIn.src = _assets_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__;
  footerLinkedIn.alt = 'LinkedIn social link';
  footerIcn1.appendChild(footerLinkedIn);

  const footerGitHub = new Image();
  footerGitHub.src = _assets_images_github_svg__WEBPACK_IMPORTED_MODULE_1__;
  footerGitHub.alt = 'Github social link';
  footerIcn2.appendChild(footerGitHub);

  const footerP = new Image();

  const srcsetValues = './assets//images/footerP2.jpg 640w';
  footerP.setAttribute('srcset', srcsetValues);
  footerP.src = _assets_images_footerP_jpg__WEBPACK_IMPORTED_MODULE_11__;
  footerP.alt = 'a portrait of a cat';
  footerPcontainer.appendChild(footerP);
}


/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cda8380388902caffcfb.jpg";

/***/ }),

/***/ "./src/assets/images/cat.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/cat.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bd7c99a383dbc24c932.jpg";

/***/ }),

/***/ "./src/assets/images/cat2.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2eeb7448e35364edc3d.jpg";

/***/ }),

/***/ "./src/assets/images/cat3.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f7ea2994112a9d38d70.jpg";

/***/ }),

/***/ "./src/assets/images/cat4.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2683b5f0388dd628c34.jpg";

/***/ }),

/***/ "./src/assets/images/cat5.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56a85ba515825882b3ed.jpg";

/***/ }),

/***/ "./src/assets/images/cat6.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat6.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64cd9a7648d4e1859c53.jpg";

/***/ }),

/***/ "./src/assets/images/cat7.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat7.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3ca8063eafa782e31a5.jpg";

/***/ }),

/***/ "./src/assets/images/cat8.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cat8.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7153b80754ed99c97b83.jpg";

/***/ }),

/***/ "./src/assets/images/footerP.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/footerP.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa43b272e41b77868d0b.jpg";

/***/ }),

/***/ "./src/assets/images/footerP2.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/footerP2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa43b272e41b77868d0b.jpg";

/***/ }),

/***/ "./src/assets/images/github.svg":
/*!**************************************!*\
  !*** ./src/assets/images/github.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "550985caaa8859d4b95f.svg";

/***/ }),

/***/ "./src/assets/images/linkedin.svg":
/*!****************************************!*\
  !*** ./src/assets/images/linkedin.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaccfc4b453ff94aff73.svg";

/***/ }),

/***/ "./src/assets/images/portrait.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/portrait.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "989b8409dcedd33f1f1d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsUUFBUSxRQUFRLFlBQVksV0FBVyxNQUFNLFNBQVMsVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxRQUFRLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxRQUFRLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFFBQVEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZ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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ087O0FBRTVCLGdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgQ1NTIFJlc2V0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbi5pY29uQ29udGFpbmVyOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4jcm9vdCxcbiNfX25leHQge1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgVmFyaWFibGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICM3ZDdmN2M7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYjhiNGFiO1xuICAtLXRleHQtY29sb3I6ICNkNGQyY2Y7XG4gIC0tZm9udC1tYWluOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgLS1mb250LWFjY2VudDogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgLS1mYWRlLWluLWR1cmF0aW9uOiAxcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBHbG9iYWwgU3R5bGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIHZhcigtLWZhZGUtaW4tZHVyYXRpb24pIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBUeXBvZ3JhcGh5XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYWNjZW50KTtcbn1cblxuLnRleHRDb250YWluZXIgcCxcbi53b3JrVHh0Q29udGFpbmVyIHAge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMnZ3LCAxLjI1cmVtKTtcbiAgbWFyZ2luOiAwIDFlbSAxZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgTGF5b3V0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLndyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEhlYWRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDV2aDtcbn1cblxuLmhlYWRlckNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYWNjZW50KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEFib3V0IFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uYWJvdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJDb250YWluZXIgaDEge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiBjYWxjKDIuNnJlbSArIDAuNXZ3KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uYWJvdXRDb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC41dncpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEltYWdlIENvbnRhaW5lclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5pbWFnZUNvbnRhaW5lciBpbWcge1xuICBwYWRkaW5nOiAxMHZtaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEljb24gQ29udGFpbmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmljb25Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uQ29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDM1cHg7XG59XG5cbi5mb290ZXJJY29uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBXb3JrIFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ud29ya1NlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzAlO1xufVxuXG4ubXlXb3JrIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDVyZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi53b3JrSGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmtUeHRDb250YWluZXIge1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDg1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4ud29ya1R4dENvbnRhaW5lciBwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBQcm9qZWN0IFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IC01cHggYmxhY2s7XG59XG5cbi5wcm9qZWN0IGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50b3BSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi50b3BSb3cgaDUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hY2NlbnQpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi50b3BSb3cgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBDYWxsIHRvIEFjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5jYWxsVG9BY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEZvb3RlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5mb290ZXJDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMnZ3LCAycmVtKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiA3JTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uZm9vdGVyUG9ydHJhaXR7XG4gIGhlaWdodDogNTB2aDs7XG59XG5cbi5mb290ZXJQb3J0cmFpdCBpbWd7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvb3RlckNvbnRhaW5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEFuaW1hdGlvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgU2Nyb2xsYmFyIFN0eWxpbmdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBNZWRpYSBRdWVyaWVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogRGVza3RvcCBhbmQgTGFwdG9wIFNjcmVlbnMgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDk5JTtcbiAgfVxuXG4gIC5pbWFnZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1heC13aWR0aDogMzB2dztcbiAgfVxuXG4gIC5pbWFnZUNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuYWJvdXRDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBmbGV4LWJhc2lzOiA2MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDAuNXJlbSk7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAudGV4dENvbnRhaW5lciBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC5pY29uQ29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDN2bWluO1xuICAgIGdhcDogMnZtaW47XG4gIH1cblxuICAuaWNvbkNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgfVxuXG4gIC50b3BSb3cgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndvcmtIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmb250LXNpemU6IGNhbGMoMi42cmVtICsgMC41dncpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLndvcmtTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm15V29yayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcblxuICB9XG5cbiAucHJvamVjdExpbmtJbWd7XG4gIG1heC13aWR0aDogNTBweDtcbiB9XG4gIC5wcm9qZWN0IHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cblxuICAucHJvamVjdCBoNSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDAuNXZ3KTtcbiAgfVxuXG4gIC5wcm9qZWN0IHAge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjV2dyk7XG4gIH1cblxuICAucHJvamVjdCBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJVxuICB9XG5cbiAgLndvcmtUeHRDb250YWluZXIgaW1nIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmNhbGxUb0FjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgLmZvb3RlckNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiA3JTtcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmZvb3RlckNvbnRhaW5lciBwe1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjd2dyk7XG4gIH1cblxuICAuZm9vdGVyQ29udGFpbmVyIGgye1xuICAgIGZvbnQtc2l6ZTogY2FsYygyLjVyZW0gKyAwLjd2dyk7XG4gIH1cblxuICAuZm9vdGVyQ29udGFpbmVyIGgze1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjd2dyk7XG4gIH1cblxuICAuZm9vdGVyUG9ydHJhaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB3aWR0aDogMTAwJTsgLyogTWFrZSBzdXJlIGNvbnRhaW5lciBpcyBhcyB3aWRlIGFzIG5lZWRlZCAqL1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG4gIFxuICAuZm9vdGVyUG9ydHJhaXQgaW1nIHsgLyogRW5zdXJlIHRoZSBpbWFnZSBjYW4gc3RyZXRjaCB0byBmaXQgdGhlIGNvbnRhaW5lciB3aWR0aCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLmJvdHRvbUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjI1ZnI7XG5mb250LXNpemU6IDNyZW07XG4gIH1cbiAgXG59XG5cbi8qIFRhYmxldCBTY3JlZW5zICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblxuXG4gXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztzQ0FFc0M7O0FBRXRDOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBOzs7Ozs7O0VB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MkI7RUFDN0I7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxZQUFZO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBRUE7RUFDQSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXLEVBQUUsNkNBQTZDO0lBQzFELGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsc0JBQXNCLDREQUE0RDtJQUNoRixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTs7QUFFakIsaUNBQWlDO0FBQ2pDLGVBQWU7RUFDYjs7QUFFRjs7QUFFQSxtQkFBbUI7QUFDbkI7Ozs7QUFJQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBDU1MgUmVzZXRcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbi5pY29uQ29udGFpbmVyOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBWYXJpYWJsZXNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM3ZDdmN2M7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2I4YjRhYjtcXG4gIC0tdGV4dC1jb2xvcjogI2Q0ZDJjZjtcXG4gIC0tZm9udC1tYWluOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1hY2NlbnQ6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAtLWZhZGUtaW4tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBHbG9iYWwgU3R5bGVzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIHZhcigtLWZhZGUtaW4tZHVyYXRpb24pIGVhc2UtaW4gZm9yd2FyZHM7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgIFR5cG9ncmFwaHlcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1hY2NlbnQpO1xcbn1cXG5cXG4udGV4dENvbnRhaW5lciBwLFxcbi53b3JrVHh0Q29udGFpbmVyIHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAydncsIDEuMjVyZW0pO1xcbiAgbWFyZ2luOiAwIDFlbSAxZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgIExheW91dFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi53cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgIEhlYWRlclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDV2aDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYWNjZW50KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgQWJvdXQgU2VjdGlvblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciBoMSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyLjZyZW0gKyAwLjV2dyk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5hYm91dENvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC41dncpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBJbWFnZSBDb250YWluZXJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uaW1hZ2VDb250YWluZXIgaW1nIHtcXG4gIHBhZGRpbmc6IDEwdm1pbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgIEljb24gQ29udGFpbmVyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmljb25Db250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaWNvbkNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG1heC13aWR0aDogMzVweDtcXG59XFxuXFxuLmZvb3Rlckljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDIwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgV29yayBTZWN0aW9uXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLndvcmtTZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMzAlO1xcbn1cXG5cXG4ubXlXb3JrIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLndvcmtIZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53b3JrVHh0Q29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiA4NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi53b3JrVHh0Q29udGFpbmVyIHAge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgUHJvamVjdCBTZWN0aW9uXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IC01cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4udG9wUm93IGg1IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYWNjZW50KTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b3BSb3cgYSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgIENhbGwgdG8gQWN0aW9uXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNhbGxUb0FjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgRm9vdGVyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAydncsIDJyZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDclO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5mb290ZXJDb250YWluZXIgaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZm9vdGVyUG9ydHJhaXR7XFxuICBoZWlnaHQ6IDUwdmg7O1xcbn1cXG5cXG4uZm9vdGVyUG9ydHJhaXQgaW1ne1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBBbmltYXRpb25zXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICBTY3JvbGxiYXIgU3R5bGluZ1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgTWVkaWEgUXVlcmllc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIERlc2t0b3AgYW5kIExhcHRvcCBTY3JlZW5zICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA5OSU7XFxuICB9XFxuXFxuICAuaW1hZ2VDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gIH1cXG5cXG4gIC5pbWFnZUNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmFib3V0Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBmbGV4LWJhc2lzOiA2MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDAuNXJlbSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLnRleHRDb250YWluZXIgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgfVxcblxcbiAgLmljb25Db250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzdm1pbjtcXG4gICAgZ2FwOiAydm1pbjtcXG4gIH1cXG5cXG4gIC5pY29uQ29udGFpbmVyIGltZyB7XFxuICAgIG1heC13aWR0aDogNjBweDtcXG4gIH1cXG5cXG4gIC50b3BSb3cgYSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53b3JrSGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBmb250LXNpemU6IGNhbGMoMi42cmVtICsgMC41dncpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLndvcmtTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5teVdvcmsge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG5cXG4gIH1cXG5cXG4gLnByb2plY3RMaW5rSW1ne1xcbiAgbWF4LXdpZHRoOiA1MHB4O1xcbiB9XFxuICAucHJvamVjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGg1IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDAuNXZ3KTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IHAge1xcbiAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMC41dncpO1xcbiAgfVxcblxcbiAgLnByb2plY3QgaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJVxcbiAgfVxcblxcbiAgLndvcmtUeHRDb250YWluZXIgaW1nIHtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC5jYWxsVG9BY3Rpb257XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmZvb3RlckNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiA3JTtcXG4gIHBhZGRpbmctdG9wOiA3JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuZm9vdGVyQ29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjd2dyk7XFxuICB9XFxuXFxuICAuZm9vdGVyQ29udGFpbmVyIGgye1xcbiAgICBmb250LXNpemU6IGNhbGMoMi41cmVtICsgMC43dncpO1xcbiAgfVxcblxcbiAgLmZvb3RlckNvbnRhaW5lciBoM3tcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDAuN3Z3KTtcXG4gIH1cXG5cXG4gIC5mb290ZXJQb3J0cmFpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBNYWtlIHN1cmUgY29udGFpbmVyIGlzIGFzIHdpZGUgYXMgbmVlZGVkICovXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gIH1cXG4gIFxcbiAgLmZvb3RlclBvcnRyYWl0IGltZyB7IC8qIEVuc3VyZSB0aGUgaW1hZ2UgY2FuIHN0cmV0Y2ggdG8gZml0IHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLmJvdHRvbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjI1ZnI7XFxuZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgXFxufVxcblxcbi8qIFRhYmxldCBTY3JlZW5zICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuXFxuXFxuIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnQgYWxsIHByb2plY3QgaW1hZ2VzXG5pbXBvcnQgcG9ydHJhaXQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3BvcnRyYWl0LmpwZyc7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgbGlua2VkSW5JY29uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9saW5rZWRpbi5zdmcnO1xuaW1wb3J0IHByb2plY3RJbWcxIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jYXQuanBnJztcbmltcG9ydCBwcm9qZWN0SW1nMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2F0Mi5qcGcnO1xuaW1wb3J0IHByb2plY3RJbWczIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jYXQzLmpwZyc7XG5pbXBvcnQgcHJvamVjdEltZzQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NhdDQuanBnJztcbmltcG9ydCBwcm9qZWN0SW1nNSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2F0NS5qcGcnO1xuaW1wb3J0IHByb2plY3RJbWc2IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jYXQ2LmpwZyc7XG5pbXBvcnQgcHJvamVjdEltZzcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NhdDcuanBnJztcbmltcG9ydCBwcm9qZWN0SW1nOCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2F0OC5qcGcnO1xuaW1wb3J0IGZvb3RlclBvcnRyYWl0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9mb290ZXJQLmpwZyc7XG5pbXBvcnQgZGVza3RvcFBvcnRyYWl0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9mb290ZXJQMi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRG9tKCkge1xuICAvLyBTZWxlY3QgRE9NIGVsZW1lbnRzXG4gIGNvbnN0IHBvcnRyYWl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29jaWFsLWxpbmsxJyk7XG4gIGNvbnN0IGxpbmtlZEluTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2NpYWwtbGluaycpO1xuICBjb25zdCBwcm9qZWN0TGluazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saW5rLTEnKTtcbiAgY29uc3QgcHJvamVjdDFQaWNDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgY29uc3QgZm9vdGVySWNuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJJY24xJyk7XG4gIGNvbnN0IGZvb3RlckljbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVySWNuMicpO1xuXG4gIGNvbnN0IGZvb3RlclBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyUG9ydHJhaXQnKTtcblxuICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudHMgZXhpc3QgdG8gYXZvaWQgZXJyb3JzXG4gIGlmICghcG9ydHJhaXRDb250YWluZXIgfHwgIWdpdEh1YkxpbmsgfHwgIWxpbmtlZEluTGluaykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ09uZSBvciBtb3JlIHJlcXVpcmVkIERPTSBlbGVtZW50cyBhcmUgbWlzc2luZy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBwb3J0cmFpdCBpbWFnZVxuICBjb25zdCBteVBvcnRyYWl0ID0gbmV3IEltYWdlKCk7XG4gIG15UG9ydHJhaXQuc3JjID0gcG9ydHJhaXQ7XG4gIG15UG9ydHJhaXQuYWx0ID0gJ1BvcnRyYWl0IG9mIENhbGx1bSc7XG4gIG15UG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKTtcbiAgcG9ydHJhaXRDb250YWluZXIuYXBwZW5kQ2hpbGQobXlQb3J0cmFpdCk7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgR2l0SHViIGljb25cbiAgY29uc3QgZ2l0SHViSW1nID0gbmV3IEltYWdlKCk7XG4gIGdpdEh1YkltZy5zcmMgPSBnaXRIdWJJY29uO1xuICBnaXRIdWJJbWcuYWx0ID0gJ0dpdEh1YiBsb2dvJztcbiAgZ2l0SHViTGluay5hcHBlbmRDaGlsZChnaXRIdWJJbWcpO1xuXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIExpbmtlZEluIGljb25cbiAgY29uc3QgbGlua2VkSW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbGlua2VkSW5JbWcuc3JjID0gbGlua2VkSW5JY29uO1xuICBsaW5rZWRJbkltZy5hbHQgPSAnTGlua2VkSW4gbG9nbyc7XG4gIGxpbmtlZEluTGluay5hcHBlbmRDaGlsZChsaW5rZWRJbkltZyk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSBmb3IgcHJvamVjdCBpbWFnZXNcbiAgY29uc3QgcHJvamVjdEltYWdlcyA9IFtcbiAgICBwcm9qZWN0SW1nMSxcbiAgICBwcm9qZWN0SW1nMixcbiAgICBwcm9qZWN0SW1nMyxcbiAgICBwcm9qZWN0SW1nNCxcbiAgICBwcm9qZWN0SW1nNSxcbiAgICBwcm9qZWN0SW1nNixcbiAgICBwcm9qZWN0SW1nNyxcbiAgICBwcm9qZWN0SW1nOCxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QxUGljQ29udGFpbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBwcm9qZWN0IGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHByb2plY3RJbWFnZXNbaV07XG4gICAgaW1nLmFsdCA9IGBwcm9qZWN0IGltYWdlICR7aSArIDF9YDtcbiAgICBwcm9qZWN0MVBpY0NvbnRhaW5lcnNbaV0uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBHaXRIdWIgaWNvbiBsaW5rXG4gICAgY29uc3QgcHJvamVjdEdpdCA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3RHaXQuc3JjID0gZ2l0SHViSWNvbjtcbiAgICBwcm9qZWN0R2l0LmFsdCA9ICdMaW5rIHRvIHByb2plY3QgR2l0SHViIHJlcG8nO1xuICAgIHByb2plY3RHaXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmtJbWcnKTtcblxuICAgIC8vIFNlbGVjdCB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0IGxpbmsgZWxlbWVudFxuICAgIGNvbnN0IHByb2plY3RMaW5rRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWxpbmstJHtpICsgMX1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IGV4aXN0cyB0byBhdm9pZCBlcnJvcnNcbiAgICBpZiAocHJvamVjdExpbmtFbGVtZW50KSB7XG4gICAgICBwcm9qZWN0TGlua0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEdpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYC5wcm9qZWN0LWxpbmstJHtpICsgMX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9vdGVyTGlua2VkSW4gPSBuZXcgSW1hZ2UoKTtcbiAgZm9vdGVyTGlua2VkSW4uc3JjID0gbGlua2VkSW5JY29uO1xuICBmb290ZXJMaW5rZWRJbi5hbHQgPSAnTGlua2VkSW4gc29jaWFsIGxpbmsnO1xuICBmb290ZXJJY24xLmFwcGVuZENoaWxkKGZvb3RlckxpbmtlZEluKTtcblxuICBjb25zdCBmb290ZXJHaXRIdWIgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vdGVyR2l0SHViLnNyYyA9IGdpdEh1Ykljb247XG4gIGZvb3RlckdpdEh1Yi5hbHQgPSAnR2l0aHViIHNvY2lhbCBsaW5rJztcbiAgZm9vdGVySWNuMi5hcHBlbmRDaGlsZChmb290ZXJHaXRIdWIpO1xuXG4gIGNvbnN0IGZvb3RlclAgPSBuZXcgSW1hZ2UoKTtcblxuICBjb25zdCBzcmNzZXRWYWx1ZXMgPSAnLi9hc3NldHMvL2ltYWdlcy9mb290ZXJQMi5qcGcgNjQwdyc7XG4gIGZvb3RlclAuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXRWYWx1ZXMpO1xuICBmb290ZXJQLnNyYyA9IGZvb3RlclBvcnRyYWl0O1xuICBmb290ZXJQLmFsdCA9ICdhIHBvcnRyYWl0IG9mIGEgY2F0JztcbiAgZm9vdGVyUGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJQKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZERvbSBmcm9tICcuL2RvbSc7XG5cbmxvYWREb20oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==