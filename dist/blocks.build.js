/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploader_block_js__ = __webpack_require__(/*! ./uploader/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi91cGxvYWRlci9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/uploader/block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__(/*! ./edit */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * WP Frontend Uploader\n *\n * This block allows a customizable uploader to be added via\n * the WordPress Gutenberg Editor.\n */\n\n// Import Components\n\n\n// Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('kh/wp-frontend-uploader', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Frontend Uploader'), // Block title.\n\ticon: 'upload', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Frontend Uploader'), __('Media'), __('Files')],\n\n\t/**\n  * Attributes\n  */\n\tattributes: {\n\n\t\tupload_instructions: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'Drop files here or click to upload.'\n\t\t},\n\n\t\tsaved_instructions: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'Your media has been uploaded and is awaiting moderator approval.'\n\t\t},\n\n\t\tclassName: null\n\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: __WEBPACK_IMPORTED_MODULE_0__edit__[\"a\" /* default */],\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function. This plugin uses a\n  * dynamic php rendered upload form so we return null.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91cGxvYWRlci9ibG9jay5qcz8xNDhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV1AgRnJvbnRlbmQgVXBsb2FkZXJcbiAqXG4gKiBUaGlzIGJsb2NrIGFsbG93cyBhIGN1c3RvbWl6YWJsZSB1cGxvYWRlciB0byBiZSBhZGRlZCB2aWFcbiAqIHRoZSBXb3JkUHJlc3MgR3V0ZW5iZXJnIEVkaXRvci5cbiAqL1xuXG4vLyBJbXBvcnQgQ29tcG9uZW50c1xuaW1wb3J0IFVwbG9hZGVyRWRpdCBmcm9tICcuL2VkaXQnO1xuXG4vLyBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2toL3dwLWZyb250ZW5kLXVwbG9hZGVyJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdGcm9udGVuZCBVcGxvYWRlcicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3VwbG9hZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdlbWJlZCcsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdGcm9udGVuZCBVcGxvYWRlcicpLCBfXygnTWVkaWEnKSwgX18oJ0ZpbGVzJyldLFxuXG5cdC8qKlxuICAqIEF0dHJpYnV0ZXNcbiAgKi9cblx0YXR0cmlidXRlczoge1xuXG5cdFx0dXBsb2FkX2luc3RydWN0aW9uczoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnRHJvcCBmaWxlcyBoZXJlIG9yIGNsaWNrIHRvIHVwbG9hZC4nXG5cdFx0fSxcblxuXHRcdHNhdmVkX2luc3RydWN0aW9uczoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnWW91ciBtZWRpYSBoYXMgYmVlbiB1cGxvYWRlZCBhbmQgaXMgYXdhaXRpbmcgbW9kZXJhdG9yIGFwcHJvdmFsLidcblx0XHR9LFxuXG5cdFx0Y2xhc3NOYW1lOiBudWxsXG5cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IFVwbG9hZGVyRWRpdCxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLiBUaGlzIHBsdWdpbiB1c2VzIGFcbiAgKiBkeW5hbWljIHBocCByZW5kZXJlZCB1cGxvYWQgZm9ybSBzbyB3ZSByZXR1cm4gbnVsbC5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VwbG9hZGVyL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/uploader/edit.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$components = wp.components,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextareaControl = _wp$components.TextareaControl;\nvar Fragment = wp.element.Fragment;\nvar withSelect = wp.data.withSelect;\n\n\nvar UploaderEdit = withSelect(function (select, _ref) {\n\tvar attributes = _ref.attributes;\n\n\t// return\n\treturn {};\n})(function (_ref2) {\n\tvar attributes = _ref2.attributes,\n\t    className = _ref2.className,\n\t    isSelected = _ref2.isSelected,\n\t    setAttributes = _ref2.setAttributes;\n\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t\"h2\",\n\t\t\t\tnull,\n\t\t\t\t\"Frontend Uploader\"\n\t\t\t)\n\t\t),\n\t\tisSelected && wp.element.createElement(\n\t\t\tPanel,\n\t\t\t{\n\t\t\t\theader: \"WP Frontend Uploader\",\n\t\t\t\tclassName: \"wp-frontend-uploader-settings\"\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: \"Text Displays\",\n\t\t\t\t\ticon: \"admin-settings\",\n\t\t\t\t\tinitialOpen: true\n\t\t\t\t},\n\t\t\t\twp.element.createElement(TextareaControl, {\n\t\t\t\t\tlabel: __('Upload Instructions'),\n\t\t\t\t\tclassName: \"textarea\",\n\t\t\t\t\tvalue: attributes.upload_instructions,\n\t\t\t\t\thelp: __('Enter upload instructions for the user here. These instructions will be placed on the initial uploader.'),\n\t\t\t\t\tonChange: function onChange(upload_instructions) {\n\t\t\t\t\t\treturn setAttributes({ upload_instructions: upload_instructions });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(TextareaControl, {\n\t\t\t\t\tlabel: __('Saved Media Instructions'),\n\t\t\t\t\tclassName: \"textarea\",\n\t\t\t\t\tvalue: attributes.saved_instructions,\n\t\t\t\t\thelp: __('Enter a message to display to users after they save media title, caption, and meta. These instructions will be displayed to the user once they click on the submit button.'),\n\t\t\t\t\tonChange: function onChange(saved_instructions) {\n\t\t\t\t\t\treturn setAttributes({ saved_instructions: saved_instructions });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (UploaderEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91cGxvYWRlci9lZGl0LmpzP2M2ZGMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWwgPSBfd3AkY29tcG9uZW50cy5QYW5lbCxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBUZXh0YXJlYUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0YXJlYUNvbnRyb2w7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cblxudmFyIFVwbG9hZGVyRWRpdCA9IHdpdGhTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCwgX3JlZikge1xuXHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcblxuXHQvLyByZXR1cm5cblx0cmV0dXJuIHt9O1xufSkoZnVuY3Rpb24gKF9yZWYyKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcyxcblx0ICAgIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcblx0ICAgIGlzU2VsZWN0ZWQgPSBfcmVmMi5pc1NlbGVjdGVkLFxuXHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYyLnNldEF0dHJpYnV0ZXM7XG5cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdEZyYWdtZW50LFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJoMlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIkZyb250ZW5kIFVwbG9hZGVyXCJcblx0XHRcdClcblx0XHQpLFxuXHRcdGlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0UGFuZWwsXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogXCJXUCBGcm9udGVuZCBVcGxvYWRlclwiLFxuXHRcdFx0XHRjbGFzc05hbWU6IFwid3AtZnJvbnRlbmQtdXBsb2FkZXItc2V0dGluZ3NcIlxuXHRcdFx0fSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6IFwiVGV4dCBEaXNwbGF5c1wiLFxuXHRcdFx0XHRcdGljb246IFwiYWRtaW4tc2V0dGluZ3NcIixcblx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWFDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdVcGxvYWQgSW5zdHJ1Y3Rpb25zJyksXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBcInRleHRhcmVhXCIsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudXBsb2FkX2luc3RydWN0aW9ucyxcblx0XHRcdFx0XHRoZWxwOiBfXygnRW50ZXIgdXBsb2FkIGluc3RydWN0aW9ucyBmb3IgdGhlIHVzZXIgaGVyZS4gVGhlc2UgaW5zdHJ1Y3Rpb25zIHdpbGwgYmUgcGxhY2VkIG9uIHRoZSBpbml0aWFsIHVwbG9hZGVyLicpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh1cGxvYWRfaW5zdHJ1Y3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHVwbG9hZF9pbnN0cnVjdGlvbnM6IHVwbG9hZF9pbnN0cnVjdGlvbnMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRhcmVhQ29udHJvbCwge1xuXHRcdFx0XHRcdGxhYmVsOiBfXygnU2F2ZWQgTWVkaWEgSW5zdHJ1Y3Rpb25zJyksXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBcInRleHRhcmVhXCIsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuc2F2ZWRfaW5zdHJ1Y3Rpb25zLFxuXHRcdFx0XHRcdGhlbHA6IF9fKCdFbnRlciBhIG1lc3NhZ2UgdG8gZGlzcGxheSB0byB1c2VycyBhZnRlciB0aGV5IHNhdmUgbWVkaWEgdGl0bGUsIGNhcHRpb24sIGFuZCBtZXRhLiBUaGVzZSBpbnN0cnVjdGlvbnMgd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgb25jZSB0aGV5IGNsaWNrIG9uIHRoZSBzdWJtaXQgYnV0dG9uLicpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShzYXZlZF9pbnN0cnVjdGlvbnMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgc2F2ZWRfaW5zdHJ1Y3Rpb25zOiBzYXZlZF9pbnN0cnVjdGlvbnMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdClcblx0KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRlckVkaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXBsb2FkZXIvZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/uploader/editor.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91cGxvYWRlci9lZGl0b3Iuc2Nzcz81NzY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXBsb2FkZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./src/uploader/style.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91cGxvYWRlci9zdHlsZS5zY3NzP2UzMGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91cGxvYWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);