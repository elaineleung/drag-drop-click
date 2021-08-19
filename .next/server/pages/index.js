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
  dispatch
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
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Drag and drop your image file here, or click to select file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: !blob ? {
          display: "none"
        } : {
          display: "block"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().img__preview),
          alt: "preview",
          src: blob
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Image preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, undefined), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `btn ${(_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)}`,
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 7
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
          dispatch: dispatch
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
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
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
	"buttons": "UploadImage_buttons__j12Rh",
	"btn__clear": "UploadImage_btn__clear__ibGTu",
	"btn__upload": "UploadImage_btn__upload__Y4FVL",
	"img__preview": "UploadImage_img__preview__2qPEI"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBTixDQUFlTSxNQUFmLENBQXNCRCxNQUFNLENBQUN2QixLQUE3QjtBQUE3Qjs7QUFDRjtBQUNFLGFBQU9zQixLQUFQO0FBUko7QUFVRCxDQVhNOzs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtYXBwLy4vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Jsb2IsIHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyb3BJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsZSA9ICgpID0+IHtcclxuICAgIHNldEJsb2IobnVsbCk7XHJcbiAgICBzZXRJbWFnZShudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoICsgMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCAtIDFcclxuICAgIH0pO1xyXG4gICAgZGF0YS5kcm9wRGVwdGggPiAwICYmXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLFxyXG4gICAgICBpbkRyb3Bab25lOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLCBkcm9wRGVwdGg6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdCbG9iKTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgY29uc29sZS5sb2cobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5kcm9wYXJlYX1cclxuICAgICAgICAgIHJlZj17ZHJvcElucHV0fVxyXG4gICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cclxuICAgICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XHJcbiAgICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2dpZiwgaW1hZ2UvanBlZywgaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD5EcmFnIGFuZCBkcm9wIHlvdXIgaW1hZ2UgZmlsZSBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZTwvcD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9eyAhYmxvYiA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y3NzLmltZ19fcHJldmlld30gYWx0PVwicHJldmlld1wiIHNyYz17YmxvYn0gLz5cclxuICAgICAgICAgICAgPHA+SW1hZ2UgcHJldmlldzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRuX19jbGVhcn1gfSBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9PlxyXG4gICAgICAgICAgQ2xlYXIgZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1VwbG9hZEltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGRyb3BGaWxlUmVkdWNlciB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGRyb3BGaWxlUmVkdWNlciwge1xuICAgIGRyb3BEZXB0aDogMCxcbiAgICBpbkRyb3Bab25lOiBmYWxzZSxcbiAgICBmaWxlTGlzdDogW11cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EcmFnLCBEcm9wLCBDbGljazwvaDE+XG4gICAgICAgICAgPFVwbG9hZEltYWdlIGRhdGE9e2RhdGF9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgZHJvcEZpbGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX0RST1BfREVQVEhcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRyb3BEZXB0aDogYWN0aW9uLmRyb3BEZXB0aCB9O1xyXG4gICAgY2FzZSBcIlNFVF9JTl9EUk9QX1pPTkVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluRHJvcFpvbmU6IGFjdGlvbi5pbkRyb3Bab25lIH07XHJcbiAgICBjYXNlIFwiQUREX0ZJTEVfVE9fTElTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmlsZUxpc3Q6IHN0YXRlLmZpbGVMaXN0LmNvbmNhdChhY3Rpb24uZmlsZXMpIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcIm1haW5fX2NvbnRhaW5lclwiOiBcIkhvbWVfbWFpbl9fY29udGFpbmVyX18ydkVxblwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZEltYWdlX2NvbnRhaW5lcl9fM0gwLURcIixcblx0XCJkcm9wYXJlYVwiOiBcIlVwbG9hZEltYWdlX2Ryb3BhcmVhX18yVnVTa1wiLFxuXHRcImJ1dHRvbnNcIjogXCJVcGxvYWRJbWFnZV9idXR0b25zX19qMTJSaFwiLFxuXHRcImJ0bl9fY2xlYXJcIjogXCJVcGxvYWRJbWFnZV9idG5fX2NsZWFyX19pYkdUdVwiLFxuXHRcImJ0bl9fdXBsb2FkXCI6IFwiVXBsb2FkSW1hZ2VfYnRuX191cGxvYWRfX1k0RlZMXCIsXG5cdFwiaW1nX19wcmV2aWV3XCI6IFwiVXBsb2FkSW1hZ2VfaW1nX19wcmV2aWV3X18ycVBFSVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjc3MiLCJVcGxvYWRJbWFnZSIsImRhdGEiLCJkaXNwYXRjaCIsImltYWdlIiwic2V0SW1hZ2UiLCJibG9iIiwic2V0QmxvYiIsImZpbGVJbnB1dCIsImRyb3BJbnB1dCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJkYXRhVHJhbnNmZXIiLCJjbGVhckRhdGEiLCJvbkJ1dHRvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlQ2xlYXJGaWxlIiwiaGFuZGxlRHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwiZHJvcERlcHRoIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaW5Ecm9wWm9uZSIsImhhbmRsZURyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImhhbmRsZURyb3AiLCJuZXdJbWFnZSIsImZpbGVzIiwibmV3QmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRyb3BhcmVhIiwiZGlzcGxheSIsImltZ19fcHJldmlldyIsImJ0bl9fY2xlYXIiLCJ1c2VSZWR1Y2VyIiwiSGVhZCIsInN0eWxlcyIsImRyb3BGaWxlUmVkdWNlciIsIkhvbWUiLCJmaWxlTGlzdCIsIm1haW4iLCJtYWluX19jb250YWluZXIiLCJ0aXRsZSIsInN0YXRlIiwiYWN0aW9uIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==