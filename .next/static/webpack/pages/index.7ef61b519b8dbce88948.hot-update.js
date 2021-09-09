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
    e.dataTransfer.mozSetDataAt("image/png", stream, 0);
    e.dataTransfer.mozSetDataAt("application/x-moz-file", file, 0);
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
        lineNumber: 97,
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
          lineNumber: 110,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn ".concat((_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)),
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2VmNjFiNTE5YjhkYmNlODg5NDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUNDLE1BQXpDLEVBQWlELENBQWpEO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0MsWUFBRixDQUFlQyxZQUFmLENBQTRCLHdCQUE1QixFQUFzREUsSUFBdEQsRUFBNEQsQ0FBNUQ7QUFDQUosSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVJLGFBQWYsR0FBK0IsTUFBL0I7QUFDRCxHQUpEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlQsSUFBQUEsU0FBUyxDQUFDVSxPQUFWLENBQWtCQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVC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dEM7QUFBZ0QsYUFBRyxFQUFFTztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQTJCR0YsS0FBSyxpQkFDSjtBQUFRLGVBQVMsZ0JBQVNMLGtGQUFULENBQWpCO0FBQTRDLGFBQU8sRUFBRXFCLGVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBcEhEOztHQUFNcEI7O0tBQUFBO0FBc0hOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoeyBkYXRhLCBkaXNwYXRjaCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Jsb2IsIHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyb3BJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLm1velNldERhdGFBdChcImltYWdlL3BuZ1wiLCBzdHJlYW0sIDApO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIubW96U2V0RGF0YUF0KFwiYXBwbGljYXRpb24veC1tb3otZmlsZVwiLCBmaWxlLCAwKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIlxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsZSA9ICgpID0+IHtcclxuICAgIHNldEJsb2IobnVsbCk7XHJcbiAgICBzZXRJbWFnZShudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoICsgMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCAtIDFcclxuICAgIH0pO1xyXG4gICAgZGF0YS5kcm9wRGVwdGggPiAwICYmXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCJcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsXHJcbiAgICAgIGluRHJvcFpvbmU6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsIGRyb3BEZXB0aDogMCB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0Jsb2IpO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmRyb3BhcmVhfVxyXG4gICAgICAgIHJlZj17ZHJvcElucHV0fVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XHJcbiAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxyXG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cclxuICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnLCBpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxkaXYgc3R5bGU9eyFibG9iID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDogeyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y3NzLmltZ19fcHJldmlld30gYWx0PVwicHJldmlld1wiIHNyYz17YmxvYn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRuX19jbGVhcn1gfSBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9PlxyXG4gICAgICAgICAgQ2xlYXIgZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjc3MiLCJVcGxvYWRJbWFnZSIsImRhdGEiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImJsb2IiLCJzZXRCbG9iIiwiZmlsZUlucHV0IiwiZHJvcElucHV0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsIm1velNldERhdGFBdCIsInN0cmVhbSIsImZpbGUiLCJlZmZlY3RBbGxvd2VkIiwib25CdXR0b25DbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUNsZWFyRmlsZSIsImhhbmRsZURyYWdFbnRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcEVmZmVjdCIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcm9wIiwibmV3SW1hZ2UiLCJmaWxlcyIsIm5ld0Jsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVDbGljayIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJkcm9wYXJlYSIsImRpc3BsYXkiLCJpbWdfX3ByZXZpZXciLCJidG5fX2NsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==