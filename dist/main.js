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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content {
  height: 100vh;
}

body {
  background-color: #dae4df;
}

header {
  width: 100vw;
  height: 12%;
  background-color: #3D3B8E;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
header h1 {
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 10rem;
  transform: translate(0, -50%);
}

.shadow {
  font-family: "Shadow Font";
  color: #6883BA;
}

.text {
  font-family: "Header Font";
  color: #F9F9F9;
}

.line {
  font-family: "Line Font";
  color: #E072A4;
}

nav {
  margin-right: 15rem;
  width: 30%;
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
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mainCard {
  width: 40vw;
  padding: 1.5rem;
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
  width: 20rem;
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
  width: 500px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;EACE,0BAAA;EACA,2DAAA;AAAF;AAEA;EACE,wBAAA;EACA,2DAAA;AAAF;AAEA;EACE,0BAAA;EACA,2DAAA;AAAF;AAEA;EACE,uBAAA;EACA,2DAAA;AAAF;AAuCA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AArCF;;AAyCA;EACE,aAAA;AAtCF;;AAyCA;EACE,yBAAA;AAtCF;;AA0CA;EACE,YAAA;EACA,WAAA;EACA,yBAtDU;EAuDV,kBAAA;EACA,gFAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAvCF;AAwCE;EACE,eAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,6BAAA;AAtCJ;;AA0CA;EACE,0BAAA;EACA,cAtEW;AA+Bb;;AA0CA;EACE,0BAAA;EACA,cAzEM;AAkCR;;AA0CA;EACE,wBAAA;EACA,cA/EK;AAwCP;;AA2CA;EACE,mBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AAxCF;;AA2CA;EACE,iBAAA;EAtFA,uBAAA;EACA,qBAAA;EACA,cANM;EAON,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AA+CF;AA9CE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,yBAwEsB;EAvEtB,UAAA;EACA,0CAAA;EACA,mCAAA;AAgDJ;AA9CE;EAEE,UAAA;EACA,+BAAA;AA+CJ;;AAoBA;EACE,yBA/FM;EAgGN,UAAA;EACA,+BAAA;AAjBF;;AAqBA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAlBF;;AAsBA;EACE,WAAA;EACA,eAAA;EACA,yBAlHK;EAmHL,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;EACA,gFAAA;AAnBF;;AAsBA;EACE,cA3HM;EA4HN,uBAAA;EACA,iBAAA;AAnBF;;AAsBA;EACE,YAAA;EACA,kBAAA;AAnBF;;AAsBA;EACE,iBAAA;EAlIA,uBAAA;EACA,qBAAA;EACA,cANM;EAON,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAgHF;AA/GE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,yBAnBI;EAoBJ,UAAA;EACA,0CAAA;EACA,mCAAA;AAiHJ;AA/GE;EAEE,UAAA;EACA,+BAAA;AAgHJ;;AAAA;EACE,aAAA;EACA,aAAA;EACA,2DAAA;EACA,SAAA;AAGF;;AAAA;EACE,yBAAA;EACA,kBAAA;EACA,gFAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBA3JM;EA4JN,qBAAA;AAGF;AAFE;EACE,cA/JG;EAgKH,iBAAA;AAIJ;AAFE;EACE,eAAA;EACA,cApKG;EAqKH,uBAAA;AAIJ;AAFE;EACE,YAAA;AAIJ;AAFE;EACE,yBA3KG;AA+KP;AAHI;EACE,cA5KE;AAiLR;;AAEE;EACE,cApLI;EAqLJ,iBAAA;AACJ;AACE;EACE,WAAA;AACJ;AACE;EACE,iBAAA;AACJ;AACE;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gFAAA;AACJ;;AAGA;EACE,aAAA;EACA,+BAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AAAF","sourcesContent":["// Fonts\n@font-face {\n  font-family: 'Shadow Font';\n  src: url('./assets/fonts/Budge-Shadow.woff') format('woff');\n}\n@font-face {\n  font-family: 'Line Font';\n  src: url('./assets/fonts/Budge-Line.woff') format('woff');\n}\n@font-face {\n  font-family: 'Header Font';\n  src: url('./assets/fonts/Budge-Regular.woff') format('woff');\n}\n@font-face {\n  font-family: 'TextFont';\n  src: url('./assets/fonts/BudgePair-Regular.woff') format('woff');\n}\n\n// Variables\n$dark-blue: #3D3B8E;\n$light-blue: #6883BA;\n$pink: #E072A4;\n$white: #F9F9F9;\n\n// Hover animation mixin\n@mixin hoverAnimation($underlineColor) {\n  font-family: 'TextFont';\n  text-decoration: none;\n  color: $white;\n  display: block;\n  position: relative;\n  padding: 0.2rem 0;\n  overflow: hidden;\n  cursor: pointer;\n  &::after{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.1em;\n    background-color: $underlineColor;\n    opacity: 1;\n    transition: opacity 300ms, transform 300ms;\n    transform: translate3d(-100%, 0, 0);\n  }\n  &:hover::after,\n  &:focus::after {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n// Reset\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n// Body\n#content {\n  height: 100vh;\n}\n\nbody {\n  background-color: #dae4df;\n}\n\n// \"Frosty Delights\" header text\nheader {\n  width: 100vw;\n  height: 12%;\n  background-color: $dark-blue;\n  position: relative;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  h1 {\n    font-size: 4rem;\n    position: absolute;\n    top: 50%;\n    left: 10rem;\n    transform: translate(0, -50%);\n  }\n}\n\n.shadow {\n  font-family: 'Shadow Font';\n  color: $light-blue;\n}\n\n.text {\n  font-family: 'Header Font';\n  color: $white;\n}\n\n.line {\n  font-family: 'Line Font';\n  color: $pink;\n}\n\n// Nav Bar\nnav {\n  margin-right: 15rem;\n  width: 30%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.nav-item {\n  font-size: 1.8rem;\n  @include hoverAnimation(hotpink);\n}\n\n.selected::after {\n  background-color: $white;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n// Main Container (Container below header)\nmain {\n  height: 88%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n// Home Page\n.mainCard {\n  width: 40vw;\n  padding: 1.5rem;\n  background-color: $pink;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 3vh;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.mainCard p {\n  color: $white;\n  font-family: 'TextFont';\n  font-size: 1.5rem;\n}\n\n.homeCard img {\n  width: 20rem;\n  border-radius: 50%;\n}\n\n.homeCard a {\n  font-size: 1.5rem;\n  @include hoverAnimation($white);\n}\n\n// Menu Page\n.menuCard {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.iceCreamCard {\n  border: solid 2px $white;\n  border-radius: 2vh;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  background-color: $white;\n  transition: 0.3s ease;\n  p {\n    color: $pink;\n    font-size: 0.8rem;\n  }\n  h2 {\n    font-size: 1rem;\n    color: $pink;\n    font-family: 'TextFont';\n  }\n  img {\n    width: 100px;\n  }\n  &:hover {\n    background-color: $pink;\n    p, h2 {\n      color: $white;\n    }\n  }\n}\n\n// Contact Page\n.contactCard {\n  h2 {\n    color: $white;\n    font-size: 2.5rem;\n  }\n  svg {\n    width: 50px;\n  }\n  p {\n    font-size: 1.5rem;\n  }\n  img {\n    width: 500px;\n    margin-top: 1rem;\n    border: 4px solid $white;\n    border-radius: 2vh;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  }\n}\n\n.contactCard .infoArea {\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  align-items: center;\n  row-gap: 2rem;\n  column-gap: 1.5rem;\n}"],"sourceRoot":""}]);
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
  header.appendChild(h1Text);
  header.appendChild(h1Line);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsK0NBQStDLCtCQUErQixnRUFBZ0UsR0FBRyxjQUFjLDZCQUE2Qiw4REFBOEQsR0FBRyxjQUFjLCtCQUErQixpRUFBaUUsR0FBRyxjQUFjLDRCQUE0QixxRUFBcUUsR0FBRyxzQ0FBc0MsdUJBQXVCLGlCQUFpQixrQkFBa0Isc0VBQXNFLDRCQUE0QiwwQkFBMEIsa0JBQWtCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsYUFBYSxrQkFBa0IseUJBQXlCLGdCQUFnQixjQUFjLGtCQUFrQixvQkFBb0Isd0NBQXdDLGlCQUFpQixpREFBaUQsMENBQTBDLEtBQUssdUNBQXVDLGlCQUFpQixzQ0FBc0MsS0FBSyxHQUFHLGlCQUFpQixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLFVBQVUsOEJBQThCLEdBQUcsZ0RBQWdELGlCQUFpQixnQkFBZ0IsaUNBQWlDLHVCQUF1QixpRkFBaUYsa0JBQWtCLDhCQUE4Qix3QkFBd0IsUUFBUSxzQkFBc0IseUJBQXlCLGVBQWUsa0JBQWtCLG9DQUFvQyxLQUFLLEdBQUcsYUFBYSwrQkFBK0IsdUJBQXVCLEdBQUcsV0FBVywrQkFBK0Isa0JBQWtCLEdBQUcsV0FBVyw2QkFBNkIsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3QixlQUFlLGtCQUFrQixtQ0FBbUMsR0FBRyxlQUFlLHNCQUFzQixxQ0FBcUMsR0FBRyxzQkFBc0IsNkJBQTZCLGVBQWUsb0NBQW9DLEdBQUcsc0RBQXNELGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyw2QkFBNkIsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyx1QkFBdUIsaUZBQWlGLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLG9DQUFvQyxHQUFHLDZCQUE2QixrQkFBa0Isa0JBQWtCLGdFQUFnRSxjQUFjLEdBQUcsbUJBQW1CLDZCQUE2Qix1QkFBdUIsaUZBQWlGLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsNkJBQTZCLDBCQUEwQixPQUFPLG1CQUFtQix3QkFBd0IsS0FBSyxRQUFRLHNCQUFzQixtQkFBbUIsOEJBQThCLEtBQUssU0FBUyxtQkFBbUIsS0FBSyxhQUFhLDhCQUE4QixhQUFhLHNCQUFzQixPQUFPLEtBQUssR0FBRyxtQ0FBbUMsUUFBUSxvQkFBb0Isd0JBQXdCLEtBQUssU0FBUyxrQkFBa0IsS0FBSyxPQUFPLHdCQUF3QixLQUFLLFNBQVMsbUJBQW1CLHVCQUF1QiwrQkFBK0IseUJBQXlCLG1GQUFtRixLQUFLLEdBQUcsNEJBQTRCLGtCQUFrQixvQ0FBb0Msd0JBQXdCLGtCQUFrQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDNWhNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNEk7QUFDNUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlzRjtBQUM5RyxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNVO0FBQ0E7QUFDTTs7QUFFakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscURBQVk7QUFDakMsbUJBQW1CLCtEQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFZO0FBQ2pDLG1CQUFtQiwrREFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBWTtBQUNqQyxtQkFBbUIscUVBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ25Dd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxxREFBUzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdENEQ7QUFDQTtBQUNNO0FBQ007O0FBRWpFO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDRFQUFTO0FBQ3ZCO0FBQ0EsdUJBQXVCLGlGQUFLO0FBQzVCO0FBQ0Esd0JBQXdCLGlGQUFLO0FBQzdCO0FBQ0Esd0JBQXdCLG9GQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NvRTtBQUMzQjtBQUNTOztBQUUzQztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxxRUFBYTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBWTtBQUMvQixpQkFBaUIsK0RBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3NFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0Msc0VBQWM7QUFDdEQ7O0FBRUEsd0NBQXdDLHNFQUFjO0FBQ3REOztBQUVBLHdDQUF3QyxzRUFBYztBQUN0RDs7QUFFQSx3Q0FBd0Msc0VBQWM7QUFDdEQ7O0FBRUEsd0NBQXdDLHNFQUFjO0FBQ3REOztBQUVBLHdDQUF3QyxzRUFBYztBQUN0RDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQytCO0FBQ1U7O0FBRS9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtRUFBWTtBQUM3QixlQUFlLDZFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RQYWdlL2VtYWlsLnN2ZyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2ltYWdlcy9jb250YWN0UGFnZS9sb2NhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvcGhvbmUuc3ZnIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL2NsZWFuUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcGFnZXMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcGFnZXMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0J1ZGdlLVNoYWRvdy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQnVkZ2UtTGluZS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQnVkZ2UtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQnVkZ2VQYWlyLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNoYWRvdyBGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGluZSBGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVhZGVyIEZvbnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTRkZjtcbn1cblxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEM0I4RTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTByZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uc2hhZG93IHtcbiAgZm9udC1mYW1pbHk6IFwiU2hhZG93IEZvbnRcIjtcbiAgY29sb3I6ICM2ODgzQkE7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVhZGVyIEZvbnRcIjtcbiAgY29sb3I6ICNGOUY5Rjk7XG59XG5cbi5saW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiTGluZSBGb250XCI7XG4gIGNvbG9yOiAjRTA3MkE0O1xufVxuXG5uYXYge1xuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRjlGOUY5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdi1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgdHJhbnNmb3JtIDMwMG1zO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbn1cbi5uYXYtaXRlbTpob3Zlcjo6YWZ0ZXIsIC5uYXYtaXRlbTpmb2N1czo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogODglO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5DYXJkIHtcbiAgd2lkdGg6IDQwdnc7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwNzJBNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAzdmg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubWFpbkNhcmQgcCB7XG4gIGNvbG9yOiAjRjlGOUY5O1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmhvbWVDYXJkIGltZyB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaG9tZUNhcmQgYSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRjlGOUY5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWVDYXJkIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xufVxuLmhvbWVDYXJkIGE6aG92ZXI6OmFmdGVyLCAuaG9tZUNhcmQgYTpmb2N1czo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubWVudUNhcmQge1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xufVxuXG4uaWNlQ3JlYW1DYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI0Y5RjlGOTtcbiAgYm9yZGVyLXJhZGl1czogMnZoO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbi5pY2VDcmVhbUNhcmQgcCB7XG4gIGNvbG9yOiAjRTA3MkE0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5pY2VDcmVhbUNhcmQgaDIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjRTA3MkE0O1xuICBmb250LWZhbWlseTogXCJUZXh0Rm9udFwiO1xufVxuLmljZUNyZWFtQ2FyZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4uaWNlQ3JlYW1DYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwNzJBNDtcbn1cbi5pY2VDcmVhbUNhcmQ6aG92ZXIgcCwgLmljZUNyZWFtQ2FyZDpob3ZlciBoMiB7XG4gIGNvbG9yOiAjRjlGOUY5O1xufVxuXG4uY29udGFjdENhcmQgaDIge1xuICBjb2xvcjogI0Y5RjlGOTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4uY29udGFjdENhcmQgc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uY29udGFjdENhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNvbnRhY3RDYXJkIGltZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiA0cHggc29saWQgI0Y5RjlGOTtcbiAgYm9yZGVyLXJhZGl1czogMnZoO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRhY3RDYXJkIC5pbmZvQXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDJyZW07XG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsMEJBQUE7RUFDQSwyREFBQTtBQUFGO0FBRUE7RUFDRSx3QkFBQTtFQUNBLDJEQUFBO0FBQUY7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LGFBQUE7RUFDQSxrQkFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEZvbnRzXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvdyBGb250JztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CdWRnZS1TaGFkb3cud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGluZSBGb250JztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CdWRnZS1MaW5lLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0hlYWRlciBGb250JztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CdWRnZS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RleHRGb250JztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CdWRnZVBhaXItUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcblxcbi8vIFZhcmlhYmxlc1xcbiRkYXJrLWJsdWU6ICMzRDNCOEU7XFxuJGxpZ2h0LWJsdWU6ICM2ODgzQkE7XFxuJHBpbms6ICNFMDcyQTQ7XFxuJHdoaXRlOiAjRjlGOUY5O1xcblxcbi8vIEhvdmVyIGFuaW1hdGlvbiBtaXhpblxcbkBtaXhpbiBob3ZlckFuaW1hdGlvbigkdW5kZXJsaW5lQ29sb3IpIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC4ycmVtIDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgJjo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMC4xZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmVDb2xvcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgdHJhbnNmb3JtIDMwMG1zO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG4gICY6aG92ZXI6OmFmdGVyLFxcbiAgJjpmb2N1czo6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4vLyBSZXNldFxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8vIEJvZHlcXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWU0ZGY7XFxufVxcblxcbi8vIFxcXCJGcm9zdHkgRGVsaWdodHNcXFwiIGhlYWRlciB0ZXh0XFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogMTByZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgfVxcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93IEZvbnQnO1xcbiAgY29sb3I6ICRsaWdodC1ibHVlO1xcbn1cXG5cXG4udGV4dCB7XFxuICBmb250LWZhbWlseTogJ0hlYWRlciBGb250JztcXG4gIGNvbG9yOiAkd2hpdGU7XFxufVxcblxcbi5saW5lIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGluZSBGb250JztcXG4gIGNvbG9yOiAkcGluaztcXG59XFxuXFxuLy8gTmF2IEJhclxcbm5hdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIEBpbmNsdWRlIGhvdmVyQW5pbWF0aW9uKGhvdHBpbmspO1xcbn1cXG5cXG4uc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4vLyBNYWluIENvbnRhaW5lciAoQ29udGFpbmVyIGJlbG93IGhlYWRlcilcXG5tYWluIHtcXG4gIGhlaWdodDogODglO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8vIEhvbWUgUGFnZVxcbi5tYWluQ2FyZCB7XFxuICB3aWR0aDogNDB2dztcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3ZoO1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXG59XFxuXFxuLm1haW5DYXJkIHAge1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ob21lQ2FyZCBpbWcge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaG9tZUNhcmQgYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIEBpbmNsdWRlIGhvdmVyQW5pbWF0aW9uKCR3aGl0ZSk7XFxufVxcblxcbi8vIE1lbnUgUGFnZVxcbi5tZW51Q2FyZCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaWNlQ3JlYW1DYXJkIHtcXG4gIGJvcmRlcjogc29saWQgMnB4ICR3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICBwIHtcXG4gICAgY29sb3I6ICRwaW5rO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogJHBpbms7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGV4dEZvbnQnO1xcbiAgfVxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xcbiAgICBwLCBoMiB7XFxuICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBDb250YWN0IFBhZ2VcXG4uY29udGFjdENhcmQge1xcbiAgaDIge1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAkd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIH1cXG59XFxuXFxuLmNvbnRhY3RDYXJkIC5pbmZvQXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiAycmVtO1xcbiAgY29sdW1uLWdhcDogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGcgaWQ9XFxcIlNWR1JlcG9fYmdDYXJyaWVyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjBcXFwiPjwvZz48ZyBpZD1cXFwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjwvZz48ZyBpZD1cXFwiU1ZHUmVwb19pY29uQ2FycmllclxcXCI+PHBhdGggZD1cXFwiTTE2IDEyQzE2IDE0LjIwOTEgMTQuMjA5MSAxNiAxMiAxNkM5Ljc5MDg2IDE2IDggMTQuMjA5MSA4IDEyQzggOS43OTA4NiA5Ljc5MDg2IDggMTIgOEMxNC4yMDkxIDggMTYgOS43OTA4NiAxNiAxMlpNMTYgMTJWMTMuNUMxNiAxNC44ODA3IDE3LjExOTMgMTYgMTguNSAxNlYxNkMxOS44ODA3IDE2IDIxIDE0Ljg4MDcgMjEgMTMuNVYxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMUgxNlxcXCIgc3Ryb2tlPVxcXCIjRjlGOUY5XFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIi00IDAgMzIgMzJcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeG1sbnM6c2tldGNoPVxcXCJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnNcXFwiIGZpbGw9XFxcIiMwMDAwMDBcXFwiPjxnIGlkPVxcXCJTVkdSZXBvX2JnQ2FycmllclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIwXFxcIj48L2c+PGcgaWQ9XFxcIlNWR1JlcG9fdHJhY2VyQ2FycmllclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L2c+PGcgaWQ9XFxcIlNWR1JlcG9faWNvbkNhcnJpZXJcXFwiPjx0aXRsZT5sb2NhdGlvbjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz48ZGVmcz48L2RlZnM+PGcgaWQ9XFxcIlBhZ2UtMVxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgc2tldGNoOnR5cGU9XFxcIk1TUGFnZVxcXCI+PGcgaWQ9XFxcIkljb24tU2V0XFxcIiBza2V0Y2g6dHlwZT1cXFwiTVNMYXllckdyb3VwXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMTA0LjAwMDAwMCwgLTQxMS4wMDAwMDApXFxcIiBmaWxsPVxcXCIjRjlGOUY5XFxcIj48cGF0aCBkPVxcXCJNMTE2LDQyNiBDMTE0LjM0Myw0MjYgMTEzLDQyNC42NTcgMTEzLDQyMyBDMTEzLDQyMS4zNDMgMTE0LjM0Myw0MjAgMTE2LDQyMCBDMTE3LjY1Nyw0MjAgMTE5LDQyMS4zNDMgMTE5LDQyMyBDMTE5LDQyNC42NTcgMTE3LjY1Nyw0MjYgMTE2LDQyNiBMMTE2LDQyNiBaIE0xMTYsNDE4IEMxMTMuMjM5LDQxOCAxMTEsNDIwLjIzOCAxMTEsNDIzIEMxMTEsNDI1Ljc2MiAxMTMuMjM5LDQyOCAxMTYsNDI4IEMxMTguNzYxLDQyOCAxMjEsNDI1Ljc2MiAxMjEsNDIzIEMxMjEsNDIwLjIzOCAxMTguNzYxLDQxOCAxMTYsNDE4IEwxMTYsNDE4IFogTTExNiw0NDAgQzExNC4zMzcsNDQwLjAwOSAxMDYsNDI3LjE4MSAxMDYsNDIzIEMxMDYsNDE3LjQ3OCAxMTAuNDc3LDQxMyAxMTYsNDEzIEMxMjEuNTIzLDQxMyAxMjYsNDE3LjQ3OCAxMjYsNDIzIEMxMjYsNDI3LjEyNSAxMTcuNjM3LDQ0MC4wMDkgMTE2LDQ0MCBMMTE2LDQ0MCBaIE0xMTYsNDExIEMxMDkuMzczLDQxMSAxMDQsNDE2LjM3MyAxMDQsNDIzIEMxMDQsNDI4LjAxOCAxMTQuMDA1LDQ0My4wMTEgMTE2LDQ0MyBDMTE3Ljk2NCw0NDMuMDExIDEyOCw0MjcuOTUgMTI4LDQyMyBDMTI4LDQxNi4zNzMgMTIyLjYyNyw0MTEgMTE2LDQxMSBMMTE2LDQxMSBaXFxcIiBpZD1cXFwibG9jYXRpb25cXFwiIHNrZXRjaDp0eXBlPVxcXCJNU1NoYXBlR3JvdXBcXFwiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBpZD1cXFwiU1ZHUmVwb19iZ0NhcnJpZXJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMFxcXCI+PC9nPjxnIGlkPVxcXCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9nPjxnIGlkPVxcXCJTVkdSZXBvX2ljb25DYXJyaWVyXFxcIj48cGF0aCBkPVxcXCJNMTQuMzMwOCAxNS45NDAyTDE1LjY2MDggMTQuNjEwMUMxNS44NjU1IDE0LjQwMyAxNi4xMDkyIDE0LjIzODQgMTYuMzc3OCAxNC4xMjYyQzE2LjY0NjUgMTQuMDE0IDE2LjkzNDcgMTMuOTU2MyAxNy4yMjU4IDEzLjk1NjNDMTcuNTE3IDEzLjk1NjMgMTcuODA1MiAxNC4wMTQgMTguMDczOSAxNC4xMjYyQzE4LjM0MjUgMTQuMjM4NCAxOC41ODYyIDE0LjQwMyAxOC43OTA4IDE0LjYxMDFMMjAuMzUwOCAxNi4xNzAyQzIwLjU1NzkgMTYuMzc0OCAyMC43MjI0IDE2LjYxODMgMjAuODM0NiAxNi44ODdDMjAuOTQ2OCAxNy4xNTU2IDIxLjAwNDYgMTcuNDQ0IDIxLjAwNDYgMTcuNzM1MUMyMS4wMDQ2IDE4LjAyNjMgMjAuOTQ2OCAxOC4zMTQ2IDIwLjgzNDYgMTguNTgzM0MyMC43MjI0IDE4Ljg1MTkgMjAuNTU3OSAxOS4wOTU0IDIwLjM1MDggMTkuM0wxOS42NDA4IDIwLjAyQzE5LjE1MTYgMjAuNTE0IDE4LjUxODkgMjAuODQxIDE3LjgzMjkgMjAuOTU0MUMxNy4xNDY5IDIxLjA2NzIgMTYuNDQyNyAyMC45NjA5IDE1LjgyMDggMjAuNjUwMUMxMC40NjkxIDE3Ljg5NTIgNi4xMTAwOCAxMy41Mzk2IDMuMzUwODMgOC4xOTAxOUMzLjAzOTc2IDcuNTY3NjEgMi45MzQxNCA2Ljg2MjQyIDMuMDQ5MTQgNi4xNzYwM0MzLjE2NDE0IDUuNDg5NjMgMy40OTM4NCA0Ljg1NzMxIDMuOTkwODUgNC4zNzAxMkw0LjcwMDgxIDMuNjUwMTVDNS4xMTY3NCAzLjIzNjczIDUuNjc5MzcgMy4wMDQ2NCA2LjI2NTgxIDMuMDA0NjRDNi44NTIyNSAzLjAwNDY0IDcuNDE0ODggMy4yMzY3MyA3LjgzMDgxIDMuNjUwMTVMOS40MDA4MiA1LjIyMDIxQzkuODE0MjQgNS42MzYxNSAxMC4wNDYzIDYuMTk4NzEgMTAuMDQ2MyA2Ljc4NTE2QzEwLjA0NjMgNy4zNzE2IDkuODE0MjQgNy45MzQxNiA5LjQwMDgyIDguMzUwMUw4LjA3MDggOS42ODAxOEM4Ljk1MDIxIDEwLjg2OTcgOS45MTYxNyAxMS45OTI2IDEwLjk2MDggMTMuMDRDMTEuOTk5NCAxNC4wODA0IDEzLjExNiAxNS4wNCAxNC4zMDA4IDE1LjkxMDJMMTQuMzMwOCAxNS45NDAyWlxcXCIgc3Ryb2tlPVxcXCIjRjlGOUY5XFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gXCIuL3BhZ2VzL2hvbWVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL3BhZ2VzL21lbnVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RQYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblBhZ2UoaG9tZSwgbWVudSwgY29udGFjdCwgc2VsZWN0ZWQsIGNvbnRhaW5lcikge1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHNlbGVjdGVkICE9PSAnaG9tZScpe1xuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoJ2hvbWUnLCBjb250YWluZXIpO1xuICAgICAgY29uc3QgbWFpbiA9IGNyZWF0ZUhvbWVQYWdlKCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2VsZWN0ZWQgIT09ICdtZW51Jyl7XG4gICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignbWVudScsIGNvbnRhaW5lcik7XG4gICAgICBjb25zdCBtYWluID0gY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihzZWxlY3RlZCAhPT0gJ2NvbnRhY3QnKXtcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdjb250YWN0JywgY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IG1haW4gPSBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgeyBjbGVhblBhZ2UgfSBmcm9tIFwiLi9jbGVhblBhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHNlbGVjdGVkLCBjb250YWluZXIpIHtcbiAgLy8gSGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGgxU2hhZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDFTaGFkb3cudGV4dENvbnRlbnQgPSAnRnJvc3R5IERlbGlnaHRzJztcbiAgaDFTaGFkb3cuY2xhc3NMaXN0LmFkZCgnc2hhZG93Jyk7XG5cbiAgY29uc3QgaDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDFUZXh0LnRleHRDb250ZW50ID0gJ0Zyb3N0eSBEZWxpZ2h0cyc7XG4gIGgxVGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG5cbiAgY29uc3QgaDFMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDFMaW5lLnRleHRDb250ZW50ID0gJ0Zyb3N0eSBEZWxpZ2h0cyc7XG4gIGgxTGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxU2hhZG93KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxVGV4dCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMUxpbmUpO1xuXG4gIC8vIE5hdiBCYXJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjbGVhblBhZ2UoaG9tZSwgbWVudSwgY29udGFjdCwgc2VsZWN0ZWQsIGNvbnRhaW5lcik7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcblxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG4gIHN3aXRjaCAoc2VsZWN0ZWQpIHtcbiAgICBjYXNlICdob21lJzpcbiAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGFjdCc6XG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0IHBob25lIGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9jb250YWN0UGFnZS9waG9uZS5zdmcnXG5pbXBvcnQgZW1haWwgZnJvbSAnL3NyYy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RQYWdlL2VtYWlsLnN2ZydcbmltcG9ydCBsb2NhdGlvbiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvbG9jYXRpb24uc3ZnJ1xuaW1wb3J0IHNob3BJbWFnZSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdFBhZ2UvaWNlY3JlYW1zaG9wLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDYXJkLmNsYXNzTGlzdC5hZGQoJ21haW5DYXJkJywgJ2NvbnRhY3RDYXJkJyk7XG5cbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGFjdFVzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG5cbiAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0FyZWEuY2xhc3NMaXN0LmFkZCgnaW5mb0FyZWEnKTtcbiAgXG4gIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gJyg1NTUpIDEyMy00NTY3J1xuICBcbiAgY29uc3QgZW1haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbWFpbFRleHQudGV4dENvbnRlbnQgPSAnZnJvc3R5ZGVsaWdodHNAaWNlY3JlYW0uY29tJ1xuICBcbiAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnMTIzIFBhbG0gU3RyZWV0LCBNaWFtaSwgRkwgMzMxMDEsIFVuaXRlZCBTdGF0ZXMnXG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gc2hvcEltYWdlO1xuICBcbiAgaW5mb0FyZWEuaW5uZXJIVE1MID0gcGhvbmU7XG4gIGluZm9BcmVhLmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG4gIGluZm9BcmVhLmlubmVySFRNTCArPSBlbWFpbDtcbiAgaW5mb0FyZWEuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcbiAgaW5mb0FyZWEuaW5uZXJIVE1MICs9IGxvY2F0aW9uO1xuICBpbmZvQXJlYS5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICBcbiAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RVcyk7XG4gIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChpbmZvQXJlYSk7XG4gIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENhcmQpO1xuXG4gIHJldHVybiBtYWluO1xufSIsImltcG9ydCBpY2VDcmVhbWltYWdlIGZyb20gJy9zcmMvYXNzZXRzL2ltYWdlcy9ob21lUGFnZS9pY2VjcmVhbS5qcGcnXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuLi9oZWFkZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAvLyBNYWluXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgY29uc3QgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluQ2FyZCcsICdob21lQ2FyZCcpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgYSB3b3JsZCBvZiBmbGF2b3JzIGF0IEZyb3N0eSBEZWxpZ2h0cywgd2hlcmUgaWNlIGNyZWFtIGlzIGFuIGFydCBmb3JtLiBFeHBlcmllbmNlIGFuIGV4cGxvc2lvbiBvZiB0YXN0ZXMsIGNhcmVmdWxseSBibGVuZGVkIHdpdGggbmF0dXJhbCBpbmdyZWRpZW50cy4gU2F0aXNmeSB5b3VyIGNyYXZpbmdzIGFuZCBjcmVhdGUgeW91ciBvd24gZWRpYmxlIG1hc3RlcnBpZWNlLidcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBpY2VDcmVhbWltYWdlO1xuXG4gIGNvbnN0IGNvbnRhY3RVc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnRhY3RVc1RleHQudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIGNvbnRhY3RVc1RleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoJ2NvbnRhY3QnLCBjb250YWluZXIpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgfSk7XG5cbiAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKHApO1xuICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFVzVGV4dCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENhcmQpO1xuXG4gIHJldHVybiBtYWluO1xufSIsImltcG9ydCBpY2VDcmVhbUltYWdlMSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0xLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlMiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0yLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlMyBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW0zLnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNCBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW00LnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNSBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW01LnBuZydcbmltcG9ydCBpY2VDcmVhbUltYWdlNiBmcm9tICcvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudVBhZ2UvaWNlY3JlYW02LnBuZydcblxuZnVuY3Rpb24gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlLCBpY2VDcmVhbVRpdGxlLCBpY2VDcmVhbURlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGljZUNyZWFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGljZUNyZWFtLmNsYXNzTGlzdC5hZGQoJ2ljZUNyZWFtQ2FyZCcpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGljZUNyZWFtSW1hZ2U7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGljZUNyZWFtVGl0bGU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaWNlQ3JlYW1EZXNjcmlwdGlvbjtcblxuICBpY2VDcmVhbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGljZUNyZWFtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaWNlQ3JlYW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBpY2VDcmVhbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21haW5DYXJkJywgJ21lbnVDYXJkJyk7XG5cbiAgY29uc3QgaWNlQ3JlYW0xID0gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlMSwgJ09uZSBJY2UgQ3JlYW0gQmFsbCcsICdBIGRlbGlnaHRmdWwgc2luZ2xlIHNjb29wIG9mIGNyZWFteSBpY2UgY3JlYW0sIHNlcnZlZCBvbiBhIGNyaXNweSBjb25lIGZvciBhIGNsYXNzaWMgYW5kIHNhdGlzZnlpbmcgdHJlYXQuJyk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKGljZUNyZWFtMSk7XG5cbiAgY29uc3QgaWNlQ3JlYW0yID0gX2NyZWF0ZUljZUNyZWFtQ2FyZChpY2VDcmVhbUltYWdlMiwgJ1RocmVlIEljZSBDcmVhbSBCYWxsIG9uIGEgQ29uZScsICdBIHRhbnRhbGl6aW5nIHRyaW8gb2YgaWNlIGNyZWFtIGZsYXZvcnMsIHNraWxsZnVsbHkgYmFsYW5jZWQgb24gYSBjcmlzcHkgY29uZSwgb2ZmZXJpbmcgYSBkZWxpZ2h0ZnVsIG1peCBvZiB0YXN0ZXMgaW4gZXZlcnkgYml0ZS4nKTtcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW0yKTtcblxuICBjb25zdCBpY2VDcmVhbTMgPSBfY3JlYXRlSWNlQ3JlYW1DYXJkKGljZUNyZWFtSW1hZ2UzLCAnVGhyZWUgSWNlIENyZWFtIEJhbGwgb24gYSBHbGFzcycsICdBIGRlbGlnaHRmdWwgZGlzcGxheSBvZiB0aHJlZSBjb2xvcmZ1bCBpY2UgY3JlYW0gc2Nvb3BzLCBzZXJ2ZWQgaW4gYW4gZWxlZ2FudCBnbGFzcyBmb3IgYW4gZWxldmF0ZWQgZGVzc2VydCBleHBlcmllbmNlLicpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpY2VDcmVhbTMpO1xuXG4gIGNvbnN0IGljZUNyZWFtNCA9IF9jcmVhdGVJY2VDcmVhbUNhcmQoaWNlQ3JlYW1JbWFnZTQsICdTdW5kYWUnLCAnQSBkZWNhZGVudCBkZWxpZ2h0IGZlYXR1cmluZyBtdWx0aXBsZSBpY2UgY3JlYW0gc2Nvb3BzLCB0b3BwZWQgd2l0aCBsdXNjaW91cyBzeXJ1cHMsIGNydW5jaHkgbnV0cywgYW5kIGEgY2hlcnJ5IG9uIHRvcC4nKTtcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW00KTtcblxuICBjb25zdCBpY2VDcmVhbTUgPSBfY3JlYXRlSWNlQ3JlYW1DYXJkKGljZUNyZWFtSW1hZ2U1LCAnUG9wc2ljbGUnLCAnQSByZWZyZXNoaW5nIGZyb3plbiB0cmVhdCBvbiBhIHN0aWNrLCBhdmFpbGFibGUgaW4gdmFyaW91cyBmcnVpdHkgZmxhdm9ycyB0byBiZWF0IHRoZSBoZWF0LicpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpY2VDcmVhbTUpO1xuXG4gIGNvbnN0IGljZUNyZWFtNiA9IF9jcmVhdGVJY2VDcmVhbUNhcmQoaWNlQ3JlYW1JbWFnZTYsICdEb3VibGUgUG9wc2ljbGUnLCAnVHdpY2UgdGhlIGRlbGlnaHQgd2l0aCB0d28gZnJvemVuIHBvcHNpY2xlcywgYSBwZXJmZWN0IGNob2ljZSBmb3Igc2hhcmluZyBvciBzYXZvcmluZyBhbGwgdG8geW91cnNlbGYuJyk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKGljZUNyZWFtNik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XG5cbiAgcmV0dXJuIG1haW47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvaG9tZVBhZ2UuanMnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pZCA9ICdjb250ZW50JztcblxuICAvLyBDcmVhdGUgbGFuZGluZyBwYWdlXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignaG9tZScsIGNvbnRhaW5lcik7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVIb21lUGFnZSgpO1xuICBcbiAgLy8gQ29udGFpbmVyIEFwcGVuZFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==