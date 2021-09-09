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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJkMjhiYjFkNzgyNDlkM2ZjYjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDMUJOLCtDQUFRLENBQUMsSUFBRCxDQURrQjtBQUFBLE1BQzdDTyxLQUQ2QztBQUFBLE1BQ3RDQyxRQURzQzs7QUFBQSxtQkFFNUJSLCtDQUFRLENBQUMsSUFBRCxDQUZvQjtBQUFBLE1BRTdDUyxJQUY2QztBQUFBLE1BRXZDQyxPQUZ1Qzs7QUFHcEQsTUFBTUMsU0FBUyxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNVyxTQUFTLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxNQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkI7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDQyxZQUFGLENBQWVFLGFBQWYsR0FBK0IsTUFBL0I7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlAsSUFBQUEsU0FBUyxDQUFDUSxPQUFWLENBQWtCQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCWCxJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1jLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1IsQ0FBRCxFQUFPO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNTLGNBQUY7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDVSxlQUFGO0FBQ0FWLElBQUFBLENBQUMsQ0FBQ0MsWUFBRixDQUFlVSxVQUFmLEdBQTRCLE1BQTVCO0FBQ0FwQixJQUFBQSxRQUFRLENBQUM7QUFDUHFCLE1BQUFBLElBQUksRUFBRSxnQkFEQztBQUVQQyxNQUFBQSxTQUFTLEVBQUV2QixJQUFJLENBQUN1QixTQUFMLEdBQWlCO0FBRnJCLEtBQUQsQ0FBUjtBQUlELEdBUkQ7O0FBVUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDZCxDQUFELEVBQU87QUFDN0JBLElBQUFBLENBQUMsQ0FBQ1MsY0FBRjtBQUNBVCxJQUFBQSxDQUFDLENBQUNVLGVBQUY7QUFDQW5CLElBQUFBLFFBQVEsQ0FBQztBQUNQcUIsTUFBQUEsSUFBSSxFQUFFLGdCQURDO0FBRVBDLE1BQUFBLFNBQVMsRUFBRXZCLElBQUksQ0FBQ3VCLFNBQUwsR0FBaUI7QUFGckIsS0FBRCxDQUFSO0FBSUF2QixJQUFBQSxJQUFJLENBQUN1QixTQUFMLEdBQWlCLENBQWpCLElBQ0V0QixRQUFRLENBQUM7QUFBRXFCLE1BQUFBLElBQUksRUFBRSxrQkFBUjtBQUE0QkcsTUFBQUEsVUFBVSxFQUFFO0FBQXhDLEtBQUQsQ0FEVjtBQUVELEdBVEQ7O0FBV0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDaEIsQ0FBRCxFQUFPO0FBQzVCQSxJQUFBQSxDQUFDLENBQUNTLGNBQUY7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDVSxlQUFGO0FBQ0FWLElBQUFBLENBQUMsQ0FBQ0MsWUFBRixDQUFlVSxVQUFmLEdBQTRCLFVBQTVCO0FBQ0FwQixJQUFBQSxRQUFRLENBQUM7QUFDUHFCLE1BQUFBLElBQUksRUFBRSxrQkFEQztBQUVQRyxNQUFBQSxVQUFVLEVBQUU7QUFGTCxLQUFELENBQVI7QUFJRCxHQVJEOztBQVVBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNqQixDQUFELEVBQU87QUFDeEJBLElBQUFBLENBQUMsQ0FBQ1MsY0FBRjtBQUNBVCxJQUFBQSxDQUFDLENBQUNVLGVBQUY7QUFDQSxRQUFNUSxRQUFRLEdBQUdsQixDQUFDLENBQUNDLFlBQUYsQ0FBZWtCLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBakI7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosUUFBcEIsQ0FBaEI7QUFDQTNCLElBQUFBLFFBQVEsQ0FBQztBQUNQcUIsTUFBQUEsSUFBSSxFQUFFLGtCQURDO0FBRVBNLE1BQUFBLFFBQVEsRUFBUkE7QUFGTyxLQUFELENBQVI7QUFJQXRCLElBQUFBLE9BQU8sQ0FBQ3dCLE9BQUQsQ0FBUDtBQUNBMUIsSUFBQUEsUUFBUSxDQUFDd0IsUUFBRCxDQUFSO0FBQ0EzQixJQUFBQSxRQUFRLENBQUM7QUFBRXFCLE1BQUFBLElBQUksRUFBRSxnQkFBUjtBQUEwQkMsTUFBQUEsU0FBUyxFQUFFO0FBQXJDLEtBQUQsQ0FBUjtBQUNBdEIsSUFBQUEsUUFBUSxDQUFDO0FBQUVxQixNQUFBQSxJQUFJLEVBQUUsa0JBQVI7QUFBNEJHLE1BQUFBLFVBQVUsRUFBRTtBQUF4QyxLQUFELENBQVI7QUFDRCxHQWJEOztBQWVBLE1BQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN2QixDQUFELEVBQU87QUFDekJBLElBQUFBLENBQUMsQ0FBQ1MsY0FBRjtBQUNBLFFBQU1XLE9BQU8sR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CdEIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTTCxLQUFULENBQWUsQ0FBZixDQUFwQixDQUFoQjtBQUNBTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtBQUNBeEIsSUFBQUEsT0FBTyxDQUFDd0IsT0FBRCxDQUFQO0FBQ0EsUUFBTUYsUUFBUSxHQUFHbEIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTTCxLQUFULENBQWUsQ0FBZixDQUFqQjtBQUNBekIsSUFBQUEsUUFBUSxDQUFDd0IsUUFBRCxDQUFSO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaO0FBQ0EzQixJQUFBQSxRQUFRLENBQUM7QUFDUHFCLE1BQUFBLElBQUksRUFBRSxrQkFEQztBQUVQTSxNQUFBQSxRQUFRLEVBQVJBO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FaRDs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTlCLGlGQUFoQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQSxnRkFEYjtBQUVFLFNBQUcsRUFBRVUsU0FGUDtBQUdFLGlCQUFXLEVBQUVDLGVBSGY7QUFJRSxpQkFBVyxFQUFFUyxlQUpmO0FBS0UsaUJBQVcsRUFBRU0sZUFMZjtBQU1FLGdCQUFVLEVBQUVFLGNBTmQ7QUFPRSxZQUFNLEVBQUVDLFVBUFY7QUFRRSxhQUFPLEVBQUViLGFBUlg7QUFBQSw4QkFVRTtBQUNFLGFBQUssRUFBRTtBQUFFeUIsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FEVDtBQUVFLFdBQUcsRUFBRWhDLFNBRlA7QUFHRSxnQkFBUSxFQUFFMEIsV0FIWjtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsVUFBRSxFQUFDLE1BTEw7QUFNRSxjQUFNLEVBQUMsa0NBTlQ7QUFPRSxZQUFJLEVBQUMsTUFQUDtBQVFFLG9CQUFZLEVBQUMsS0FSZjtBQVNFLGdCQUFRLEVBQUM7QUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsRUFxQkcvQixRQXJCSCxlQXNCRTtBQUFLLGFBQUssRUFBRSxDQUFDRyxJQUFELEdBQVE7QUFBRWtDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQVIsR0FBOEI7QUFBRUEsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBMUM7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUV6QyxvRkFBaEI7QUFBa0MsYUFBRyxFQUFDLFNBQXRDO0FBQWdELGFBQUcsRUFBRU87QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUEyQkdGLEtBQUssaUJBQ0o7QUFBUSxlQUFTLGdCQUFTTCxrRkFBVCxDQUFqQjtBQUE0QyxhQUFPLEVBQUVtQixlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQW5IRDs7R0FBTWxCOztLQUFBQTtBQXFITiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwbG9hZEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEltYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZGF0YSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtibG9iLCBzZXRCbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkcm9wSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiKVxyXG4gICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25CdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJGaWxlID0gKCkgPT4ge1xyXG4gICAgc2V0QmxvYihudWxsKTtcclxuICAgIHNldEltYWdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsXHJcbiAgICAgIGRyb3BEZXB0aDogZGF0YS5kcm9wRGVwdGggKyAxXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfRFJPUF9ERVBUSFwiLFxyXG4gICAgICBkcm9wRGVwdGg6IGRhdGEuZHJvcERlcHRoIC0gMVxyXG4gICAgfSk7XHJcbiAgICBkYXRhLmRyb3BEZXB0aCA+IDAgJiZcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JTl9EUk9QX1pPTkVcIiwgaW5Ecm9wWm9uZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcImNvcHlNb3ZlXCJcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsXHJcbiAgICAgIGluRHJvcFpvbmU6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICBjb25zdCBuZXdCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgICBzZXRCbG9iKG5ld0Jsb2IpO1xyXG4gICAgc2V0SW1hZ2UobmV3SW1hZ2UpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9EUk9QX0RFUFRIXCIsIGRyb3BEZXB0aDogMCB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSU5fRFJPUF9aT05FXCIsIGluRHJvcFpvbmU6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0Jsb2IpO1xyXG4gICAgc2V0QmxvYihuZXdCbG9iKTtcclxuICAgIGNvbnN0IG5ld0ltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShuZXdJbWFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0ZJTEVfVE9fTElTVFwiLFxyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmRyb3BhcmVhfVxyXG4gICAgICAgIHJlZj17ZHJvcElucHV0fVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XHJcbiAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxyXG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cclxuICAgICAgICBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnLCBpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxkaXYgc3R5bGU9eyFibG9iID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDogeyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y3NzLmltZ19fcHJldmlld30gYWx0PVwicHJldmlld1wiIHNyYz17YmxvYn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRuX19jbGVhcn1gfSBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9PlxyXG4gICAgICAgICAgQ2xlYXIgZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjc3MiLCJVcGxvYWRJbWFnZSIsImRhdGEiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImJsb2IiLCJzZXRCbG9iIiwiZmlsZUlucHV0IiwiZHJvcElucHV0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwib25CdXR0b25DbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUNsZWFyRmlsZSIsImhhbmRsZURyYWdFbnRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcEVmZmVjdCIsInR5cGUiLCJkcm9wRGVwdGgiLCJoYW5kbGVEcmFnTGVhdmUiLCJpbkRyb3Bab25lIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcm9wIiwibmV3SW1hZ2UiLCJmaWxlcyIsIm5ld0Jsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVDbGljayIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJkcm9wYXJlYSIsImRpc3BsYXkiLCJpbWdfX3ByZXZpZXciLCJidG5fX2NsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==