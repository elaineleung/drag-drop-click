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

var _jsxFileName = "/home/ecll/projects/drag-drop-click/components/UploadImage.js";



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
    e.dataTransfer.effectAllowed = "move";
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
    e.dataTransfer.dropEffect = "move";
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
        lineNumber: 95,
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
          lineNumber: 108,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
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
    lineNumber: 84,
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

var _jsxFileName = "/home/ecll/projects/drag-drop-click/pages/index.js";





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUcsV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxRQUFSO0FBQWtCQyxFQUFBQTtBQUFsQixDQUFELEtBQWtDO0FBQ3BELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCViwrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNVyxTQUFTLEdBQUdWLDZDQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLFFBQU1XLFNBQVMsR0FBR1gsNkNBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLFFBQU1ZLGVBQWUsR0FBSUMsQ0FBRCxJQUFPO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNDLFlBQUYsQ0FBZUMsYUFBZixHQUErQixNQUEvQjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDMUJOLElBQUFBLFNBQVMsQ0FBQ08sT0FBVixDQUFrQkMsS0FBbEI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCVixJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLFFBQU1hLGVBQWUsR0FBSVAsQ0FBRCxJQUFPO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQVIsSUFBQUEsQ0FBQyxDQUFDUyxlQUFGO0FBQ0FULElBQUFBLENBQUMsQ0FBQ0MsWUFBRixDQUFlUyxVQUFmLEdBQTRCLE1BQTVCO0FBQ0FuQixJQUFBQSxRQUFRLENBQUM7QUFDUG9CLE1BQUFBLElBQUksRUFBRSxnQkFEQztBQUVQQyxNQUFBQSxTQUFTLEVBQUV0QixJQUFJLENBQUNzQixTQUFMLEdBQWlCO0FBRnJCLEtBQUQsQ0FBUjtBQUlELEdBUkQ7O0FBVUEsUUFBTUMsZUFBZSxHQUFJYixDQUFELElBQU87QUFDN0JBLElBQUFBLENBQUMsQ0FBQ1EsY0FBRjtBQUNBUixJQUFBQSxDQUFDLENBQUNTLGVBQUY7QUFDQWxCLElBQUFBLFFBQVEsQ0FBQztBQUNQb0IsTUFBQUEsSUFBSSxFQUFFLGdCQURDO0FBRVBDLE1BQUFBLFNBQVMsRUFBRXRCLElBQUksQ0FBQ3NCLFNBQUwsR0FBaUI7QUFGckIsS0FBRCxDQUFSO0FBSUF0QixJQUFBQSxJQUFJLENBQUNzQixTQUFMLEdBQWlCLENBQWpCLElBQ0VyQixRQUFRLENBQUM7QUFBRW9CLE1BQUFBLElBQUksRUFBRSxrQkFBUjtBQUE0QkcsTUFBQUEsVUFBVSxFQUFFO0FBQXhDLEtBQUQsQ0FEVjtBQUVELEdBVEQ7O0FBV0EsUUFBTUMsY0FBYyxHQUFJZixDQUFELElBQU87QUFDNUJBLElBQUFBLENBQUMsQ0FBQ1EsY0FBRjtBQUNBUixJQUFBQSxDQUFDLENBQUNTLGVBQUY7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVTLFVBQWYsR0FBNEIsTUFBNUI7QUFDQW5CLElBQUFBLFFBQVEsQ0FBQztBQUNQb0IsTUFBQUEsSUFBSSxFQUFFLGtCQURDO0FBRVBHLE1BQUFBLFVBQVUsRUFBRTtBQUZMLEtBQUQsQ0FBUjtBQUlELEdBUkQ7O0FBVUEsUUFBTUUsVUFBVSxHQUFJaEIsQ0FBRCxJQUFPO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQVIsSUFBQUEsQ0FBQyxDQUFDUyxlQUFGO0FBQ0EsVUFBTVEsUUFBUSxHQUFHakIsQ0FBQyxDQUFDQyxZQUFGLENBQWVpQixLQUFmLENBQXFCLENBQXJCLENBQWpCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JKLFFBQXBCLENBQWhCO0FBQ0ExQixJQUFBQSxRQUFRLENBQUM7QUFDUG9CLE1BQUFBLElBQUksRUFBRSxrQkFEQztBQUVQTSxNQUFBQTtBQUZPLEtBQUQsQ0FBUjtBQUlBckIsSUFBQUEsT0FBTyxDQUFDdUIsT0FBRCxDQUFQO0FBQ0F6QixJQUFBQSxRQUFRLENBQUN1QixRQUFELENBQVI7QUFDQTFCLElBQUFBLFFBQVEsQ0FBQztBQUFFb0IsTUFBQUEsSUFBSSxFQUFFLGdCQUFSO0FBQTBCQyxNQUFBQSxTQUFTLEVBQUU7QUFBckMsS0FBRCxDQUFSO0FBQ0FyQixJQUFBQSxRQUFRLENBQUM7QUFBRW9CLE1BQUFBLElBQUksRUFBRSxrQkFBUjtBQUE0QkcsTUFBQUEsVUFBVSxFQUFFO0FBQXhDLEtBQUQsQ0FBUjtBQUNELEdBYkQ7O0FBZUEsUUFBTVEsV0FBVyxHQUFJdEIsQ0FBRCxJQUFPO0FBQ3pCQSxJQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQSxVQUFNVyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnJCLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU0wsS0FBVCxDQUFlLENBQWYsQ0FBcEIsQ0FBaEI7QUFDQU0sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE9BQVo7QUFDQXZCLElBQUFBLE9BQU8sQ0FBQ3VCLE9BQUQsQ0FBUDtBQUNBLFVBQU1GLFFBQVEsR0FBR2pCLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU0wsS0FBVCxDQUFlLENBQWYsQ0FBakI7QUFDQXhCLElBQUFBLFFBQVEsQ0FBQ3VCLFFBQUQsQ0FBUjtBQUNBTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNBMUIsSUFBQUEsUUFBUSxDQUFDO0FBQ1BvQixNQUFBQSxJQUFJLEVBQUUsa0JBREM7QUFFUE0sTUFBQUE7QUFGTyxLQUFELENBQVI7QUFJRCxHQVpEOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFFN0IsaUZBQWhCO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVBLGdGQURiO0FBRUUsU0FBRyxFQUFFVSxTQUZQO0FBR0UsaUJBQVcsRUFBRUMsZUFIZjtBQUlFLGlCQUFXLEVBQUVRLGVBSmY7QUFLRSxpQkFBVyxFQUFFTSxlQUxmO0FBTUUsZ0JBQVUsRUFBRUUsY0FOZDtBQU9FLFlBQU0sRUFBRUMsVUFQVjtBQVFFLGFBQU8sRUFBRWIsYUFSWDtBQUFBLDhCQVVFO0FBQ0UsYUFBSyxFQUFFO0FBQUV5QixVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQURUO0FBRUUsV0FBRyxFQUFFL0IsU0FGUDtBQUdFLGdCQUFRLEVBQUV5QixXQUhaO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxVQUFFLEVBQUMsTUFMTDtBQU1FLGNBQU0sRUFBQyxrQ0FOVDtBQU9FLFlBQUksRUFBQyxNQVBQO0FBUUUsb0JBQVksRUFBQyxLQVJmO0FBU0UsZ0JBQVEsRUFBQztBQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsRUFxQkc5QixRQXJCSCxlQXNCRTtBQUFLLGFBQUssRUFBRSxDQUFDRyxJQUFELEdBQVE7QUFBRWlDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQVIsR0FBOEI7QUFBRUEsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBMUM7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUV4QyxvRkFBaEI7QUFBa0MsYUFBRyxFQUFDLFNBQXRDO0FBQWdELGFBQUcsRUFBRU87QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQTJCR0YsS0FBSyxpQkFDSjtBQUFRLGVBQVMsRUFBRyxPQUFNTCxrRkFBZSxFQUF6QztBQUE0QyxhQUFPLEVBQUVrQixlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQ0QsQ0FsSEQ7O0FBb0hBLGlFQUFlakIsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTOEMsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQzdDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1Cd0MsaURBQVUsQ0FBQ0csOERBQUQsRUFBa0I7QUFDbkR0QixJQUFBQSxTQUFTLEVBQUUsQ0FEd0M7QUFFbkRFLElBQUFBLFVBQVUsRUFBRSxLQUZ1QztBQUduRHNCLElBQUFBLFFBQVEsRUFBRTtBQUh5QyxHQUFsQixDQUFuQztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFSCwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVBLHFFQUFqQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsZ0ZBQWhCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLDREQUFEO0FBQWEsY0FBSSxFQUFFM0MsSUFBbkI7QUFBeUIsa0JBQVEsRUFBRUMsUUFBbkM7QUFBQSxpQ0FDRTtBQUFBLDhEQUNzQyxHQUR0QyxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ00sTUFBTTJDLGVBQWUsR0FBRyxDQUFDTSxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDaEQsVUFBUUEsTUFBTSxDQUFDOUIsSUFBZjtBQUNFLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWTZCLEtBQVo7QUFBbUI1QixRQUFBQSxTQUFTLEVBQUU2QixNQUFNLENBQUM3QjtBQUFyQzs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsNkNBQVk0QixLQUFaO0FBQW1CMUIsUUFBQUEsVUFBVSxFQUFFMkIsTUFBTSxDQUFDM0I7QUFBdEM7O0FBQ0YsU0FBSyxrQkFBTDtBQUNFLDZDQUFZMEIsS0FBWjtBQUFtQkosUUFBQUEsUUFBUSxFQUFFSSxLQUFLLENBQUNKLFFBQU4sQ0FBZU0sTUFBZixDQUFzQkQsTUFBTSxDQUFDdkIsS0FBN0I7QUFBN0I7O0FBQ0Y7QUFDRSxhQUFPc0IsS0FBUDtBQVJKO0FBVUQsQ0FYTTs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtYXBwLy4vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtibG9iLCBzZXRCbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkcm9wSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRCbG9iKG51bGwpO1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCArIDFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggLSAxXHJcbiAgICB9KTtcclxuICAgIGRhdGEuZHJvcERlcHRoID4gMCAmJlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLFxyXG4gICAgICBpbkRyb3Bab25lOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLCBkcm9wRGVwdGg6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdCbG9iKTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgY29uc29sZS5sb2cobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5kcm9wYXJlYX1cclxuICAgICAgICByZWY9e2Ryb3BJbnB1dH1cclxuICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgb25EcmFnTGVhdmU9e2hhbmRsZURyYWdMZWF2ZX1cclxuICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cclxuICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgb25DbGljaz17b25CdXR0b25DbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgaWQ9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL2dpZiwgaW1hZ2UvanBlZywgaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IHN0eWxlPXshYmxvYiA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Nzcy5pbWdfX3ByZXZpZXd9IGFsdD1cInByZXZpZXdcIiBzcmM9e2Jsb2J9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuICR7Y3NzLmJ0bl9fY2xlYXJ9YH0gb25DbGljaz17aGFuZGxlQ2xlYXJGaWxlfT5cclxuICAgICAgICAgIENsZWFyIGZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZHJvcEZpbGVSZWR1Y2VyIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZHJvcEZpbGVSZWR1Y2VyLCB7XG4gICAgZHJvcERlcHRoOiAwLFxuICAgIGluRHJvcFpvbmU6IGZhbHNlLFxuICAgIGZpbGVMaXN0OiBbXVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fY29udGFpbmVyfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkRyYWcsIERyb3AsIENsaWNrPC9oMT5cbiAgICAgICAgICA8VXBsb2FkSW1hZ2UgZGF0YT17ZGF0YX0gZGlzcGF0Y2g9e2Rpc3BhdGNofT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEcmFnIGFuZCBkcm9wIHlvdXIgaW1hZ2UgZmlsZSBoZXJlLHtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4+b3IgY2xpY2sgdG8gc2VsZWN0IGZpbGU8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9VcGxvYWRJbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgZHJvcEZpbGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX0RST1BfREVQVEhcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRyb3BEZXB0aDogYWN0aW9uLmRyb3BEZXB0aCB9O1xyXG4gICAgY2FzZSBcIlNFVF9JTl9EUk9QX1pPTkVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluRHJvcFpvbmU6IGFjdGlvbi5pbkRyb3Bab25lIH07XHJcbiAgICBjYXNlIFwiQUREX0ZJTEVfVE9fTElTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmlsZUxpc3Q6IHN0YXRlLmZpbGVMaXN0LmNvbmNhdChhY3Rpb24uZmlsZXMpIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcIm1haW5fX2NvbnRhaW5lclwiOiBcIkhvbWVfbWFpbl9fY29udGFpbmVyX18ydkVxblwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVXBsb2FkSW1hZ2VfY29udGFpbmVyX18zSDAtRFwiLFxuXHRcImRyb3BhcmVhXCI6IFwiVXBsb2FkSW1hZ2VfZHJvcGFyZWFfXzJWdVNrXCIsXG5cdFwiYnRuX19jbGVhclwiOiBcIlVwbG9hZEltYWdlX2J0bl9fY2xlYXJfX2liR1R1XCIsXG5cdFwiaW1nX19wcmV2aWV3XCI6IFwiVXBsb2FkSW1hZ2VfaW1nX19wcmV2aWV3X18ycVBFSVwiLFxuXHRcImZpbGVfX21ldGFkYXRhXCI6IFwiVXBsb2FkSW1hZ2VfZmlsZV9fbWV0YWRhdGFfXzM3UmlHXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsImNzcyIsIlVwbG9hZEltYWdlIiwiZGF0YSIsImRpc3BhdGNoIiwiY2hpbGRyZW4iLCJpbWFnZSIsInNldEltYWdlIiwiYmxvYiIsInNldEJsb2IiLCJmaWxlSW5wdXQiLCJkcm9wSW5wdXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJlIiwiZGF0YVRyYW5zZmVyIiwiZWZmZWN0QWxsb3dlZCIsIm9uQnV0dG9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVDbGVhckZpbGUiLCJoYW5kbGVEcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRyb3BFZmZlY3QiLCJ0eXBlIiwiZHJvcERlcHRoIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaW5Ecm9wWm9uZSIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsIm5ld0ltYWdlIiwiZmlsZXMiLCJuZXdCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiZHJvcGFyZWEiLCJkaXNwbGF5IiwiaW1nX19wcmV2aWV3IiwiYnRuX19jbGVhciIsInVzZVJlZHVjZXIiLCJIZWFkIiwic3R5bGVzIiwiZHJvcEZpbGVSZWR1Y2VyIiwiSG9tZSIsImZpbGVMaXN0IiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsInRpdGxlIiwic3RhdGUiLCJhY3Rpb24iLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9