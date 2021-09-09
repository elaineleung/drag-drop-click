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
    e.dataTransfer.setData("text", e.target.id);
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
    e.dataTransfer.dropEffect = "none";
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
        lineNumber: 95,
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
          lineNumber: 108,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
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
    lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE5MDk5NGU5MzM0NTU3NWRhYTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUF4QztBQUNBSixJQUFBQSxDQUFDLENBQUNDLFlBQUYsQ0FBZUksYUFBZixHQUErQixNQUEvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCVCxJQUFBQSxTQUFTLENBQUNVLE9BQVYsQ0FBa0JDLEtBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJiLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUYsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdB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LGlCQUNKO0FBQVEsZUFBUyxnQkFBU0wsa0ZBQVQsQ0FBakI7QUFBNEMsYUFBTyxFQUFFcUIsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FsSEQ7O0dBQU1wQjs7S0FBQUE7QUFvSE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9VcGxvYWRJbWFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGRhdGEsIGRpc3BhdGNoLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJvcElucHV0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZS50YXJnZXQuaWQpXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRCbG9iKG51bGwpO1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCArIDFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggLSAxXHJcbiAgICB9KTtcclxuICAgIGRhdGEuZHJvcERlcHRoID4gMCAmJlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIixcclxuICAgICAgaW5Ecm9wWm9uZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIiwgZHJvcERlcHRoOiAwIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIiwgaW5Ecm9wWm9uZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgY29uc29sZS5sb2cobmV3QmxvYik7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfRklMRV9UT19MSVNUXCIsXHJcbiAgICAgIG5ld0ltYWdlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3MuZHJvcGFyZWF9XHJcbiAgICAgICAgcmVmPXtkcm9wSW5wdXR9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cclxuICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ0VudGVyfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XHJcbiAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9naWYsIGltYWdlL2pwZWcsIGltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBzdHlsZT17IWJsb2IgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjc3MuaW1nX19wcmV2aWV3fSBhbHQ9XCJwcmV2aWV3XCIgc3JjPXtibG9ifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ltYWdlICYmIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biAke2Nzcy5idG5fX2NsZWFyfWB9IG9uQ2xpY2s9e2hhbmRsZUNsZWFyRmlsZX0+XHJcbiAgICAgICAgICBDbGVhciBmaWxlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsImNzcyIsIlVwbG9hZEltYWdlIiwiZGF0YSIsImRpc3BhdGNoIiwiY2hpbGRyZW4iLCJpbWFnZSIsInNldEltYWdlIiwiYmxvYiIsInNldEJsb2IiLCJmaWxlSW5wdXQiLCJkcm9wSW5wdXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsImlkIiwiZWZmZWN0QWxsb3dlZCIsIm9uQnV0dG9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVDbGVhckZpbGUiLCJoYW5kbGVEcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wRWZmZWN0IiwiaGFuZGxlRHJvcCIsIm5ld0ltYWdlIiwiZmlsZXMiLCJuZXdCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiZHJvcGFyZWEiLCJkaXNwbGF5IiwiaW1nX19wcmV2aWV3IiwiYnRuX19jbGVhciJdLCJzb3VyY2VSb290IjoiIn0=