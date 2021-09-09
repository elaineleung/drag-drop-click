(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/UploadImage.js":
/*!***********************************!*\
  !*** ./components/UploadImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/UploadImage.module.css */ "./styles/UploadImage.module.css");
/* harmony import */ var _styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/ecll/projects/drag-drop-click-component/components/UploadImage.js";



const UploadImage = ({
  data,
  dispatch,
  children
}) => {
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: blob,
    1: setBlob
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const fileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const dropInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const handleDragStart = e => {
    e.dataTransfer.clearData();
  };

  const onButtonClick = () => {
    fileInput.current.click();
  };

  const handleClearFile = () => {
    setBlob(null);
    setImage(null);
  };

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SET_DROP_DEPTH",
      dropDepth: data.dropDepth + 1
    });
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SET_DROP_DEPTH",
      dropDepth: data.dropDepth - 1
    });
    data.dropDepth > 0 && dispatch({
      type: "SET_IN_DROP_ZONE",
      inDropZone: false
    });
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dispatch({
      type: "SET_IN_DROP_ZONE",
      inDropZone: true
    });
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const newImage = e.dataTransfer.files[0];
    const newBlob = URL.createObjectURL(newImage);
    dispatch({
      type: "ADD_FILE_TO_LIST",
      newImage
    });
    setBlob(newBlob);
    setImage(newImage);
    dispatch({
      type: "SET_DROP_DEPTH",
      dropDepth: 0
    });
    dispatch({
      type: "SET_IN_DROP_ZONE",
      inDropZone: false
    });
  };

  const handleClick = e => {
    e.preventDefault();
    const newBlob = URL.createObjectURL(e.target.files[0]);
    console.log(newBlob);
    setBlob(newBlob);
    const newImage = e.target.files[0];
    setImage(newImage);
    console.log(newImage);
    dispatch({
      type: "ADD_FILE_TO_LIST",
      newImage
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().droparea),
      ref: dropInput,
      onDragStart: handleDragStart,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      onClick: onButtonClick,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        style: {
          display: "none"
        },
        ref: fileInput,
        onChange: handleClick,
        type: "file",
        id: "file",
        accept: "image/gif, image/jpeg, image/png",
        name: "file",
        autoComplete: "off",
        tabIndex: "-1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: !blob ? {
          display: "none"
        } : {
          display: "block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().img__preview),
          alt: "preview",
          src: blob
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `btn ${(_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)}`,
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UploadImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UploadImage */ "./components/UploadImage.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducer.js */ "./store/reducer.js");

var _jsxFileName = "/home/ecll/projects/drag-drop-click-component/pages/index.js";





function Home() {
  const {
    0: data,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_store_reducer_js__WEBPACK_IMPORTED_MODULE_4__.dropFileReducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: []
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main__container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
          children: "Drag, Drop, Click"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadImage__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: data,
          dispatch: dispatch,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Drag and drop your image file here,", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "or click to select file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropFileReducer": () => (/* binding */ dropFileReducer)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dropFileReducer = (state, action) => {
  switch (action.type) {
    case "SET_DROP_DEPTH":
      return _objectSpread(_objectSpread({}, state), {}, {
        dropDepth: action.dropDepth
      });

    case "SET_IN_DROP_ZONE":
      return _objectSpread(_objectSpread({}, state), {}, {
        inDropZone: action.inDropZone
      });

    case "ADD_FILE_TO_LIST":
      return _objectSpread(_objectSpread({}, state), {}, {
        fileList: state.fileList.concat(action.files)
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"main__container": "Home_main__container__2vEqn",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"grid": "Home_grid__2Ei2F"
};


/***/ }),

/***/ "./styles/UploadImage.module.css":
/*!***************************************!*\
  !*** ./styles/UploadImage.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "UploadImage_container__3H0-D",
	"droparea": "UploadImage_droparea__2VuSk",
	"btn__clear": "UploadImage_btn__clear__ibGTu",
	"img__preview": "UploadImage_img__preview__2qPEI",
	"file__metadata": "UploadImage_file__metadata__37RiG"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIsS0FBWjtBQUFtQkosUUFBQUEsUUFBUSxFQUFFSSxLQUFLLENBQUNKLFFBQU4sQ0FBZU0sTUFBZixDQUFzQkQsTUFBTSxDQUFDdkIsS0FBN0I7QUFBN0I7O0FBQ0Y7QUFDRSxhQUFPc0IsS0FBUDtBQVJKO0FBVUQsQ0FYTTs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtYXBwLy4vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtibG9iLCBzZXRCbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkcm9wSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5jbGVhckRhdGEoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRCbG9iKG51bGwpO1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCArIDFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggLSAxXHJcbiAgICB9KTtcclxuICAgIGRhdGEuZHJvcERlcHRoID4gMCAmJlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIixcclxuICAgICAgaW5Ecm9wWm9uZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIiwgZHJvcERlcHRoOiAwIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIiwgaW5Ecm9wWm9uZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgY29uc29sZS5sb2cobmV3QmxvYik7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3MuZHJvcGFyZWF9XHJcbiAgICAgICAgcmVmPXtkcm9wSW5wdXR9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cclxuICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ0VudGVyfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XHJcbiAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9naWYsIGltYWdlL2pwZWcsIGltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBzdHlsZT17IWJsb2IgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjc3MuaW1nX19wcmV2aWV3fSBhbHQ9XCJwcmV2aWV3XCIgc3JjPXtibG9ifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ltYWdlICYmIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biAke2Nzcy5idG5fX2NsZWFyfWB9IG9uQ2xpY2s9e2hhbmRsZUNsZWFyRmlsZX0+XHJcbiAgICAgICAgICBDbGVhciBmaWxlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1VwbG9hZEltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGRyb3BGaWxlUmVkdWNlciB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGRyb3BGaWxlUmVkdWNlciwge1xuICAgIGRyb3BEZXB0aDogMCxcbiAgICBpbkRyb3Bab25lOiBmYWxzZSxcbiAgICBmaWxlTGlzdDogW11cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EcmFnLCBEcm9wLCBDbGljazwvaDE+XG4gICAgICAgICAgPFVwbG9hZEltYWdlIGRhdGE9e2RhdGF9IGRpc3BhdGNoPXtkaXNwYXRjaH0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCB5b3VyIGltYWdlIGZpbGUgaGVyZSx7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuPm9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvVXBsb2FkSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IGRyb3BGaWxlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9EUk9QX0RFUFRIXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkcm9wRGVwdGg6IGFjdGlvbi5kcm9wRGVwdGggfTtcclxuICAgIGNhc2UgXCJTRVRfSU5fRFJPUF9aT05FXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbkRyb3Bab25lOiBhY3Rpb24uaW5Ecm9wWm9uZSB9O1xyXG4gICAgY2FzZSBcIkFERF9GSUxFX1RPX0xJU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZpbGVMaXN0OiBzdGF0ZS5maWxlTGlzdC5jb25jYXQoYWN0aW9uLmZpbGVzKSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJtYWluX19jb250YWluZXJcIjogXCJIb21lX21haW5fX2NvbnRhaW5lcl9fMnZFcW5cIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZEltYWdlX2NvbnRhaW5lcl9fM0gwLURcIixcblx0XCJkcm9wYXJlYVwiOiBcIlVwbG9hZEltYWdlX2Ryb3BhcmVhX18yVnVTa1wiLFxuXHRcImJ0bl9fY2xlYXJcIjogXCJVcGxvYWRJbWFnZV9idG5fX2NsZWFyX19pYkdUdVwiLFxuXHRcImltZ19fcHJldmlld1wiOiBcIlVwbG9hZEltYWdlX2ltZ19fcHJldmlld19fMnFQRUlcIixcblx0XCJmaWxlX19tZXRhZGF0YVwiOiBcIlVwbG9hZEltYWdlX2ZpbGVfX21ldGFkYXRhX18zN1JpR1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjc3MiLCJVcGxvYWRJbWFnZSIsImRhdGEiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImJsb2IiLCJzZXRCbG9iIiwiZmlsZUlucHV0IiwiZHJvcElucHV0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsImNsZWFyRGF0YSIsIm9uQnV0dG9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVDbGVhckZpbGUiLCJoYW5kbGVEcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiaGFuZGxlRHJvcCIsIm5ld0ltYWdlIiwiZmlsZXMiLCJuZXdCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiZHJvcGFyZWEiLCJkaXNwbGF5IiwiaW1nX19wcmV2aWV3IiwiYnRuX19jbGVhciIsInVzZVJlZHVjZXIiLCJIZWFkIiwic3R5bGVzIiwiZHJvcEZpbGVSZWR1Y2VyIiwiSG9tZSIsImZpbGVMaXN0IiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsInRpdGxlIiwic3RhdGUiLCJhY3Rpb24iLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9