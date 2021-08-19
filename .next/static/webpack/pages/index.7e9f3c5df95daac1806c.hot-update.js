"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UploadImage.js":
/*!***********************************!*\
  !*** ./components/UploadImage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/UploadImage.module.css */ "./styles/UploadImage.module.css");
/* harmony import */ var _styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/ecll/projects/drag-drop-click-component/components/UploadImage.js",
    _this = undefined,
    _s = $RefreshSig$();




var UploadImage = function UploadImage(_ref) {
  _s();

  var data = _ref.data,
      dispatch = _ref.dispatch;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      blob = _useState2[0],
      setBlob = _useState2[1];

  var fileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var dropInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var handleDragStart = function handleDragStart(e) {
    e.dataTransfer.clearData();
  };

  var onButtonClick = function onButtonClick() {
    fileInput.current.click();
  };

  var handleClearFile = function handleClearFile() {
    setBlob(null);
    setImage(null);
  };

  var handleDragEnter = function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "SET_DROP_DEPTH",
      dropDepth: data.dropDepth + 1
    });
  };

  var handleDragLeave = function handleDragLeave(e) {
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

  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dispatch({
      type: "SET_IN_DROP_ZONE",
      inDropZone: true
    });
  };

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var newImage = e.dataTransfer.files[0];
    var newBlob = URL.createObjectURL(newImage);
    dispatch({
      type: "ADD_FILE_TO_LIST",
      newImage: newImage
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

  var handleClick = function handleClick(e) {
    e.preventDefault();
    var newBlob = URL.createObjectURL(e.target.files[0]);
    console.log(newBlob);
    setBlob(newBlob);
    var newImage = e.target.files[0];
    setImage(newImage);
    console.log(newImage);
    dispatch({
      type: "ADD_FILE_TO_LIST",
      newImage: newImage
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Drag and drop your image file here, or click to select file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Image preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn ".concat((_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)),
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 7
  }, _this);
};

_s(UploadImage, "rXsQPR7W8zBwmIIh1t3Rc/sw8Y0=");

_c = UploadImage;
/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

var _c;

$RefreshReg$(_c, "UploadImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2U5ZjNjNWRmOTVkYWFjMTgwNmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNoQkwsK0NBQVEsQ0FBQyxJQUFELENBRFE7QUFBQSxNQUNuQ00sS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEsbUJBRWxCUCwrQ0FBUSxDQUFDLElBQUQsQ0FGVTtBQUFBLE1BRW5DUSxJQUZtQztBQUFBLE1BRTdCQyxPQUY2Qjs7QUFHMUMsTUFBTUMsU0FBUyxHQUFHVCw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVSxTQUFTLEdBQUdWLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLFNBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQk4sSUFBQUEsU0FBUyxDQUFDTyxPQUFWLENBQWtCQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCVixJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1AsQ0FBRCxFQUFPO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQVIsSUFBQUEsQ0FBQyxDQUFDUyxlQUFGO0FBQ0FqQixJQUFBQSxRQUFRLENB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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DRCxDQWxIRDs7R0FBTWhCOztLQUFBQTtBQW9ITiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwbG9hZEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Jsb2IsIHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyb3BJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsZSA9ICgpID0+IHtcclxuICAgIHNldEJsb2IobnVsbCk7XHJcbiAgICBzZXRJbWFnZShudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoICsgMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCAtIDFcclxuICAgIH0pO1xyXG4gICAgZGF0YS5kcm9wRGVwdGggPiAwICYmXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLFxyXG4gICAgICBpbkRyb3Bab25lOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLCBkcm9wRGVwdGg6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdCbG9iKTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgY29uc29sZS5sb2cobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5kcm9wYXJlYX1cclxuICAgICAgICAgIHJlZj17ZHJvcElucHV0fVxyXG4gICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cclxuICAgICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XHJcbiAgICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2dpZiwgaW1hZ2UvanBlZywgaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD5EcmFnIGFuZCBkcm9wIHlvdXIgaW1hZ2UgZmlsZSBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZTwvcD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9eyAhYmxvYiA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y3NzLmltZ19fcHJldmlld30gYWx0PVwicHJldmlld1wiIHNyYz17YmxvYn0gLz5cclxuICAgICAgICAgICAgPHA+SW1hZ2UgcHJldmlldzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRuX19jbGVhcn1gfSBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9PlxyXG4gICAgICAgICAgQ2xlYXIgZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsImNzcyIsIlVwbG9hZEltYWdlIiwiZGF0YSIsImRpc3BhdGNoIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImJsb2IiLCJzZXRCbG9iIiwiZmlsZUlucHV0IiwiZHJvcElucHV0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsImNsZWFyRGF0YSIsIm9uQnV0dG9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVDbGVhckZpbGUiLCJoYW5kbGVEcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiaGFuZGxlRHJvcCIsIm5ld0ltYWdlIiwiZmlsZXMiLCJuZXdCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiZHJvcGFyZWEiLCJkaXNwbGF5IiwiaW1nX19wcmV2aWV3IiwiYnRuX19jbGVhciJdLCJzb3VyY2VSb290IjoiIn0=