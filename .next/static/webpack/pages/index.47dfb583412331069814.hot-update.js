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
    e.dataTransfer.dropEffect = "move";
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
          lineNumber: 107,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn ".concat((_styles_UploadImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn__clear)),
      onClick: handleClearFile,
      children: "Clear file"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdkZmI1ODM0MTIzMzEwNjk4MTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLFNBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQk4sSUFBQUEsU0FBUyxDQUFDTyxPQUFWLENBQWtCQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCVixJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1AsQ0FBRCxFQUFPO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQVIsSUFBQUEsQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBakhEOztHQUFNakI7O0tBQUFBO0FBbUhOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoeyBkYXRhLCBkaXNwYXRjaCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Jsb2IsIHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRyb3BJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmaWxlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsZSA9ICgpID0+IHtcclxuICAgIHNldEJsb2IobnVsbCk7XHJcbiAgICBzZXRJbWFnZShudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoICsgMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCAtIDFcclxuICAgIH0pO1xyXG4gICAgZGF0YS5kcm9wRGVwdGggPiAwICYmXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLFxyXG4gICAgICBpbkRyb3Bab25lOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLCBkcm9wRGVwdGg6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdCbG9iKTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgY29uc29sZS5sb2cobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5kcm9wYXJlYX1cclxuICAgICAgICByZWY9e2Ryb3BJbnB1dH1cclxuICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgb25EcmFnTGVhdmU9e2hhbmRsZURyYWdMZWF2ZX1cclxuICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cclxuICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgb25DbGljaz17b25CdXR0b25DbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgaWQ9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL2dpZiwgaW1hZ2UvanBlZywgaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IHN0eWxlPXshYmxvYiA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Nzcy5pbWdfX3ByZXZpZXd9IGFsdD1cInByZXZpZXdcIiBzcmM9e2Jsb2J9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuICR7Y3NzLmJ0bl9fY2xlYXJ9YH0gb25DbGljaz17aGFuZGxlQ2xlYXJGaWxlfT5cclxuICAgICAgICAgIENsZWFyIGZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiY3NzIiwiVXBsb2FkSW1hZ2UiLCJkYXRhIiwiZGlzcGF0Y2giLCJjaGlsZHJlbiIsImltYWdlIiwic2V0SW1hZ2UiLCJibG9iIiwic2V0QmxvYiIsImZpbGVJbnB1dCIsImRyb3BJbnB1dCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJkYXRhVHJhbnNmZXIiLCJjbGVhckRhdGEiLCJvbkJ1dHRvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlQ2xlYXJGaWxlIiwiaGFuZGxlRHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwiZHJvcERlcHRoIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaW5Ecm9wWm9uZSIsImhhbmRsZURyYWdPdmVyIiwiZHJvcEVmZmVjdCIsImhhbmRsZURyb3AiLCJuZXdJbWFnZSIsImZpbGVzIiwibmV3QmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRyb3BhcmVhIiwiZGlzcGxheSIsImltZ19fcHJldmlldyIsImJ0bl9fY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9