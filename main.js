/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Budge-Shadow.woff */ "./src/assets/fonts/Budge-Shadow.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Budge-Line.woff */ "./src/assets/fonts/Budge-Line.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Budge-Regular.woff */ "./src/assets/fonts/Budge-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BudgePair-Regular.woff */ "./src/assets/fonts/BudgePair-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Shadow Font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
}
@font-face {
  font-family: "Line Font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
}
@font-face {
  font-family: "Header Font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff");
}
@font-face {
  font-family: "TextFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
}
@media screen and (max-width: 1299px) {
  #content header {
    justify-content: center;
  }
  .shadow {
    display: none;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #dae4df;
}

header {
  padding: 0.5rem 10rem;
  background-color: #3D3B8E;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  font-size: 4rem;
}

.shadow {
  font-family: "Shadow Font";
  color: #6883BA;
  position: relative;
}

.text {
  font-family: "Header Font";
  color: #F9F9F9;
  position: absolute;
  top: 0;
}

.line {
  font-family: "Line Font";
  color: #E072A4;
  position: absolute;
  top: 0;
}

nav {
  gap: 10rem;
  display: flex;
  justify-content: space-between;
}

.nav-item {
  font-size: 1.8rem;
  font-family: "TextFont";
  text-decoration: none;
  color: #F9F9F9;
  display: block;
  position: relative;
  padding: 0.2rem 0;
  overflow: hidden;
  cursor: pointer;
}
.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: hotpink;
  opacity: 1;
  transition: opacity 300ms, transform 300ms;
  transform: translate3d(-100%, 0, 0);
}
.nav-item:hover::after, .nav-item:focus::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.selected::after {
  background-color: #F9F9F9;
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.mainCard {
  width: clamp(450px, 40vw, 700px);
  padding: 1.5rem;
  margin: 1rem 0;
  background-color: #E072A4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 3vh;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.mainCard p {
  color: #F9F9F9;
  font-family: "TextFont";
  font-size: 1.5rem;
}

.homeCard img {
  width: clamp(250px, 30vw, 320px);
  border-radius: 50%;
}

.homeCard a {
  font-size: 1.5rem;
  font-family: "TextFont";
  text-decoration: none;
  color: #F9F9F9;
  display: block;
  position: relative;
  padding: 0.2rem 0;
  overflow: hidden;
  cursor: pointer;
}
.homeCard a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: #F9F9F9;
  opacity: 1;
  transition: opacity 300ms, transform 300ms;
  transform: translate3d(-100%, 0, 0);
}
.homeCard a:hover::after, .homeCard a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.menuCard {
  padding: 2rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.iceCreamCard {
  border: solid 2px #F9F9F9;
  border-radius: 2vh;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  background-color: #F9F9F9;
  transition: 0.3s ease;
}
.iceCreamCard p {
  color: #E072A4;
  font-size: 0.8rem;
}
.iceCreamCard h2 {
  font-size: 1rem;
  color: #E072A4;
  font-family: "TextFont";
}
.iceCreamCard img {
  width: 100px;
}
.iceCreamCard:hover {
  background-color: #E072A4;
}
.iceCreamCard:hover p, .iceCreamCard:hover h2 {
  color: #F9F9F9;
}

.contactCard h2 {
  color: #F9F9F9;
  font-size: 2.5rem;
}
.contactCard svg {
  width: 50px;
}
.contactCard p {
  font-size: 1.5rem;
}
.contactCard img {
  width: min(95%, 500px);
  margin-top: 1rem;
  border: 4px solid #F9F9F9;
  border-radius: 2vh;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.contactCard .infoArea {
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  row-gap: 2rem;
  column-gap: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;EACE,0BAAA;EACA,2DAAA;AAAF;AAEA;EACE,wBAAA;EACA,2DAAA;AAAF;AAEA;EACE,0BAAA;EACA,2DAAA;AAAF;AAEA;EACE,uBAAA;EACA,2DAAA;AAAF;AAGA;EACE;IACE,uBAAA;EADF;EAGA;IACE,aAAA;EADF;AACF;AAwCA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAtCF;;AA0CA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AAvCF;;AA0CA;EACE,yBAAA;AAvCF;;AA2CA;EACE,qBAAA;EACA,yBAvDU;EAwDV,kBAAA;EACA,gFAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAxCF;AAyCE;EACE,eAAA;AAvCJ;;AA2CA;EACE,0BAAA;EACA,cAnEW;EAoEX,kBAAA;AAxCF;;AA2CA;EACE,0BAAA;EACA,cAvEM;EAwEN,kBAAA;EACA,MAAA;AAxCF;;AA2CA;EACE,wBAAA;EACA,cA/EK;EAgFL,kBAAA;EACA,MAAA;AAxCF;;AA4CA;EACE,UAAA;EACA,aAAA;EACA,8BAAA;AAzCF;;AA4CA;EACE,iBAAA;EAvFA,uBAAA;EACA,qBAAA;EACA,cANM;EAON,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AA+CF;AA9CE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,yBAyEsB;EAxEtB,UAAA;EACA,0CAAA;EACA,mCAAA;AAgDJ;AA9CE;EAEE,UAAA;EACA,+BAAA;AA+CJ;;AAqBA;EACE,yBAhGM;EAiGN,UAAA;EACA,+BAAA;AAlBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,OAAA;AAnBF;;AAuBA;EACE,gCAAA;EACA,eAAA;EACA,cAAA;EACA,yBApHK;EAqHL,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;EACA,gFAAA;AApBF;;AAuBA;EACE,cA7HM;EA8HN,uBAAA;EACA,iBAAA;AApBF;;AAuBA;EACE,gCAAA;EACA,kBAAA;AApBF;;AAuBA;EACE,iBAAA;EApIA,uBAAA;EACA,qBAAA;EACA,cANM;EAON,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAiHF;AAhHE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,yBAnBI;EAoBJ,UAAA;EACA,0CAAA;EACA,mCAAA;AAkHJ;AAhHE;EAEE,UAAA;EACA,+BAAA;AAiHJ;;AACA;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,2DAAA;EACA,SAAA;AAEF;;AACA;EACE,yBAAA;EACA,kBAAA;EACA,gFAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBA9JM;EA+JN,qBAAA;AAEF;AADE;EACE,cAlKG;EAmKH,iBAAA;AAGJ;AADE;EACE,eAAA;EACA,cAvKG;EAwKH,uBAAA;AAGJ;AADE;EACE,YAAA;AAGJ;AADE;EACE,yBA9KG;AAiLP;AAFI;EACE,cA/KE;AAmLR;;AAGE;EACE,cAvLI;EAwLJ,iBAAA;AAAJ;AAEE;EACE,WAAA;AAAJ;AAEE;EACE,iBAAA;AAAJ;AAEE;EACE,sBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gFAAA;AAAJ;;AAIA;EACE,aAAA;EACA,+BAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AADF","sourcesContent":["// Fonts\n@font-face {\n  font-family: 'Shadow Font';\n  src: url('./assets/fonts/Budge-Shadow.woff') format('woff');\n}\n@font-face {\n  font-family: 'Line Font';\n  src: url('./assets/fonts/Budge-Line.woff') format('woff');\n}\n@font-face {\n  font-family: 'Header Font';\n  src: url('./assets/fonts/Budge-Regular.woff') format('woff');\n}\n@font-face {\n  font-family: 'TextFont';\n  src: url('./assets/fonts/BudgePair-Regular.woff') format('woff');\n}\n\n@media screen and (max-width: 1299px) {\n  #content header {\n    justify-content: center;\n  }\n  .shadow {\n    display: none;\n  }\n}\n\n// Variables\n$dark-blue: #3D3B8E;\n$light-blue: #6883BA;\n$pink: #E072A4;\n$white: #F9F9F9;\n\n// Hover animation mixin\n@mixin hoverAnimation($underlineColor) {\n  font-family: 'TextFont';\n  text-decoration: none;\n  color: $white;\n  display: block;\n  position: relative;\n  padding: 0.2rem 0;\n  overflow: hidden;\n  cursor: pointer;\n  &::after{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.1em;\n    background-color: $underlineColor;\n    opacity: 1;\n    transition: opacity 300ms, transform 300ms;\n    transform: translate3d(-100%, 0, 0);\n  }\n  &:hover::after,\n  &:focus::after {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n// Reset\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n// Body\n#content {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  background-color: #dae4df;\n}\n\n// \"Frosty Delights\" header text\nheader {\n  padding: 0.5rem 10rem;\n  background-color: $dark-blue;\n  position: relative;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h1 {\n    font-size: 4rem;\n  }\n}\n\n.shadow {\n  font-family: 'Shadow Font';\n  color: $light-blue;\n  position: relative;\n}\n\n.text {\n  font-family: 'Header Font';\n  color: $white;\n  position: absolute;\n  top: 0;\n}\n\n.line {\n  font-family: 'Line Font';\n  color: $pink;\n  position: absolute;\n  top: 0;\n}\n\n// Nav Bar\nnav {\n  gap: 10rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.nav-item {\n  font-size: 1.8rem;\n  @include hoverAnimation(hotpink);\n}\n\n.selected::after {\n  background-color: $white;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n// Main Container (Container below header)\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n\n// Home Page\n.mainCard {\n  width: clamp(450px, 40vw, 700px);\n  padding: 1.5rem;\n  margin: 1rem 0;\n  background-color: $pink;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 3vh;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.mainCard p {\n  color: $white;\n  font-family: 'TextFont';\n  font-size: 1.5rem;\n}\n\n.homeCard img {\n  width: clamp(250px, 30vw, 320px);\n  border-radius: 50%;\n}\n\n.homeCard a {\n  font-size: 1.5rem;\n  @include hoverAnimation($white);\n}\n\n// Menu Page\n.menuCard {\n  padding: 2rem;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.iceCreamCard {\n  border: solid 2px $white;\n  border-radius: 2vh;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  background-color: $white;\n  transition: 0.3s ease;\n  p {\n    color: $pink;\n    font-size: 0.8rem;\n  }\n  h2 {\n    font-size: 1rem;\n    color: $pink;\n    font-family: 'TextFont';\n  }\n  img {\n    width: 100px;\n  }\n  &:hover {\n    background-color: $pink;\n    p, h2 {\n      color: $white;\n    }\n  }\n}\n\n// Contact Page\n.contactCard {\n  h2 {\n    color: $white;\n    font-size: 2.5rem;\n  }\n  svg {\n    width: 50px;\n  }\n  p {\n    font-size: 1.5rem;\n  }\n  img {\n    width: min(95%,500px);\n    margin-top: 1rem;\n    border: 4px solid $white;\n    border-radius: 2vh;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  }\n}\n\n.contactCard .infoArea {\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  align-items: center;\n  row-gap: 2rem;\n  column-gap: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/images/contactPage/email.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/contactPage/email.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16\" stroke=\"#F9F9F9\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/images/contactPage/location.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/contactPage/location.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\" fill=\"#000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>location</title><desc>Created with Sketch Beta.</desc><defs></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\"><g id=\"Icon-Set\" sketch:type=\"MSLayerGroup\" transform=\"translate(-104.000000, -411.000000)\" fill=\"#F9F9F9\"><path d=\"M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z\" id=\"location\" sketch:type=\"MSShapeGroup\"></path></g></g></g></svg>"

/***/ }),

/***/ "./src/assets/images/contactPage/phone.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/contactPage/phone.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z\" stroke=\"#F9F9F9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g></svg>"

/***/ }),

/***/ "./src/components/cleanPage.js":
/*!*************************************!*\
  !*** ./src/components/cleanPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanPage: () => (/* binding */ cleanPage)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage */ "./src/components/pages/homePage.js");
/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menuPage */ "./src/components/pages/menuPage.js");
/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contactPage */ "./src/components/pages/contactPage.js");





function cleanPage(home, menu, contact, selected, container) {
  home.addEventListener('click', () => {
    if(selected !== 'home'){
      container.textContent = '';
      const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)('home', container);
      const main = (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
      container.appendChild(header);
      container.appendChild(main);
    }
  });

  menu.addEventListener('click', () => {
    if(selected !== 'menu'){
      container.textContent = '';
      const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)('menu', container);
      const main = (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
      container.appendChild(header);
      container.appendChild(main);
    }
  });

  contact.addEventListener('click', () => {
    if(selected !== 'contact'){
      container.textContent = '';
      const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)('contact', container);
      const main = (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();
      container.appendChild(header);
      container.appendChild(main);
    }
  });
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _cleanPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanPage */ "./src/components/cleanPage.js");


function createHeader(selected, container) {
  // Header
  const header = document.createElement('header');

  const h1Shadow = document.createElement('h1');
  h1Shadow.textContent = 'Frosty Delights';
  h1Shadow.classList.add('shadow');

  const h1Text = document.createElement('h1');
  h1Text.textContent = 'Frosty Delights';
  h1Text.classList.add('text');

  const h1Line = document.createElement('h1');
  h1Line.textContent = 'Frosty Delights';
  h1Line.classList.add('line');

  header.appendChild(h1Shadow);
  h1Shadow.appendChild(h1Text);
  h1Shadow.appendChild(h1Line);

  // Nav Bar
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  (0,_cleanPage__WEBPACK_IMPORTED_MODULE_0__.cleanPage)(home, menu, contact, selected, container);

  home.classList.add('nav-item');
  menu.classList.add('nav-item');
  contact.classList.add('nav-item');

  home.classList.remove('selected');
  menu.classList.remove('selected');
  contact.classList.remove('selected');

  switch (selected) {
    case 'home':
      home.classList.add('selected');
      break;
    case 'menu':
      menu.classList.add('selected');
      break;
    case 'contact':
      contact.classList.add('selected');
      break;
  }

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  header.appendChild(nav);

  return header;
}



/***/ }),

/***/ "./src/components/pages/contactPage.js":
/*!*********************************************!*\
  !*** ./src/components/pages/contactPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _src_assets_images_contactPage_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/images/contactPage/phone.svg */ "./src/assets/images/contactPage/phone.svg");
/* harmony import */ var _src_assets_images_contactPage_phone_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_contactPage_phone_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_assets_images_contactPage_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/assets/images/contactPage/email.svg */ "./src/assets/images/contactPage/email.svg");
/* harmony import */ var _src_assets_images_contactPage_email_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_contactPage_email_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_assets_images_contactPage_location_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/assets/images/contactPage/location.svg */ "./src/assets/images/contactPage/location.svg");
/* harmony import */ var _src_assets_images_contactPage_location_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_images_contactPage_location_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_assets_images_contactPage_icecreamshop_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/images/contactPage/icecreamshop.jpg */ "./src/assets/images/contactPage/icecreamshop.jpg");





function createContactPage() {
  const main = document.createElement('main');

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('mainCard', 'contactCard');

  const contactUs = document.createElement('h2');
  contactUs.textContent = 'Contact Us'

  const infoArea = document.createElement('div');
  infoArea.classList.add('infoArea');
  
  const phoneText = document.createElement('p');
  phoneText.textContent = '(555) 123-4567'
  
  const emailText = document.createElement('p');
  emailText.textContent = 'frostydelights@icecream.com'
  
  const locationText = document.createElement('p');
  locationText.textContent = '123 Palm Street, Miami, FL 33101, United States'

  const image = new Image();
  image.src = _src_assets_images_contactPage_icecreamshop_jpg__WEBPACK_IMPORTED_MODULE_3__;
  
  infoArea.innerHTML = (_src_assets_images_contactPage_phone_svg__WEBPACK_IMPORTED_MODULE_0___default());
  infoArea.appendChild(phoneText);
  infoArea.innerHTML += (_src_assets_images_contactPage_email_svg__WEBPACK_IMPORTED_MODULE_1___default());
  infoArea.appendChild(emailText);
  infoArea.innerHTML += (_src_assets_images_contactPage_location_svg__WEBPACK_IMPORTED_MODULE_2___default());
  infoArea.appendChild(locationText);
  
  aboutCard.appendChild(contactUs);
  aboutCard.appendChild(infoArea);
  aboutCard.appendChild(image);

  main.appendChild(aboutCard);

  return main;
}

/***/ }),

/***/ "./src/components/pages/homePage.js":
/*!******************************************!*\
  !*** ./src/components/pages/homePage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _src_assets_images_homePage_icecream_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/images/homePage/icecream.jpg */ "./src/assets/images/homePage/icecream.jpg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./src/components/header.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/components/pages/contactPage.js");




function createHomePage() {
  // Main
  const main = document.createElement('main');

  const aboutCard = document.createElement('div');
  aboutCard.classList.add('mainCard', 'homeCard');

  const p = document.createElement('p');
  p.textContent = 'Discover a world of flavors at Frosty Delights, where ice cream is an art form. Experience an explosion of tastes, carefully blended with natural ingredients. Satisfy your cravings and create your own edible masterpiece.'

  const image = new Image();
  image.src = _src_assets_images_homePage_icecream_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const contactUsText = document.createElement('a');
  contactUsText.textContent = 'Contact Us';
  contactUsText.addEventListener('click', () => {
    const container = document.getElementById('content');
    container.textContent = '';
    const header = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)('contact', container);
    const main = (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.createContactPage)();
    container.appendChild(header);
    container.appendChild(main);
  });

  aboutCard.appendChild(p);
  aboutCard.appendChild(image);
  aboutCard.appendChild(contactUsText);

  main.appendChild(aboutCard);

  return main;
}

/***/ }),

/***/ "./src/components/pages/menuPage.js":
/*!******************************************!*\
  !*** ./src/components/pages/menuPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _src_assets_images_menuPage_icecream1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream1.png */ "./src/assets/images/menuPage/icecream1.png");
/* harmony import */ var _src_assets_images_menuPage_icecream2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream2.png */ "./src/assets/images/menuPage/icecream2.png");
/* harmony import */ var _src_assets_images_menuPage_icecream3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream3.png */ "./src/assets/images/menuPage/icecream3.png");
/* harmony import */ var _src_assets_images_menuPage_icecream4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream4.png */ "./src/assets/images/menuPage/icecream4.png");
/* harmony import */ var _src_assets_images_menuPage_icecream5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream5.png */ "./src/assets/images/menuPage/icecream5.png");
/* harmony import */ var _src_assets_images_menuPage_icecream6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/images/menuPage/icecream6.png */ "./src/assets/images/menuPage/icecream6.png");







function _createIceCreamCard(iceCreamImage, iceCreamTitle, iceCreamDescription) {
  const iceCream = document.createElement('div');
  iceCream.classList.add('iceCreamCard');

  const image = new Image();
  image.src = iceCreamImage;

  const title = document.createElement('h2');
  title.textContent = iceCreamTitle;

  const description = document.createElement('p');
  description.textContent = iceCreamDescription;

  iceCream.appendChild(image);
  iceCream.appendChild(title);
  iceCream.appendChild(description);

  return iceCream;
}

function createMenuPage() {
  const main = document.createElement('main');

  const menuCard = document.createElement('div');
  menuCard.classList.add('mainCard', 'menuCard');

  const iceCream1 = _createIceCreamCard(_src_assets_images_menuPage_icecream1_png__WEBPACK_IMPORTED_MODULE_0__, 'One Ice Cream Ball', 'A delightful single scoop of creamy ice cream, served on a crispy cone for a classic and satisfying treat.');
  menuCard.appendChild(iceCream1);

  const iceCream2 = _createIceCreamCard(_src_assets_images_menuPage_icecream2_png__WEBPACK_IMPORTED_MODULE_1__, 'Three Ice Cream Ball on a Cone', 'A tantalizing trio of ice cream flavors, skillfully balanced on a crispy cone, offering a delightful mix of tastes in every bite.');
  menuCard.appendChild(iceCream2);

  const iceCream3 = _createIceCreamCard(_src_assets_images_menuPage_icecream3_png__WEBPACK_IMPORTED_MODULE_2__, 'Three Ice Cream Ball on a Glass', 'A delightful display of three colorful ice cream scoops, served in an elegant glass for an elevated dessert experience.');
  menuCard.appendChild(iceCream3);

  const iceCream4 = _createIceCreamCard(_src_assets_images_menuPage_icecream4_png__WEBPACK_IMPORTED_MODULE_3__, 'Sundae', 'A decadent delight featuring multiple ice cream scoops, topped with luscious syrups, crunchy nuts, and a cherry on top.');
  menuCard.appendChild(iceCream4);

  const iceCream5 = _createIceCreamCard(_src_assets_images_menuPage_icecream5_png__WEBPACK_IMPORTED_MODULE_4__, 'Popsicle', 'A refreshing frozen treat on a stick, available in various fruity flavors to beat the heat.');
  menuCard.appendChild(iceCream5);

  const iceCream6 = _createIceCreamCard(_src_assets_images_menuPage_icecream6_png__WEBPACK_IMPORTED_MODULE_5__, 'Double Popsicle', 'Twice the delight with two frozen popsicles, a perfect choice for sharing or savoring all to yourself.');
  menuCard.appendChild(iceCream6);

  main.appendChild(menuCard);

  return main;
}

/***/ }),

/***/ "./src/assets/fonts/Budge-Line.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/Budge-Line.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Budge-Line.woff";

/***/ }),

/***/ "./src/assets/fonts/Budge-Regular.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Budge-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Budge-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Budge-Shadow.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Budge-Shadow.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Budge-Shadow.woff";

/***/ }),

/***/ "./src/assets/fonts/BudgePair-Regular.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/BudgePair-Regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "BudgePair-Regular.woff";

/***/ }),

/***/ "./src/assets/images/contactPage/icecreamshop.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/contactPage/icecreamshop.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecreamshop.jpg";

/***/ }),

/***/ "./src/assets/images/homePage/icecream.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/homePage/icecream.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream.jpg";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream1.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream1.png";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream2.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream2.png";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream3.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream3.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream3.png";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream4.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream4.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream4.png";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream5.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream5.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream5.png";

/***/ }),

/***/ "./src/assets/images/menuPage/icecream6.png":
/*!**************************************************!*\
  !*** ./src/assets/images/menuPage/icecream6.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icecream6.png";

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 			"main": 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/homePage.js */ "./src/components/pages/homePage.js");




function component() {
  const container = document.createElement('div');
  container.id = 'content';

  // Create landing page
  const header = (0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)('home', container);
  const main = (0,_components_pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__.createHomePage)();
  
  // Container Append
  container.appendChild(header);
  container.appendChild(main);

  return container;
}

document.body.appendChild(component());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksVUFBVSxPQUFPLE1BQU0sVUFBVSxV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QUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMrQjtBQUNVOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUVBQVk7QUFDN0IsZUFBZSw2RUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2ltYWdlcy9jb250YWN0UGFnZS9lbWFpbC5zdmciLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvbG9jYXRpb24uc3ZnIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RQYWdlL3Bob25lLnN2ZyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9jbGVhblBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL21lbnVQYWdlLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CdWRnZS1TaGFkb3cud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0J1ZGdlLUxpbmUud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0J1ZGdlLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0J1ZGdlUGFpci1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTaGFkb3cgRm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpbmUgRm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlYWRlciBGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVGV4dEZvbnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTlweCkge1xuICAjY29udGVudCBoZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zaGFkb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWU0ZGY7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEM0I4RTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uc2hhZG93IHtcbiAgZm9udC1mYW1pbHk6IFwiU2hhZG93IEZvbnRcIjtcbiAgY29sb3I6ICM2ODgzQkE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQge1xuICBmb250LWZhbWlseTogXCJIZWFkZXIgRm9udFwiO1xuICBjb2xvcjogI0Y5RjlGOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5saW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiTGluZSBGb250XCI7XG4gIGNvbG9yOiAjRTA3MkE0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxubmF2IHtcbiAgZ2FwOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiVGV4dEZvbnRcIjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0Y5RjlGOTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC4ycmVtIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4xZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIHRyYW5zZm9ybSAzMDBtcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG59XG4ubmF2LWl0ZW06aG92ZXI6OmFmdGVyLCAubmF2LWl0ZW06Zm9jdXM6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLnNlbGVjdGVkOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbn1cblxuLm1haW5DYXJkIHtcbiAgd2lkdGg6IGNsYW1wKDQ1MHB4LCA0MHZ3LCA3MDBweCk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDcyQTQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3ZoO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1haW5DYXJkIHAge1xuICBjb2xvcjogI0Y5RjlGOTtcbiAgZm9udC1mYW1pbHk6IFwiVGV4dEZvbnRcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5ob21lQ2FyZCBpbWcge1xuICB3aWR0aDogY2xhbXAoMjUwcHgsIDMwdncsIDMyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaG9tZUNhcmQgYSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRjlGOUY5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWVDYXJkIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xufVxuLmhvbWVDYXJkIGE6aG92ZXI6OmFmdGVyLCAuaG9tZUNhcmQgYTpmb2N1czo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubWVudUNhcmQge1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cblxuLmljZUNyZWFtQ2FyZCB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNGOUY5Rjk7XG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4uaWNlQ3JlYW1DYXJkIHAge1xuICBjb2xvcjogI0UwNzJBNDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uaWNlQ3JlYW1DYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI0UwNzJBNDtcbiAgZm9udC1mYW1pbHk6IFwiVGV4dEZvbnRcIjtcbn1cbi5pY2VDcmVhbUNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmljZUNyZWFtQ2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDcyQTQ7XG59XG4uaWNlQ3JlYW1DYXJkOmhvdmVyIHAsIC5pY2VDcmVhbUNhcmQ6aG92ZXIgaDIge1xuICBjb2xvcjogI0Y5RjlGOTtcbn1cblxuLmNvbnRhY3RDYXJkIGgyIHtcbiAgY29sb3I6ICNGOUY5Rjk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuLmNvbnRhY3RDYXJkIHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmNvbnRhY3RDYXJkIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5jb250YWN0Q2FyZCBpbWcge1xuICB3aWR0aDogbWluKDk1JSwgNTAwcHgpO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXI6IDRweCBzb2xpZCAjRjlGOUY5O1xuICBib3JkZXItcmFkaXVzOiAydmg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY29udGFjdENhcmQgLmluZm9BcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMnJlbTtcbiAgY29sdW1uLWdhcDogMS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSwwQkFBQTtFQUNBLDJEQUFBO0FBQUY7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsMkRBQUE7QUFBRjtBQUVBO0VBQ0UsMEJBQUE7RUFDQSwyREFBQTtBQUFGO0FBRUE7RUFDRSx1QkFBQTtFQUNBLDJEQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UsdUJBQUE7RUFERjtFQUdBO0lBQ0UsYUFBQTtFQURGO0FBQ0Y7QUF3Q0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBdENGOztBQTBDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UseUJBQUE7QUF2Q0Y7O0FBMkNBO0VBQ0UscUJBQUE7RUFDQSx5QkF2RFU7RUF3RFYsa0JBQUE7RUFDQSxnRkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBeENGO0FBeUNFO0VBQ0UsZUFBQTtBQXZDSjs7QUEyQ0E7RUFDRSwwQkFBQTtFQUNBLGNBbkVXO0VBb0VYLGtCQUFBO0FBeENGOztBQTJDQTtFQUNFLDBCQUFBO0VBQ0EsY0F2RU07RUF3RU4sa0JBQUE7RUFDQSxNQUFBO0FBeENGOztBQTJDQTtFQUNFLHdCQUFBO0VBQ0EsY0EvRUs7RUFnRkwsa0JBQUE7RUFDQSxNQUFBO0FBeENGOztBQTRDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsaUJBQUE7RUF2RkEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBTk07RUFPTixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQStDRjtBQTlDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkF5RXNCO0VBeEV0QixVQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQWdESjtBQTlDRTtFQUVFLFVBQUE7RUFDQSwrQkFBQTtBQStDSjs7QUFxQkE7RUFDRSx5QkFoR007RUFpR04sVUFBQTtFQUNBLCtCQUFBO0FBbEJGOztBQXNCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0FBbkJGOztBQXVCQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFwSEs7RUFxSEwsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxjQTdITTtFQThITix1QkFBQTtFQUNBLGlCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsaUJBQUE7RUFwSUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBTk07RUFPTixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWlIRjtBQWhIRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFuQkk7RUFvQkosVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUFrSEo7QUFoSEU7RUFFRSxVQUFBO0VBQ0EsK0JBQUE7QUFpSEo7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBOUpNO0VBK0pOLHFCQUFBO0FBRUY7QUFERTtFQUNFLGNBbEtHO0VBbUtILGlCQUFBO0FBR0o7QUFERTtFQUNFLGVBQUE7RUFDQSxjQXZLRztFQXdLSCx1QkFBQTtBQUdKO0FBREU7RUFDRSxZQUFBO0FBR0o7QUFERTtFQUNFLHlCQTlLRztBQWlMUDtBQUZJO0VBQ0UsY0EvS0U7QUFtTFI7O0FBR0U7RUFDRSxjQXZMSTtFQXdMSixpQkFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0FBQUo7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0ZBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gRm9udHNcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93IEZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0J1ZGdlLVNoYWRvdy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMaW5lIEZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0J1ZGdlLUxpbmUud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVhZGVyIEZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0J1ZGdlLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0J1ZGdlUGFpci1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI5OXB4KSB7XFxuICAjY29udGVudCBoZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaGFkb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4vLyBWYXJpYWJsZXNcXG4kZGFyay1ibHVlOiAjM0QzQjhFO1xcbiRsaWdodC1ibHVlOiAjNjg4M0JBO1xcbiRwaW5rOiAjRTA3MkE0O1xcbiR3aGl0ZTogI0Y5RjlGOTtcXG5cXG4vLyBIb3ZlciBhbmltYXRpb24gbWl4aW5cXG5AbWl4aW4gaG92ZXJBbmltYXRpb24oJHVuZGVybGluZUNvbG9yKSB7XFxuICBmb250LWZhbWlseTogJ1RleHRGb250JztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gICY6OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDAuMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lQ29sb3I7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIHRyYW5zZm9ybSAzMDBtcztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxuICAmOmhvdmVyOjphZnRlcixcXG4gICY6Zm9jdXM6OmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLy8gUmVzZXRcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vLyBCb2R5XFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWU0ZGY7XFxufVxcblxcbi8vIFxcXCJGcm9zdHkgRGVsaWdodHNcXFwiIGhlYWRlciB0ZXh0XFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XFxuXFxuLnNoYWRvdyB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvdyBGb250JztcXG4gIGNvbG9yOiAkbGlnaHQtYmx1ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgZm9udC1mYW1pbHk6ICdIZWFkZXIgRm9udCc7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubGluZSB7XFxuICBmb250LWZhbWlseTogJ0xpbmUgRm9udCc7XFxuICBjb2xvcjogJHBpbms7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi8vIE5hdiBCYXJcXG5uYXYge1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIEBpbmNsdWRlIGhvdmVyQW5pbWF0aW9uKGhvdHBpbmspO1xcbn1cXG5cXG4uc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4vLyBNYWluIENvbnRhaW5lciAoQ29udGFpbmVyIGJlbG93IGhlYWRlcilcXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLy8gSG9tZSBQYWdlXFxuLm1haW5DYXJkIHtcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgNDB2dywgNzAwcHgpO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XFxufVxcblxcbi5tYWluQ2FyZCBwIHtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1RleHRGb250JztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaG9tZUNhcmQgaW1nIHtcXG4gIHdpZHRoOiBjbGFtcCgyNTBweCwgMzB2dywgMzIwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaG9tZUNhcmQgYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIEBpbmNsdWRlIGhvdmVyQW5pbWF0aW9uKCR3aGl0ZSk7XFxufVxcblxcbi8vIE1lbnUgUGFnZVxcbi5tZW51Q2FyZCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5pY2VDcmVhbUNhcmQge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggJHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIHAge1xcbiAgICBjb2xvcjogJHBpbms7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiAkcGluaztcXG4gICAgZm9udC1mYW1pbHk6ICdUZXh0Rm9udCc7XFxuICB9XFxuICBpbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XFxuICAgIHAsIGgyIHtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIENvbnRhY3QgUGFnZVxcbi5jb250YWN0Q2FyZCB7XFxuICBoMiB7XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgc3ZnIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBpbWcge1xcbiAgICB3aWR0aDogbWluKDk1JSw1MDBweCk7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICR3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgfVxcbn1cXG5cXG4uY29udGFjdENhcmQgLmluZm9BcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDJyZW07XFxuICBjb2x1bW4tZ2FwOiAxLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBpZD1cXFwiU1ZHUmVwb19iZ0NhcnJpZXJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMFxcXCI+PC9nPjxnIGlkPVxcXCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9nPjxnIGlkPVxcXCJTVkdSZXBvX2ljb25DYXJyaWVyXFxcIj48cGF0aCBkPVxcXCJNMTYgMTJDMTYgMTQuMjA5MSAxNC4yMDkxIDE2IDEyIDE2QzkuNzkwODYgMTYgOCAxNC4yMDkxIDggMTJDOCA5Ljc5MDg2IDkuNzkwODYgOCAxMiA4QzE0LjIwOTEgOCAxNiA5Ljc5MDg2IDE2IDEyWk0xNiAxMlYxMy41QzE2IDE0Ljg4MDcgMTcuMTE5MyAxNiAxOC41IDE2VjE2QzE5Ljg4MDcgMTYgMjEgMTQuODgwNyAyMSAxMy41VjEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxSDE2XFxcIiBzdHJva2U9XFxcIiNGOUY5RjlcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiLTQgMCAzMiAzMlxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4bWxuczpza2V0Y2g9XFxcImh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9uc1xcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCI+PGcgaWQ9XFxcIlNWR1JlcG9fYmdDYXJyaWVyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjBcXFwiPjwvZz48ZyBpZD1cXFwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjwvZz48ZyBpZD1cXFwiU1ZHUmVwb19pY29uQ2FycmllclxcXCI+PHRpdGxlPmxvY2F0aW9uPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoIEJldGEuPC9kZXNjPjxkZWZzPjwvZGVmcz48ZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBza2V0Y2g6dHlwZT1cXFwiTVNQYWdlXFxcIj48ZyBpZD1cXFwiSWNvbi1TZXRcXFwiIHNrZXRjaDp0eXBlPVxcXCJNU0xheWVyR3JvdXBcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0xMDQuMDAwMDAwLCAtNDExLjAwMDAwMClcXFwiIGZpbGw9XFxcIiNGOUY5RjlcXFwiPjxwYXRoIGQ9XFxcIk0xMTYsNDI2IEMxMTQuMzQzLDQyNiAxMTMsNDI0LjY1NyAxMTMsNDIzIEMxMTMsNDIxLjM0MyAxMTQuMzQzLDQyMCAxMTYsNDIwIEMxMTcuNjU3LDQyMCAxMTksNDIxLjM0MyAxMTksNDIzIEMxMTksNDI0LjY1NyAxMTcuNjU3LDQyNiAxMTYsNDI2IEwxMTYsNDI2IFogTTExNiw0MTggQzExMy4yMzksNDE4IDExMSw0MjAuMjM4IDExMSw0MjMgQzExMSw0MjUuNzYyIDExMy4yMzksNDI4IDExNiw0MjggQzExOC43NjEsNDI4IDEyMSw0MjUuNzYyIDEyMSw0MjMgQzEyMSw0MjAuMjM4IDExOC43NjEsNDE4IDExNiw0MTggTDExNiw0MTggWiBNMTE2LDQ0MCBDMTE0LjMzNyw0NDAuMDA5IDEwNiw0MjcuMTgxIDEwNiw0MjMgQzEwNiw0MTcuNDc4IDExMC40NzcsNDEzIDExNiw0MTMgQzEyMS41MjMsNDEzIDEyNiw0MTcuNDc4IDEyNiw0MjMgQzEyNiw0MjcuMTI1IDExNy42MzcsNDQwLjAwOSAxMTYsNDQwIEwxMTYsNDQwIFogTTExNiw0MTEgQzEwOS4zNzMsNDExIDEwNCw0MTYuMzczIDEwNCw0MjMgQzEwNCw0MjguMDE4IDExNC4wMDUsNDQzLjAxMSAxMTYsNDQzIEMxMTcuOTY0LDQ0My4wMTEgMTI4LDQyNy45NSAxMjgsNDIzIEMxMjgsNDE2LjM3MyAxMjIuNjI3LDQxMSAxMTYsNDExIEwxMTYsNDExIFpcXFwiIGlkPVxcXCJsb2NhdGlvblxcXCIgc2tldGNoOnR5cGU9XFxcIk1TU2hhcGVHcm91cFxcXCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxnIGlkPVxcXCJTVkdSZXBvX2JnQ2FycmllclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIwXFxcIj48L2c+PGcgaWQ9XFxcIlNWR1JlcG9fdHJhY2VyQ2FycmllclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L2c+PGcgaWQ9XFxcIlNWR1JlcG9faWNvbkNhcnJpZXJcXFwiPjxwYXRoIGQ9XFxcIk0xNC4zMzA4IDE1Ljk0MDJMMTUuNjYwOCAxNC42MTAxQzE1Ljg2NTUgMTQuNDAzIDE2LjEwOTIgMTQuMjM4NCAxNi4zNzc4IDE0LjEyNjJDMTYuNjQ2NSAxNC4wMTQgMTYuOTM0NyAxMy45NTYzIDE3LjIyNTggMTMuOTU2M0MxNy41MTcgMTMuOTU2MyAxNy44MDUyIDE0LjAxNCAxOC4wNzM5IDE0LjEyNjJDMTguMzQyNSAxNC4yMzg0IDE4LjU4NjIgMTQuNDAzIDE4Ljc5MDggMTQuNjEwMUwyMC4zNTA4IDE2LjE3MDJDMjAuNTU3OSAxNi4zNzQ4IDIwLjcyMjQgMTYuNjE4MyAyMC44MzQ2IDE2Ljg4N0MyMC45NDY4IDE3LjE1NTYgMjEuMDA0NiAxNy40NDQgMjEuMDA0NiAxNy43MzUxQzIxLjAwNDYgMTguMDI2MyAyMC45NDY4IDE4LjMxNDYgMjAuODM0NiAxOC41ODMzQzIwLjcyMjQgMTguODUxOSAyMC41NTc5IDE5LjA5NTQgMjAuMzUwOCAxOS4zTDE5LjY0MDggMjAuMDJDMTkuMTUxNiAyMC41MTQgMTguNTE4OSAyMC44NDEgMTcuODMyOSAyMC45NTQxQzE3LjE0NjkgMjEuMDY3MiAxNi40NDI3IDIwLjk2MDkgMTUuODIwOCAyMC42NTAxQzEwLjQ2OTEgMTcuODk1MiA2LjExMDA4IDEzLjUzOTYgMy4zNTA4MyA4LjE5MDE5QzMuMDM5NzYgNy41Njc2MSAyLjkzNDE0IDYuODYyNDIgMy4wNDkxNCA2LjE3NjAzQzMuMTY0MTQgNS40ODk2MyAzLjQ5Mzg0IDQuODU3MzEgMy45OTA4NSA0LjM3MDEyTDQuNzAwODEgMy42NTAxNUM1LjExNjc0IDMuMjM2NzMgNS42NzkzNyAzLjAwNDY0IDYuMjY1ODEgMy4wMDQ2NEM2Ljg1MjI1IDMuMDA0NjQgNy40MTQ4OCAzLjIzNjczIDcuODMwODEgMy42NTAxNUw5LjQwMDgyIDUuMjIwMjFDOS44MTQyNCA1LjYzNjE1IDEwLjA0NjMgNi4xOTg3MSAxMC4wNDYzIDYuNzg1MTZDMTAuMDQ2MyA3LjM3MTYgOS44MTQyNCA3LjkzNDE2IDkuNDAwODIgOC4zNTAxTDguMDcwOCA5LjY4MDE4QzguOTUwMjEgMTAuODY5NyA5LjkxNjE3IDExLjk5MjYgMTAuOTYwOCAxMy4wNEMxMS45OTk0IDE0LjA4MDQgMTMuMTE2IDE1LjA0IDE0LjMwMDggMTUuOTEwMkwxNC4zMzA4IDE1Ljk0MDJaXFxcIiBzdHJva2U9XFxcIiNGOUY5RjlcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vcGFnZXMvbWVudVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vcGFnZXMvY29udGFjdFBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUGFnZShob21lLCBtZW51LCBjb250YWN0LCBzZWxlY3RlZCwgY29udGFpbmVyKSB7XG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2VsZWN0ZWQgIT09ICdob21lJyl7XG4gICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignaG9tZScsIGNvbnRhaW5lcik7XG4gICAgICBjb25zdCBtYWluID0gY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihzZWxlY3RlZCAhPT0gJ21lbnUnKXtcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdtZW51JywgY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfVxuICB9KTtcblxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHNlbGVjdGVkICE9PSAnY29udGFjdCcpe1xuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoJ2NvbnRhY3QnLCBjb250YWluZXIpO1xuICAgICAgY29uc3QgbWFpbiA9IGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IGNsZWFuUGFnZSB9IGZyb20gXCIuL2NsZWFuUGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoc2VsZWN0ZWQsIGNvbnRhaW5lcikge1xuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgaDFTaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMVNoYWRvdy50ZXh0Q29udGVudCA9ICdGcm9zdHkgRGVsaWdodHMnO1xuICBoMVNoYWRvdy5jbGFzc0xpc3QuYWRkKCdzaGFkb3cnKTtcblxuICBjb25zdCBoMVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMVRleHQudGV4dENvbnRlbnQgPSAnRnJvc3R5IERlbGlnaHRzJztcbiAgaDFUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcblxuICBjb25zdCBoMUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMUxpbmUudGV4dENvbnRlbnQgPSAnRnJvc3R5IERlbGlnaHRzJztcbiAgaDFMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDFTaGFkb3cpO1xuICBoMVNoYWRvdy5hcHBlbmRDaGlsZChoMVRleHQpO1xuICBoMVNoYWRvdy5hcHBlbmRDaGlsZChoMUxpbmUpO1xuXG4gIC8vIE5hdiBCYXJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjbGVhblBhZ2UoaG9tZSwgbWVudSwgY29udGFjdCwgc2VsZWN0ZWQsIGNvbnRhaW5lcik7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcblxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG4gIHN3aXRjaCAoc2VsZWN0ZWQpIHtcbiAgICBjYXNlICdob21lJzpcbiAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGFjdCc6XG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHBob25lIGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9jb250YWN0UGFnZS9waG9uZS5zdmcnXG5pbXBvcnQgZW1haWwgZnJvbSAnL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RQYWdlL2VtYWlsLnN2ZydcbmltcG9ydCBsb2NhdGlvbiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvbG9jYXRpb24uc3ZnJ1xuaW1wb3J0IHNob3BJbWFnZSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvaWNlY3JlYW1zaG9wLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDYXJkLmNsYXNzTGlzdC5hZGQoJ21haW5DYXJkJywgJ2NvbnRhY3RDYXJkJyk7XG5cbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGFjdFVzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG5cbiAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0FyZWEuY2xhc3NMaXN0LmFkZCgnaW5mb0FyZWEnKTtcbiAgXG4gIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gJyg1NTUpIDEyMy00NTY3J1xuICBcbiAgY29uc3QgZW1haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbWFpbFRleHQudGV4dENvbnRlbnQgPSAnZnJvc3R5ZGVsaWdodHNAaWNlY3JlYW0uY29tJ1xuICBcbiAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnMTIzIFBhbG0gU3RyZWV0LCBNaWFtaSwgRkwgMzMxMDEsIFVuaXRlZCBTdGF0ZXMnXG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gc2hvcEltYWdlO1xuICBcbiAgaW5mb0FyZWEuaW5uZXJIVE1MID0gcGhvbmU7XG4gIGluZm9BcmVhLmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG4gIGluZm9BcmVhLmlubmVySFRNTCArPSBlbWFpbDtcbiAgaW5mb0FyZWEuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcbiAgaW5mb0FyZWEuaW5uZXJIVE1MICs9IGxvY2F0aW9uO1xuICBpbmZvQXJlYS5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICBcbiAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RVcyk7XG4gIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChpbmZvQXJlYSk7XG4gIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENhcmQpO1xuXG4gIHJldHVybiBtYWluO1xufSIsImltcG9ydCBpY2VDcmVhbWltYWdlIGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9ob21lUGFnZS9pY2VjcmVhbS5qcGcnXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuLi9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAvLyBNYWluXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgY29uc3QgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluQ2FyZCcsICdob21lQ2FyZCcpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgYSB3b3JsZCBvZiBmbGF2b3JzIGF0IEZyb3N0eSBEZWxpZ2h0cywgd2hlcmUgaWNlIGNyZWFtIGlzIGFuIGFydCBmb3JtLiBFeHBlcmllbmNlIGFuIGV4cGxvc2lvbiBvZiB0YXN0ZXMsIGNhcmVmdWxseSBibGVuZGVkIHdpdGggbmF0dXJhbCBpbmdyZWRpZW50cy4gU2F0aXNmeSB5b3VyIGNyYXZpbmdzIGFuZCBjcmVhdGUgeW91ciBvd24gZWRpYmxlIG1hc3RlcnBpZWNlLidcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBpY2VDcmVhbWltYWdlO1xuXG4gIGNvbnN0IGNvbnRhY3RVc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnRhY3RVc1RleHQudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIGNvbnRhY3RVc1RleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoJ2NvbnRhY3QnLCBjb250YWluZXIpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgfSk7XG5cbiAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKHApO1xuICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFVzVGV4dCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENhcmQpO1xuXG4gIHJldHVybiBtYWluO1xufSIsImltcG9ydCBpY2VDcmVhbUltYWdlMSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0xLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlMiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0yLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlMyBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0zLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNCBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW00LnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW01LnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW02LnBuZydcblxuZnVuY3Rpb24gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlLCBpY2VDcmVhbVRpdGxlLCBpY2VDcmVhbURlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGljZUNyZWFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGljZUNyZWFtLmNsYXNzTGlzdC5hZGQoJ2ljZUNyZWFtQ2FyZCcpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGljZUNyZWFtSW1hZ2U7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGljZUNyZWFtVGl0bGU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaWNlQ3JlYW1EZXNjcmlwdGlvbjtcblxuICBpY2VDcmVhbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGljZUNyZWFtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaWNlQ3JlYW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBpY2VDcmVhbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21haW5DYXJkJywgJ21lbnVDYXJkJyk7XG5cbiAgY29uc3QgaWNlQ3JlYW0xID0gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlMSwgJ09uZSBJY2UgQ3JlYW0gQmFsbCcsICdBIGRlbGlnaHRmdWwgc2luZ2xlIHNjb29wIG9mIGNyZWFteSBpY2UgY3JlYW0sIHNlcnZlZCBvbiBhIGNyaXNweSBjb25lIGZvciBhIGNsYXNzaWMgYW5kIHNhdGlzZnlpbmcgdHJlYXQuJyk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKGljZUNyZWFtMSk7XG5cbiAgY29uc3QgaWNlQ3JlYW0yID0gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlMiwgJ1RocmVlIEljZSBDcmVhbSBCYWxsIG9uIGEgQ29uZScsICdBIHRhbnRhbGl6aW5nIHRyaW8gb2YgaWNlIGNyZWFtIGZsYXZvcnMsIHNraWxsZnVsbHkgYmFsYW5jZWQgb24gYSBjcmlzcHkgY29uZSwgb2ZmZXJpbmcgYSBkZWxpZ2h0ZnVsIG1peCBvZiB0YXN0ZXMgaW4gZXZlcnkgYml0ZS4nKTtcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW0yKTtcblxuICBjb25zdCBpY2VDcmVhbTMgPSBfY3JlYXRlSWNlQ3JlYW1DYXJkKGljZUNyZWFtSW1hZ2UzLCAnVGhyZWUgSWNlIENyZWFtIEJhbGwgb24gYSBHbGFzcycsICdBIGRlbGlnaHRmdWwgZGlzcGxheSBvZiB0aHJlZSBjb2xvcmZ1bCBpY2UgY3JlYW0gc2Nvb3BzLCBzZXJ2ZWQgaW4gYW4gZWxlZ2FudCBnbGFzcyBmb3IgYW4gZWxldmF0ZWQgZGVzc2VydCBleHBlcmllbmNlLicpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpY2VDcmVhbTMpO1xuXG4gIGNvbnN0IGljZUNyZWFtNCA9IF9jcmVhdGVJY2VDcmVhbUNhcmQoaWNlQ3JlYW1JbWFnZTQsICdTdW5kYWUnLCAnQSBkZWNhZGVudCBkZWxpZ2h0IGZlYXR1cmluZyBtdWx0aXBsZSBpY2UgY3JlYW0gc2Nvb3BzLCB0b3BwZWQgd2l0aCBsdXNjaW91cyBzeXJ1cHMsIGNydW5jaHkgbnV0cywgYW5kIGEgY2hlcnJ5IG9uIHRvcC4nKTtcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW00KTtcblxuICBjb25zdCBpY2VDcmVhbTUgPSBfY3JlYXRlSWNlQ3JlYW1DYXJkKGljZUNyZWFtSW1hZ2U1LCAnUG9wc2ljbGUnLCAnQSByZWZyZXNoaW5nIGZyb3plbiB0cmVhdCBvbiBhIHN0aWNrLCBhdmFpbGFibGUgaW4gdmFyaW91cyBmcnVpdHkgZmxhdm9ycyB0byBiZWF0IHRoZSBoZWF0LicpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpY2VDcmVhbTUpO1xuXG4gIGNvbnN0IGljZUNyZWFtNiA9IF9jcmVhdGVJY2VDcmVhbUNhcmQoaWNlQ3JlYW1JbWFnZTYsICdEb3VibGUgUG9wc2ljbGUnLCAnVHdpY2UgdGhlIGRlbGlnaHQgd2l0aCB0d28gZnJvemVuIHBvcHNpY2xlcywgYSBwZXJmZWN0IGNob2ljZSBmb3Igc2hhcmluZyBvciBzYXZvcmluZyBhbGwgdG8geW91cnNlbGYuJyk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKGljZUNyZWFtNik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XG5cbiAgcmV0dXJuIG1haW47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvaG9tZVBhZ2UuanMnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pZCA9ICdjb250ZW50JztcblxuICAvLyBDcmVhdGUgbGFuZGluZyBwYWdlXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignaG9tZScsIGNvbnRhaW5lcik7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVIb21lUGFnZSgpO1xuICBcbiAgLy8gQ29udGFpbmVyIEFwcGVuZFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==