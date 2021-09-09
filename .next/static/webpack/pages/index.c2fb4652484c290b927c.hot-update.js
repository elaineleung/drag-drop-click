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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJmYjQ2NTI0ODRjMjkwYjkyN2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUF4QztBQUNBSixJQUFBQSxDQUFDLENBQUNDLFlBQUYsQ0FBZUksYUFBZixHQUErQixNQUEvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCVCxJQUFBQSxTQUFTLENBQUNVLE9BQVYsQ0FBa0JDLEtBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJiLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUYsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdB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QUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBMkJHRixLQUFLLGlCQUNKO0FBQVEsZUFBUyxnQkFBU0wsa0ZBQVQsQ0FBakI7QUFBNEMsYUFBTyxFQUFFcUIsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FuSEQ7O0dBQU1wQjs7S0FBQUE7QUFxSE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRJbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9VcGxvYWRJbWFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGRhdGEsIGRpc3BhdGNoLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZHJvcElucHV0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZS50YXJnZXQuaWQpXHJcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRCbG9iKG51bGwpO1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0RST1BfREVQVEhcIixcclxuICAgICAgZHJvcERlcHRoOiBkYXRhLmRyb3BEZXB0aCArIDFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggLSAxXHJcbiAgICB9KTtcclxuICAgIGRhdGEuZHJvcERlcHRoID4gMCAmJlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLFxyXG4gICAgICBpbkRyb3Bab25lOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIHNldEltYWdlKG5ld0ltYWdlKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLCBkcm9wRGVwdGg6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lOX0RST1BfWk9ORVwiLCBpbkRyb3Bab25lOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdCbG9iKTtcclxuICAgIHNldEJsb2IobmV3QmxvYik7XHJcbiAgICBjb25zdCBuZXdJbWFnZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgY29uc29sZS5sb2cobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9GSUxFX1RPX0xJU1RcIixcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5kcm9wYXJlYX1cclxuICAgICAgICByZWY9e2Ryb3BJbnB1dH1cclxuICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgb25EcmFnTGVhdmU9e2hhbmRsZURyYWdMZWF2ZX1cclxuICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cclxuICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgb25DbGljaz17b25CdXR0b25DbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgaWQ9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL2dpZiwgaW1hZ2UvanBlZywgaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IHN0eWxlPXshYmxvYiA/IHsgZGlzcGxheTogXCJub25lXCIgfSA6IHsgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Nzcy5pbWdfX3ByZXZpZXd9IGFsdD1cInByZXZpZXdcIiBzcmM9e2Jsb2J9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuICR7Y3NzLmJ0bl9fY2xlYXJ9YH0gb25DbGljaz17aGFuZGxlQ2xlYXJGaWxlfT5cclxuICAgICAgICAgIENsZWFyIGZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiY3NzIiwiVXBsb2FkSW1hZ2UiLCJkYXRhIiwiZGlzcGF0Y2giLCJjaGlsZHJlbiIsImltYWdlIiwic2V0SW1hZ2UiLCJibG9iIiwic2V0QmxvYiIsImZpbGVJbnB1dCIsImRyb3BJbnB1dCIsImhhbmRsZURyYWdTdGFydCIsImUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiaWQiLCJlZmZlY3RBbGxvd2VkIiwib25CdXR0b25DbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUNsZWFyRmlsZSIsImhhbmRsZURyYWdFbnRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcEVmZmVjdCIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcm9wIiwibmV3SW1hZ2UiLCJmaWxlcyIsIm5ld0Jsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJkcm9wYXJlYSIsImRpc3BsYXkiLCJpbWdfX3ByZXZpZXciLCJidG5fX2NsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==