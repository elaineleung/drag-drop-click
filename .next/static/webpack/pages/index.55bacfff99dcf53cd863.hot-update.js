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
    e.dataTransfer.setData("Text", e.target.id);
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
    e.dataTransfer.dropEffect = "copyMove";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTViYWNmZmY5OWRjZjUzY2Q4NjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUF4QztBQUNBSixJQUFBQSxDQUFDLENBQUNDLFlBQUYsQ0FBZUksYUFBZixHQUErQixNQUEvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCVCxJQUFBQSxTQUFTLENBQUNVLE9BQVYsQ0FBa0JDLEtBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJiLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUYsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdB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LGlCQUNKO0FBQVEsZUFBUyxnQkFBU0wsa0ZBQVQsQ0FBakI7QUFBNEMsYUFBTyxFQUFFcUIsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FsSEQ7O0dBQU1wQjs7S0FBQUE7QUFvSE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9VcGxvYWRJbWFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGRhdGEsIGRpc3BhdGNoLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJvcElucHV0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIlRleHRcIiwgZS50YXJnZXQuaWQpXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRCbG9iKG51bGwpO1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCArIDFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggLSAxXHJcbiAgICB9KTtcclxuICAgIGRhdGEuZHJvcERlcHRoID4gMCAmJlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weU1vdmVcIjtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsXHJcbiAgICAgIGluRHJvcFpvbmU6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsIGRyb3BEZXB0aDogMCB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0Jsb2IpO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmRyb3BhcmVhfVxyXG4gICAgICAgIHJlZj17ZHJvcElucHV0fVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XHJcbiAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxyXG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cclxuICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnLCBpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxkaXYgc3R5bGU9eyFibG9iID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDogeyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y3NzLmltZ19fcHJldmlld30gYWx0PVwicHJldmlld1wiIHNyYz17YmxvYn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRuX19jbGVhcn1gfSBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9PlxyXG4gICAgICAgICAgQ2xlYXIgZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjc3MiLCJVcGxvYWRJbWFnZSIsImRhdGEiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImJsb2IiLCJzZXRCbG9iIiwiZmlsZUlucHV0IiwiZHJvcElucHV0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJpZCIsImVmZmVjdEFsbG93ZWQiLCJvbkJ1dHRvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlQ2xlYXJGaWxlIiwiaGFuZGxlRHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwiZHJvcERlcHRoIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaW5Ecm9wWm9uZSIsImhhbmRsZURyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImhhbmRsZURyb3AiLCJuZXdJbWFnZSIsImZpbGVzIiwibmV3QmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRyb3BhcmVhIiwiZGlzcGxheSIsImltZ19fcHJldmlldyIsImJ0bl9fY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9