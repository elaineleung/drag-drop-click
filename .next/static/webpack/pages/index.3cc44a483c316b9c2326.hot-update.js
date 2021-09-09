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


var _jsxFileName = "/home/ecll/projects/drag-drop-click/components/UploadImage.js",
    _this = undefined,
    _s = $RefreshSig$();




var UploadImage = function UploadImage(_ref) {
  _s();

  var data = _ref.data,
      dispatch = _ref.dispatch,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      blob = _useState2[0],
      setBlob = _useState2[1];

  var fileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var dropInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var handleDragStart = function handleDragStart(e) {
    e.dataTransfer.setData("text");
    e.dataTransfer.effectAllowed = "move";
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
    e.dataTransfer.dropEffect = "move";
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
        lineNumber: 96,
        columnNumber: 9
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          lineNumber: 109,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn ".concat((_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)),
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2NjNDRhNDgzYzMxNmI5YzIzMjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkI7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVFLGFBQWYsR0FBK0IsTUFBL0I7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlAsSUFBQUEsU0FBUyxDQUFDUSxPQUFWLENBQWtCQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCWCxJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1jLGVBQWUsR0FBRyxTQUFsQkEsZUFB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REYsRUEyQkdGLEtBQUssaUJBQ0o7QUFBUSxlQUFTLGdCQUFTTCxrRkFBVCxDQUFqQjtBQUE0QyxhQUFPLEVBQUVtQixlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQW5IRDs7R0FBTWxCOztLQUFBQTtBQXFITiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwbG9hZEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtibG9iLCBzZXRCbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkcm9wSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiKVxyXG4gICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25CdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJGaWxlID0gKCkgPT4ge1xyXG4gICAgc2V0QmxvYihudWxsKTtcclxuICAgIHNldEltYWdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggKyAxXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoIC0gMVxyXG4gICAgfSk7XHJcbiAgICBkYXRhLmRyb3BEZXB0aCA+IDAgJiZcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIiwgaW5Ecm9wWm9uZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlcIlxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIixcclxuICAgICAgaW5Ecm9wWm9uZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIiwgZHJvcERlcHRoOiAwIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIiwgaW5Ecm9wWm9uZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgY29uc29sZS5sb2cobmV3QmxvYik7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3MuZHJvcGFyZWF9XHJcbiAgICAgICAgcmVmPXtkcm9wSW5wdXR9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cclxuICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ0VudGVyfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XHJcbiAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9naWYsIGltYWdlL2pwZWcsIGltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBzdHlsZT17IWJsb2IgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjc3MuaW1nX19wcmV2aWV3fSBhbHQ9XCJwcmV2aWV3XCIgc3JjPXtibG9ifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ltYWdlICYmIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biAke2Nzcy5idG5fX2NsZWFyfWB9IG9uQ2xpY2s9e2hhbmRsZUNsZWFyRmlsZX0+XHJcbiAgICAgICAgICBDbGVhciBmaWxlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsImNzcyIsIlVwbG9hZEltYWdlIiwiZGF0YSIsImRpc3BhdGNoIiwiY2hpbGRyZW4iLCJpbWFnZSIsInNldEltYWdlIiwiYmxvYiIsInNldEJsb2IiLCJmaWxlSW5wdXQiLCJkcm9wSW5wdXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJvbkJ1dHRvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlQ2xlYXJGaWxlIiwiaGFuZGxlRHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkcm9wRWZmZWN0IiwidHlwZSIsImRyb3BEZXB0aCIsImhhbmRsZURyYWdMZWF2ZSIsImluRHJvcFpvbmUiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJuZXdJbWFnZSIsImZpbGVzIiwibmV3QmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRyb3BhcmVhIiwiZGlzcGxheSIsImltZ19fcHJldmlldyIsImJ0bl9fY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9