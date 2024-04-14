/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body,html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Pacifico', cursive;
    font-size: 1rem;
}

h1 {
    font-size: 2rem;

}

p {
    font-size: 1rem;
}

header nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-item {
    margin: 0 2rem;
    font-size: 1.3rem;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s ease;
}

.nav-item:hover {
    border-bottom: 2px solid white;
}
.nav-item.active {
    border-bottom: 2px solid white;
}

.logo h1 {
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    text-align: center;
    color: white;
}

.main-content {
    overflow-y: auto;
    height: 100vh;
    display: flex;
    justify-content: stretch;
    align-items: center;    
    background-color: wheat;
    
}


.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    height: 15vh;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    padding-bottom: .5rem;
}

button {
    border-style: none;
    color: white;
    outline: none;
    background: none;
}

.menu-content {

    padding:20vh 20px 20px 20px;
    font-family: 'Dancing Script', cursive;
    color:#333;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    
}
 .menu-wrapper {
    position:sticky;
    top:1rem;
    right: 0;
    left: 0;
    background-color: #fff;
    opacity: .7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    max-width: 50%;
    padding: 1.5rem;
   z-index: 50;
 }

.menu-title {
    font-size: 5rem;
    text-align: center;
    font-weight: bold;
}
.intro {
    text-align: center;
    font-size: 2rem;
}

.menu-section h2 {
    font-weight:bolder;
    font-size: 2.5rem;
    padding: 1rem 0
    .5rem;
}
.menu-section p {
    font-weight: normal;
    padding-bottom: 1rem;
    font-size: 1.4rem;
}

.menu-item h3 {
font-size: 1.7rem;
font-weight:bolder;
}

.home-content {
    padding-top: 15vh;
    text-align: center;
    height: 100%;
    width: 100%;
    font-family: 'Dancing Script', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


.home-content h2 {
    font-size: 4rem;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    transition: transform 0.3s ease-in-out;
}



.home-content p {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    font-weight: lighter;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-content h2 {
    font-size: 5rem;
    color:#fff;
    text-align: center;
    font-weight: 900;
    margin-top: 1rem;
    transition: transform 0.3s ease-in-out;
   
}

.contact-content p {
    font-size: 2rem;
    color:#fff;
    text-align: center;
    margin-top: 1rem;
    font-weight: lighter;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}


 .backgroundDiv {
    background: rgba(0, 0, 0, 0.2); 
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    display: inline-block;
} 

.image-slider {
    width: 100%;
    height: 100%;
    z-index: 0;
}

.slide {
    position: fixed;
    left: 0;
    top:4rem;
    width: 100%;
    height: 100%;
    transition: ease-in-out 3s;
    object-fit: cover;
    z-index: 0;
}

@media screen  and (max-width:600px) {

    .header {
        height:10vh ;
    }
    .logo h1 {
        font-size: 1.5rem;
    }

    .menu-wrapper {
        max-width: fit-content;
    }
    .home-content h2 {
        font-size: 2.3rem;
    }
   .home-content p {
    font-size: 1.3rem;
   }

   .nav-item {
    font-size: .8rem;
    margin: 0 1rem;
   }

    .menu-wrapper.menu-title {
    font-size: 1rem;
   }

   .menu-title {
    font-size: 3rem;
   }
   .intro {
    font-size: 1.2rem;
   }
   .menu-section h2 {
    font-size: 1.5rem;
   }
   .menu-item h3{
    font-size: 1.2rem;
   }
   .menu-section p {
    font-size: 1rem;
   }
   .menu-content {
    padding:15vh 20px 20px 20px;
   }
   .slide {
    top: 3rem;
   }
   .contact-content h2 {
    font-size: 3rem;
   }
   .contact-content p {
    font-size: 1.2rem;
   }
}

.contact-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 100vh;
    gap: 2rem;
    width: 100%;
    font-family: 'Dancing Script', cursive;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

}
form {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
    align-items: center;
    padding: 2rem;
}

input, textarea {
    height: 2rem;
    width: 100%;
    max-width: 500px;
    min-width:  200px;

}

form button {
    border: 2px solid white;
    padding: 3px;
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');\r\n\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    font-size: 16px;\r\n}\r\n\r\nbody,html {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Pacifico', cursive;\r\n    font-size: 1rem;\r\n}\r\n\r\nh1 {\r\n    font-size: 2rem;\r\n\r\n}\r\n\r\np {\r\n    font-size: 1rem;\r\n}\r\n\r\nheader nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.nav-item {\r\n    margin: 0 2rem;\r\n    font-size: 1.3rem;\r\n    border-bottom: 2px solid transparent;\r\n    transition: border-bottom 0.3s ease;\r\n}\r\n\r\n.nav-item:hover {\r\n    border-bottom: 2px solid white;\r\n}\r\n.nav-item.active {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.logo h1 {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 3.5rem;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.main-content {\r\n    overflow-y: auto;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: stretch;\r\n    align-items: center;    \r\n    background-color: wheat;\r\n    \r\n}\r\n\r\n\r\n.header {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    display: flex;\r\n    height: 15vh;\r\n    background-color: black;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-bottom: .5rem;\r\n}\r\n\r\nbutton {\r\n    border-style: none;\r\n    color: white;\r\n    outline: none;\r\n    background: none;\r\n}\r\n\r\n.menu-content {\r\n\r\n    padding:20vh 20px 20px 20px;\r\n    font-family: 'Dancing Script', cursive;\r\n    color:#333;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 0;\r\n    \r\n}\r\n .menu-wrapper {\r\n    position:sticky;\r\n    top:1rem;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    opacity: .7;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    margin: 20px auto;\r\n    max-width: 50%;\r\n    padding: 1.5rem;\r\n   z-index: 50;\r\n }\r\n\r\n.menu-title {\r\n    font-size: 5rem;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n.intro {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n.menu-section h2 {\r\n    font-weight:bolder;\r\n    font-size: 2.5rem;\r\n    padding: 1rem 0\r\n    .5rem;\r\n}\r\n.menu-section p {\r\n    font-weight: normal;\r\n    padding-bottom: 1rem;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.menu-item h3 {\r\nfont-size: 1.7rem;\r\nfont-weight:bolder;\r\n}\r\n\r\n.home-content {\r\n    padding-top: 15vh;\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Dancing Script', cursive;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n.home-content h2 {\r\n    font-size: 4rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.home-content p {\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    font-weight: lighter;\r\n    max-width: 600px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.contact-content h2 {\r\n    font-size: 5rem;\r\n    color:#fff;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    margin-top: 1rem;\r\n    transition: transform 0.3s ease-in-out;\r\n   \r\n}\r\n\r\n.contact-content p {\r\n    font-size: 2rem;\r\n    color:#fff;\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    font-weight: lighter;\r\n    max-width: 600px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n .backgroundDiv {\r\n    background: rgba(0, 0, 0, 0.2); \r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n    padding: 1rem;\r\n    display: inline-block;\r\n} \r\n\r\n.image-slider {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n.slide {\r\n    position: fixed;\r\n    left: 0;\r\n    top:4rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: ease-in-out 3s;\r\n    object-fit: cover;\r\n    z-index: 0;\r\n}\r\n\r\n@media screen  and (max-width:600px) {\r\n\r\n    .header {\r\n        height:10vh ;\r\n    }\r\n    .logo h1 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .menu-wrapper {\r\n        max-width: fit-content;\r\n    }\r\n    .home-content h2 {\r\n        font-size: 2.3rem;\r\n    }\r\n   .home-content p {\r\n    font-size: 1.3rem;\r\n   }\r\n\r\n   .nav-item {\r\n    font-size: .8rem;\r\n    margin: 0 1rem;\r\n   }\r\n\r\n    .menu-wrapper.menu-title {\r\n    font-size: 1rem;\r\n   }\r\n\r\n   .menu-title {\r\n    font-size: 3rem;\r\n   }\r\n   .intro {\r\n    font-size: 1.2rem;\r\n   }\r\n   .menu-section h2 {\r\n    font-size: 1.5rem;\r\n   }\r\n   .menu-item h3{\r\n    font-size: 1.2rem;\r\n   }\r\n   .menu-section p {\r\n    font-size: 1rem;\r\n   }\r\n   .menu-content {\r\n    padding:15vh 20px 20px 20px;\r\n   }\r\n   .slide {\r\n    top: 3rem;\r\n   }\r\n   .contact-content h2 {\r\n    font-size: 3rem;\r\n   }\r\n   .contact-content p {\r\n    font-size: 1.2rem;\r\n   }\r\n}\r\n\r\n.contact-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    gap: 2rem;\r\n    width: 100%;\r\n    font-family: 'Dancing Script', cursive;\r\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\r\n\r\n}\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    width: 100%;\r\n    align-items: center;\r\n    padding: 2rem;\r\n}\r\n\r\ninput, textarea {\r\n    height: 2rem;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    min-width:  200px;\r\n\r\n}\r\n\r\nform button {\r\n    border: 2px solid white;\r\n    padding: 3px;\r\n    font-size: 1.2rem;\r\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg");


function createContactContent() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.style.backgroundImage = `url(${_contact_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    contactContent.style.backgroundSize = 'cover';
    contactContent.style.backgroundPosition = 'center';

    const header = document.createElement('h2');
    header.textContent = 'Get in Touch';
    contactContent.appendChild(header);

    const form = document.createElement('form');
    form.innerHTML = ` 
    <input type="text" id="name" name="name" placeholder="Your name" required>
    <input type="email" id="email" name="email" placeholder="Your email" required>
    <textarea id="message" name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send Message</button>
    `;

    contactContent.appendChild(form);


    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
    <p><strong>Address:</strong> 123 Café Street, Foodville</p>
    <p><strong>Phone:</strong> (123) 456-7890</p>
    <p><strong>Email:</strong> info@hardwickcafe.com</p>
    `;

    contactContent.appendChild(contactInfo);


    return contactContent;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactContent);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HardwickCafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HardwickCafe.jpg */ "./src/HardwickCafe.jpg");


function createHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.style.backgroundImage = `url(${_HardwickCafe_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    homeContent.style.backgroundSize = 'cover';
    homeContent.style.backgroundPosition = 'center';
    homeContent.innerHTML = `
    <div class="backgroundDiv">
    <h2>Indulge in Elegance at Hardwick Cafe</h2>
    <p>Savor the creations of Celebrity Chef Jenny—where each dish is a masterpiece crafted with the freshest local produce. Experience a symphony of flavors in our relaxed, chic ambiance. Your culinary journey awaits.</p>
    
    </div>
    `;
    return homeContent;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salad.jpg */ "./src/salad.jpg");
/* harmony import */ var _salmon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salmon.jpg */ "./src/salmon.jpg");
/* harmony import */ var _panna_cotta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panna-cotta.jpg */ "./src/panna-cotta.jpg");




function createImageSlider(imageSources) {
  const slider = document.createElement('div');
  slider.classList.add('image-slider');

  // Create an array to hold the image elements.
  const imageElements = imageSources.map((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('slide');
    img.style.opacity = index === 0 ? '1' : '0';
    slider.appendChild(img);
    return img;
  });

  let current = 0;
  setInterval(() => {
    // Corrected: Ensure we're accessing the image elements correctly
    const previous = current;
    current = (current + 1) % imageElements.length;
    imageElements[previous].style.opacity = '0'; // Fade out the previous image
    imageElements[current].style.opacity = '1'; // Fade in the current image
  }, 3000); // Change every 3 seconds

  console.log(imageElements);
  return slider;

}


function createMenuContent() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  menuContent.innerHTML = `
    <div class="menu-wrapper">
    <h2 class="menu-title">Menu</h2>
    <p class="intro">Enjoy the best food in town.</p>
    <div class="menu">
    
  <div class="menu-section">
    <h2>Starters</h2>
    <div class="menu-item">
      <h3>Garden Herb Salad</h3>
      <p>A medley of fresh-picked greens, tossed with heirloom tomatoes and a light vinaigrette.</p>
    </div>
    <div class="menu-item">
      <h3>Butternut Squash Soup</h3>
      <p>Creamy, seasoned squash soup with a hint of nutmeg, served with artisan bread.</p>
    </div>
  </div>
  <div class="menu-section">
    <h2>Main Courses</h2>
    <div class="menu-item">
      <h3>Grilled Salmon</h3>
      <p>Herb-crusted salmon filet, grilled to perfection, accompanied by asparagus and lemon butter.</p>
    </div>
    <div class="menu-item">
      <h3>Ribeye Steak</h3>
      <p>Prime cut ribeye, chargrilled, with roasted garlic mashed potatoes and seasonal vegetables.</p>
    </div>
  </div>
  <div class="menu-section">
    <h2>Desserts</h2>
    <div class="menu-item">
      <h3>Chocolate Mousse</h3>
      <p>Decadent dark chocolate mousse topped with whipped cream and a raspberry drizzle.</p>
    </div>
    <div class="menu-item">
      <h3>Vanilla Bean Panna Cotta</h3>
      <p>Silky smooth panna cotta infused with Madagascar vanilla, served with fresh berries.</p>
    </div>
  </div>
</div>
</div>
    `;

  const imageSlider = createImageSlider([_salad_jpg__WEBPACK_IMPORTED_MODULE_0__, _salmon_jpg__WEBPACK_IMPORTED_MODULE_1__, _panna_cotta_jpg__WEBPACK_IMPORTED_MODULE_2__]);

  menuContent.appendChild(imageSlider);

  return menuContent;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuContent);


/***/ }),

/***/ "./src/HardwickCafe.jpg":
/*!******************************!*\
  !*** ./src/HardwickCafe.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c693f8857aa9578bc14.jpg";

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8af00c222d87c1f63b74.jpg";

/***/ }),

/***/ "./src/panna-cotta.jpg":
/*!*****************************!*\
  !*** ./src/panna-cotta.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35c8444a41407bfe4e5d.jpg";

/***/ }),

/***/ "./src/salad.jpg":
/*!***********************!*\
  !*** ./src/salad.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19db797eae42d461bd6f.jpg";

/***/ }),

/***/ "./src/salmon.jpg":
/*!************************!*\
  !*** ./src/salmon.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba3caa2c42b38340bcd0.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';
    logoDiv.innerHTML = `
    <h1>Hardwick Cafe</h1>
  `;

    logoDiv.classList.add('logo');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('nav-item');
    homeButton.id = 'home';

    //add event listners

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('nav-item');
    menuButton.id = 'menu';

    //ev

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('nav-item');
    contactButton.id = 'contact';


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    header.appendChild(logoDiv);
    header.appendChild(nav);
    return header;
}


function createMainContent() {
    const main = document.createElement('main');
    main.classList.add('main-content');
    // add main content here

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    return footer;
}

function addEventListeners(mainContent) {
    const buttons = document.querySelectorAll('.nav-item');
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
        setActiveButton(homeButton, buttons);
    });

    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
        setActiveButton(menuButton, buttons);
    });

    const contactButton = document.getElementById('contact');
    contactButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        mainContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
        setActiveButton(contactButton, buttons);
    });
}

function setActiveButton(activeButton, buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}


function initializeWebsite() {
    const content = document.getElementById('content');
    const mainContent = createMainContent();

    content.appendChild(createHeader());
    content.appendChild(mainContent);
    content.appendChild(createFooter());

    addEventListeners(mainContent);

    mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

}

initializeWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNIO0FBQ3RILHVIQUF1SCxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsd0dBQXdHLGtGQUFrRixtQkFBbUIsZUFBZSxrQkFBa0IsbUJBQW1CLCtCQUErQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGNBQWMsc0JBQXNCLCtCQUErQix1Q0FBdUMseUNBQXlDLHdCQUF3QixLQUFLLFlBQVksd0JBQXdCLFNBQVMsV0FBVyx3QkFBd0IsS0FBSyxvQkFBb0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSyxtQkFBbUIsdUJBQXVCLDBCQUEwQiw2Q0FBNkMsNENBQTRDLEtBQUsseUJBQXlCLHVDQUF1QyxLQUFLLHNCQUFzQix1Q0FBdUMsS0FBSyxrQkFBa0Isc0JBQXNCLGdDQUFnQywwQkFBMEIsMkJBQTJCLHFCQUFxQixLQUFLLHVCQUF1Qix5QkFBeUIsc0JBQXNCLHNCQUFzQixpQ0FBaUMsZ0NBQWdDLGdDQUFnQyxhQUFhLHFCQUFxQix3QkFBd0Isb0JBQW9CLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IscUJBQXFCLGdDQUFnQywrQkFBK0IsZ0NBQWdDLDhCQUE4QixLQUFLLGdCQUFnQiwyQkFBMkIscUJBQXFCLHNCQUFzQix5QkFBeUIsS0FBSyx1QkFBdUIsd0NBQXdDLCtDQUErQyxtQkFBbUIscUJBQXFCLHNCQUFzQixtQkFBbUIsYUFBYSxvQkFBb0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLCtCQUErQixvQkFBb0IsaURBQWlELDBCQUEwQix1QkFBdUIsd0JBQXdCLG1CQUFtQixNQUFNLHFCQUFxQix3QkFBd0IsMkJBQTJCLDBCQUEwQixLQUFLLFlBQVksMkJBQTJCLHdCQUF3QixLQUFLLDBCQUEwQiwyQkFBMkIsMEJBQTBCLHFDQUFxQyxLQUFLLHFCQUFxQiw0QkFBNEIsNkJBQTZCLDBCQUEwQixLQUFLLHVCQUF1QixzQkFBc0IsdUJBQXVCLEtBQUssdUJBQXVCLDBCQUEwQiwyQkFBMkIscUJBQXFCLG9CQUFvQiwrQ0FBK0Msc0JBQXNCLGdDQUFnQyw0QkFBNEIsb0RBQW9ELEtBQUssOEJBQThCLHdCQUF3QixvQkFBb0IsMkJBQTJCLHlCQUF5QiwrQ0FBK0MsS0FBSyxpQ0FBaUMsd0JBQXdCLG9CQUFvQiwyQkFBMkIseUJBQXlCLDZCQUE2Qix5QkFBeUIsMEJBQTBCLDJCQUEyQixLQUFLLDZCQUE2Qix3QkFBd0IsbUJBQW1CLDJCQUEyQix5QkFBeUIseUJBQXlCLCtDQUErQyxZQUFZLDRCQUE0Qix3QkFBd0IsbUJBQW1CLDJCQUEyQix5QkFBeUIsNkJBQTZCLHlCQUF5QiwwQkFBMEIsMkJBQTJCLEtBQUssNkJBQTZCLHdDQUF3QyxtREFBbUQsbURBQW1ELHNCQUFzQiw4QkFBOEIsTUFBTSx1QkFBdUIsb0JBQW9CLHFCQUFxQixtQkFBbUIsS0FBSyxnQkFBZ0Isd0JBQXdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixtQ0FBbUMsMEJBQTBCLG1CQUFtQixLQUFLLDhDQUE4QyxxQkFBcUIseUJBQXlCLFNBQVMsa0JBQWtCLDhCQUE4QixTQUFTLDJCQUEyQixtQ0FBbUMsU0FBUywwQkFBMEIsOEJBQThCLFNBQVMsd0JBQXdCLDBCQUEwQixRQUFRLHNCQUFzQix5QkFBeUIsdUJBQXVCLFFBQVEsc0NBQXNDLHdCQUF3QixRQUFRLHdCQUF3Qix3QkFBd0IsUUFBUSxlQUFlLDBCQUEwQixRQUFRLHlCQUF5QiwwQkFBMEIsUUFBUSxxQkFBcUIsMEJBQTBCLFFBQVEsd0JBQXdCLHdCQUF3QixRQUFRLHNCQUFzQixvQ0FBb0MsUUFBUSxlQUFlLGtCQUFrQixRQUFRLDRCQUE0Qix3QkFBd0IsUUFBUSwyQkFBMkIsMEJBQTBCLFFBQVEsS0FBSywwQkFBMEIsc0JBQXNCLCtCQUErQiwyQkFBMkIsZ0NBQWdDLHNCQUFzQixrQkFBa0Isb0JBQW9CLCtDQUErQyxvREFBb0QsU0FBUyxVQUFVLHNCQUFzQiwrQkFBK0Isb0JBQW9CLG9CQUFvQiw0QkFBNEIsc0JBQXNCLEtBQUsseUJBQXlCLHFCQUFxQixvQkFBb0IseUJBQXlCLDBCQUEwQixTQUFTLHFCQUFxQixnQ0FBZ0MscUJBQXFCLDBCQUEwQixvREFBb0QsS0FBSywyQkFBMkI7QUFDdm9SO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDclUxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHlDQUFlLENBQUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUN2Q2M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsOENBQWUsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlc7QUFDRjtBQUNRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxnREFBZ0Q7QUFDaEQsR0FBRyxTQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVDQUFnQixFQUFFLHdDQUFhLEVBQUUsNkNBQWdCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hGakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDaUI7QUFDTTtBQUNOO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWlCO0FBQ2pEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFpQjtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvREFBb0I7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmJvZHksaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmhlYWRlciBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ubmF2LWl0ZW0uYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28gaDEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubWVudS1jb250ZW50IHtcclxuXHJcbiAgICBwYWRkaW5nOjIwdmggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG59XHJcbiAubWVudS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIHRvcDoxcmVtO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgIHotaW5kZXg6IDUwO1xyXG4gfVxyXG5cclxuLm1lbnUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmludHJvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1lbnUtc2VjdGlvbiBoMiB7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMFxyXG4gICAgLjVyZW07XHJcbn1cclxuLm1lbnUtc2VjdGlvbiBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIGgzIHtcclxuZm9udC1zaXplOiAxLjdyZW07XHJcbmZvbnQtd2VpZ2h0OmJvbGRlcjtcclxufVxyXG5cclxuLmhvbWUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuXHJcbi5ob21lLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmhvbWUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICBcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4gLmJhY2tncm91bmREaXYge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0gXHJcblxyXG4uaW1hZ2Utc2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6NHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgM3M7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OjEwdmggO1xyXG4gICAgfVxyXG4gICAgLmxvZ28gaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXdyYXBwZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIH1cclxuICAgLmhvbWUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICB9XHJcblxyXG4gICAubmF2LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICB9XHJcblxyXG4gICAgLm1lbnUtd3JhcHBlci5tZW51LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgfVxyXG5cclxuICAgLm1lbnUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICB9XHJcbiAgIC5pbnRybyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgfVxyXG4gICAubWVudS1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICB9XHJcbiAgIC5tZW51LWl0ZW0gaDN7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgfVxyXG4gICAubWVudS1zZWN0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICB9XHJcbiAgIC5tZW51LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzoxNXZoIDIwcHggMjBweCAyMHB4O1xyXG4gICB9XHJcbiAgIC5zbGlkZSB7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgIH1cclxuICAgLmNvbnRhY3QtY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgIH1cclxuICAgLmNvbnRhY3QtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHJcbn1cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogIDIwMHB4O1xyXG5cclxufVxyXG5cclxuZm9ybSBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJ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QUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQ0FBMkM7QUFDL0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHksaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW06aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5uYXYtaXRlbS5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgxIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250ZW50IHtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzoyMHZoIDIwcHggMjBweCAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6IzMzMztcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuIC5tZW51LXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxyXFxuICAgIHRvcDoxcmVtO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgb3BhY2l0eTogLjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgIHotaW5kZXg6IDUwO1xcclxcbiB9XFxyXFxuXFxyXFxuLm1lbnUtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5pbnRybyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9uIGgyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwXFxyXFxuICAgIC41cmVtO1xcclxcbn1cXHJcXG4ubWVudS1zZWN0aW9uIHAge1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gaDMge1xcclxcbmZvbnQtc2l6ZTogMS43cmVtO1xcclxcbmZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhvbWUtY29udGVudCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5ob21lLWNvbnRlbnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRlbnQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRlbnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuIC5iYWNrZ3JvdW5kRGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyBcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59IFxcclxcblxcclxcbi5pbWFnZS1zbGlkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDo0cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzcztcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OjEwdmggO1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LXdyYXBwZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZS1jb250ZW50IGgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICB9XFxyXFxuICAgLmhvbWUtY29udGVudCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtd3JhcHBlci5tZW51LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAubWVudS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICB9XFxyXFxuICAgLmludHJvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgfVxcclxcbiAgIC5tZW51LXNlY3Rpb24gaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICB9XFxyXFxuICAgLm1lbnUtaXRlbSBoM3tcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgfVxcclxcbiAgIC5tZW51LXNlY3Rpb24gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICB9XFxyXFxuICAgLm1lbnUtY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6MTV2aCAyMHB4IDIwcHggMjBweDtcXHJcXG4gICB9XFxyXFxuICAgLnNsaWRlIHtcXHJcXG4gICAgdG9wOiAzcmVtO1xcclxcbiAgIH1cXHJcXG4gICAuY29udGFjdC1jb250ZW50IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgIH1cXHJcXG4gICAuY29udGFjdC1jb250ZW50IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG5cXHJcXG59XFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAgMjAwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9jb250YWN0LmpwZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRlbnQnKTtcclxuICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICBjb250YWN0Q29udGVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICBjb250YWN0Q29udGVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0dldCBpbiBUb3VjaCc7XHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlubmVySFRNTCA9IGAgXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIHJlcXVpcmVkPlxyXG4gICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XHJcbiAgICBjb250YWN0SW5mby5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+IDEyMyBDYWbDqSBTdHJlZXQsIEZvb2R2aWxsZTwvcD5cclxuICAgIDxwPjxzdHJvbmc+UGhvbmU6PC9zdHJvbmc+ICgxMjMpIDQ1Ni03ODkwPC9wPlxyXG4gICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gaW5mb0BoYXJkd2lja2NhZmUuY29tPC9wPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcblxyXG5cclxuICAgIHJldHVybiBjb250YWN0Q29udGVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250ZW50OyIsImltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9IYXJkd2lja0NhZmUuanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVDb250ZW50KCkge1xyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xyXG4gICAgaG9tZUNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcclxuICAgIGhvbWVDb250ZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuICAgIGhvbWVDb250ZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgaG9tZUNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmREaXZcIj5cclxuICAgIDxoMj5JbmR1bGdlIGluIEVsZWdhbmNlIGF0IEhhcmR3aWNrIENhZmU8L2gyPlxyXG4gICAgPHA+U2F2b3IgdGhlIGNyZWF0aW9ucyBvZiBDZWxlYnJpdHkgQ2hlZiBKZW5ueeKAlHdoZXJlIGVhY2ggZGlzaCBpcyBhIG1hc3RlcnBpZWNlIGNyYWZ0ZWQgd2l0aCB0aGUgZnJlc2hlc3QgbG9jYWwgcHJvZHVjZS4gRXhwZXJpZW5jZSBhIHN5bXBob255IG9mIGZsYXZvcnMgaW4gb3VyIHJlbGF4ZWQsIGNoaWMgYW1iaWFuY2UuIFlvdXIgY3VsaW5hcnkgam91cm5leSBhd2FpdHMuPC9wPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lQ29udGVudDsiLCJpbXBvcnQgc3RhcnRlckRpc2hJbWFnZSBmcm9tICcuL3NhbGFkLmpwZyc7XHJcbmltcG9ydCBtYWluRGlzaEltYWdlIGZyb20gJy4vc2FsbW9uLmpwZyc7XHJcbmltcG9ydCBkZXNzZXJ0RGlzaEltYWdlIGZyb20gJy4vcGFubmEtY290dGEuanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU2xpZGVyKGltYWdlU291cmNlcykge1xyXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zbGlkZXInKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIGltYWdlIGVsZW1lbnRzLlxyXG4gIGNvbnN0IGltYWdlRWxlbWVudHMgPSBpbWFnZVNvdXJjZXMubWFwKChzcmMsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2xpZGUnKTtcclxuICAgIGltZy5zdHlsZS5vcGFjaXR5ID0gaW5kZXggPT09IDAgPyAnMScgOiAnMCc7XHJcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIHJldHVybiBpbWc7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBjdXJyZW50ID0gMDtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyBDb3JyZWN0ZWQ6IEVuc3VyZSB3ZSdyZSBhY2Nlc3NpbmcgdGhlIGltYWdlIGVsZW1lbnRzIGNvcnJlY3RseVxyXG4gICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50O1xyXG4gICAgY3VycmVudCA9IChjdXJyZW50ICsgMSkgJSBpbWFnZUVsZW1lbnRzLmxlbmd0aDtcclxuICAgIGltYWdlRWxlbWVudHNbcHJldmlvdXNdLnN0eWxlLm9wYWNpdHkgPSAnMCc7IC8vIEZhZGUgb3V0IHRoZSBwcmV2aW91cyBpbWFnZVxyXG4gICAgaW1hZ2VFbGVtZW50c1tjdXJyZW50XS5zdHlsZS5vcGFjaXR5ID0gJzEnOyAvLyBGYWRlIGluIHRoZSBjdXJyZW50IGltYWdlXHJcbiAgfSwgMzAwMCk7IC8vIENoYW5nZSBldmVyeSAzIHNlY29uZHNcclxuXHJcbiAgY29uc29sZS5sb2coaW1hZ2VFbGVtZW50cyk7XHJcbiAgcmV0dXJuIHNsaWRlcjtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51Q29udGVudCgpIHtcclxuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpO1xyXG5cclxuICBtZW51Q29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS13cmFwcGVyXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJtZW51LXRpdGxlXCI+TWVudTwvaDI+XHJcbiAgICA8cCBjbGFzcz1cImludHJvXCI+RW5qb3kgdGhlIGJlc3QgZm9vZCBpbiB0b3duLjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XHJcbiAgICBcclxuICA8ZGl2IGNsYXNzPVwibWVudS1zZWN0aW9uXCI+XHJcbiAgICA8aDI+U3RhcnRlcnM8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICA8aDM+R2FyZGVuIEhlcmIgU2FsYWQ8L2gzPlxyXG4gICAgICA8cD5BIG1lZGxleSBvZiBmcmVzaC1waWNrZWQgZ3JlZW5zLCB0b3NzZWQgd2l0aCBoZWlybG9vbSB0b21hdG9lcyBhbmQgYSBsaWdodCB2aW5haWdyZXR0ZS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgPGgzPkJ1dHRlcm51dCBTcXVhc2ggU291cDwvaDM+XHJcbiAgICAgIDxwPkNyZWFteSwgc2Vhc29uZWQgc3F1YXNoIHNvdXAgd2l0aCBhIGhpbnQgb2YgbnV0bWVnLCBzZXJ2ZWQgd2l0aCBhcnRpc2FuIGJyZWFkLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtZW51LXNlY3Rpb25cIj5cclxuICAgIDxoMj5NYWluIENvdXJzZXM8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICA8aDM+R3JpbGxlZCBTYWxtb248L2gzPlxyXG4gICAgICA8cD5IZXJiLWNydXN0ZWQgc2FsbW9uIGZpbGV0LCBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIGFjY29tcGFuaWVkIGJ5IGFzcGFyYWd1cyBhbmQgbGVtb24gYnV0dGVyLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICA8aDM+UmliZXllIFN0ZWFrPC9oMz5cclxuICAgICAgPHA+UHJpbWUgY3V0IHJpYmV5ZSwgY2hhcmdyaWxsZWQsIHdpdGggcm9hc3RlZCBnYXJsaWMgbWFzaGVkIHBvdGF0b2VzIGFuZCBzZWFzb25hbCB2ZWdldGFibGVzLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtZW51LXNlY3Rpb25cIj5cclxuICAgIDxoMj5EZXNzZXJ0czwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XHJcbiAgICAgIDxoMz5DaG9jb2xhdGUgTW91c3NlPC9oMz5cclxuICAgICAgPHA+RGVjYWRlbnQgZGFyayBjaG9jb2xhdGUgbW91c3NlIHRvcHBlZCB3aXRoIHdoaXBwZWQgY3JlYW0gYW5kIGEgcmFzcGJlcnJ5IGRyaXp6bGUuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XHJcbiAgICAgIDxoMz5WYW5pbGxhIEJlYW4gUGFubmEgQ290dGE8L2gzPlxyXG4gICAgICA8cD5TaWxreSBzbW9vdGggcGFubmEgY290dGEgaW5mdXNlZCB3aXRoIE1hZGFnYXNjYXIgdmFuaWxsYSwgc2VydmVkIHdpdGggZnJlc2ggYmVycmllcy48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgY29uc3QgaW1hZ2VTbGlkZXIgPSBjcmVhdGVJbWFnZVNsaWRlcihbc3RhcnRlckRpc2hJbWFnZSwgbWFpbkRpc2hJbWFnZSwgZGVzc2VydERpc2hJbWFnZV0pO1xyXG5cclxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpbWFnZVNsaWRlcik7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVDb250ZW50O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RDb250ZW50IGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCBjcmVhdGVNZW51Q29udGVudCBmcm9tICcuL21lbnUnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dvRGl2LmlkID0gJ2xvZ28nO1xyXG4gICAgbG9nb0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDE+SGFyZHdpY2sgQ2FmZTwvaDE+XHJcbiAgYDtcclxuXHJcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG4gICAgaG9tZUJ1dHRvbi5pZCA9ICdob21lJztcclxuXHJcbiAgICAvL2FkZCBldmVudCBsaXN0bmVyc1xyXG5cclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XHJcbiAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUnO1xyXG5cclxuICAgIC8vZXZcclxuXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5pZCA9ICdjb250YWN0JztcclxuXHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgICAvLyBhZGQgbWFpbiBjb250ZW50IGhlcmVcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMobWFpbkNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xyXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lQ29udGVudCgpKTtcclxuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbiwgYnV0dG9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNvbnRlbnQoKSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24sIGJ1dHRvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDb250ZW50KCkpO1xyXG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uLCBidXR0b25zKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYWN0aXZlQnV0dG9uLCBidXR0b25zKSB7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGNyZWF0ZU1haW5Db250ZW50KCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKG1haW5Db250ZW50KTtcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lQ29udGVudCgpKTtcclxuXHJcbn1cclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==