(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\Kiking\workspace\carousel-exercise\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel-tiny-slider/carousel-tiny-slider.component */ "c7hU");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "container"], [1, "content"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel-tiny-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_1__["CarouselTinySliderComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 1000px;\n  width: 1416px;\n  background: rgba(35, 245, 255, 0.8);\n  margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  --column-width1: 0 96px;\n  --column-width2: 96px 120px;\n  width: 100%;\n  height: 100%;\n  background: repeating-linear-gradient(90deg, rgba(245, 245, 245, 0.48) var(--column-width1), rgba(5, 50, 65, 0.32) var(--column-width2));\n}\n\n@media screen and (max-width: 1919px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1320px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    --column-width1: 0 88px;\n    --column-width2: 88px 112px;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    width: 752px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    --column-width1: 0 88px;\n    --column-width2: 88px 112px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0lBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtFQUVGOztFQUFBO0lBQ0UsdUJBQUE7SUFDQSwyQkFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLFlBQUE7RUFHRjs7RUFEQTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7RUFJRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICB3aWR0aDogMTQxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzUsIDI0NSwgMjU1LCAwLjgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgLS1jb2x1bW4td2lkdGgxOiAwIDk2cHg7XHJcbiAgLS1jb2x1bW4td2lkdGgyOiA5NnB4IDEyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNDgpIHZhcigtLWNvbHVtbi13aWR0aDEpLCByZ2JhKDUsIDUwLCA2NSwgMC4zMikgdmFyKC0tY29sdW1uLXdpZHRoMikpO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEzMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLS1jb2x1bW4td2lkdGgxOiAwIDg4cHg7XHJcbiAgICAtLWNvbHVtbi13aWR0aDI6IDg4cHggMTEycHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1MnB4O1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICAtLWNvbHVtbi13aWR0aDE6IDAgODhweDtcclxuICAgIC0tY29sdW1uLXdpZHRoMjogODhweCAxMTJweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var ngx_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-glide */ "nZCN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
    play() {
        this.ngxGlide.play();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_glide__WEBPACK_IMPORTED_MODULE_0__["NgxGlideComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngxGlide = _t.first);
    } }, decls: 36, vars: 0, consts: [[1, "container"], [1, "question"], ["type", "carousel", "perView", "5", "focusAt", "center", "startAt", "2", "gap", "24", "showBullets", "false"], [1, "glide__slide"], [1, "image"], [1, "label"], [1, "start-here"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " What are you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "here to do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-glide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mobile internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "START HERE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "START HERE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Get a device");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "START HERE\u00A0\u00A0\u00A0>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Add a phone-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "START HERE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "START HERE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [ngx_glide__WEBPACK_IMPORTED_MODULE_0__["NgxGlideComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 264px;\n  min-width: 1232px;\n  margin-left: 0;\n  position: relative;\n}\n\n@media screen and (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: -240px;\n  }\n}\n\n.question[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 240px;\n  top: 288px;\n  width: 216px;\n  height: 80px;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  letter-spacing: -0.2px;\n  color: #223322;\n}\n\n.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media screen and (max-width: 1919px) {\n  .question[_ngcontent-%COMP%] {\n    left: 230px;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .question[_ngcontent-%COMP%] {\n    left: 265px;\n    width: 752px;\n    font-size: 24px;\n    line-height: 28px;\n    width: 152px;\n  }\n}\n\n.glide__slide[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  background: #ebebeb;\n  border-radius: 8px;\n  border: 2px solid rgba(150, 150, 150, 0.08);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);\n  height: 284px;\n  font-family: \"Work Sans\", sans-serif;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  color: #232323;\n}\n\n.glide__slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border: 1px solid #979797;\n  margin: 56px auto;\n}\n\n.glide__slide[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  height: 72px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 20px;\n  width: 120px;\n}\n\n.glide__slide[_ngcontent-%COMP%]   .start-here[_ngcontent-%COMP%] {\n  visibility: hidden;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 32px;\n  margin: 0 auto;\n  width: 120px;\n  margin-top: 40px;\n}\n\n.glide__slide--active[_ngcontent-%COMP%] {\n  margin-top: 0;\n  width: 456px !important;\n  height: 556px;\n  box-shadow: inset 0 -8px #FFC000, 0 4px 8px rgba(0, 0, 0, 0.12);\n}\n\n.glide__slide--active[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  margin: 96px auto;\n}\n\n.glide__slide--active[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 58px;\n  width: 320px;\n  font-weight: 600;\n}\n\n.glide__slide--active[_ngcontent-%COMP%]   .start-here[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n@media screen and (max-width: 1919px) {\n  .glide__slide--active[_ngcontent-%COMP%] {\n    width: 424px !important;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .glide__slide--active[_ngcontent-%COMP%] {\n    width: 368px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxtQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQUU7RUFDRSxnQkFBQTtBQUVKOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUNBQUE7RUFFQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0RBQUE7QUFGRjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0UsbUJBQUE7QUFESjs7QUFLQTtFQUlFO0lBQ0UsdUJBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSx1QkFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjY0cHg7XHJcbiAgbWluLXdpZHRoOiAxMjMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI0MHB4O1xyXG4gIHRvcDogMjg4cHg7XHJcbiAgd2lkdGg6IDIxNnB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBjb2xvcjogIzIyMzMyMjtcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgLnF1ZXN0aW9uIHtcclxuICAgIGxlZnQ6IDIzMHB4XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuICAucXVlc3Rpb24ge1xyXG4gICAgbGVmdDogMjY1cHg7XHJcbiAgICB3aWR0aDogNzUycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5nbGlkZV9fc2xpZGUge1xyXG4gIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTUwLDE1MCwxNTAsMC4wOCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgLy8gd2lkdGg6IDIxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyODRweDtcclxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBjb2xvcjogIzIzMjMyMztcclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gICAgbWFyZ2luOiA1NnB4IGF1dG87XHJcbiAgfVxyXG4gIC5sYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9O1xyXG4gIC5zdGFydC1oZXJlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nbGlkZV9fc2xpZGUtLWFjdGl2ZSB7XHJcbiAgbWFyZ2luLXRvcDowO1xyXG4gIHdpZHRoOiA0NTZweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTU2cHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtOHB4ICNGRkMwMDAsMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW46IDk2cHggYXV0bztcclxuICB9XHJcbiAgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLnN0YXJ0LWhlcmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gIC8vIC5nbGlkZV9fc2xpZGUge1xyXG4gIC8vICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSB7XHJcbiAgICB3aWR0aDogNDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG4gIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMzY4cHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'carousel-exercise';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 1000px;\n  width: 1416px;\n  background: rgba(35, 245, 255, 0.8);\n  margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  --column-width1: 0 96px;\n  --column-width2: 96px 120px;\n  width: 100%;\n  height: 100%;\n  background: repeating-linear-gradient(90deg, rgba(245, 245, 245, 0.48) var(--column-width1), rgba(5, 50, 65, 0.32) var(--column-width2));\n}\n\n@media screen and (max-width: 1919px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1320px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    --column-width1: 0 88px;\n    --column-width2: 88px 112px;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    width: 752px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    --column-width1: 0 88px;\n    --column-width2: 88px 112px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdJQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7RUFFRjs7RUFBQTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxZQUFBO0VBR0Y7O0VBREE7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICB3aWR0aDogMTQxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzUsIDI0NSwgMjU1LCAwLjgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgLS1jb2x1bW4td2lkdGgxOiAwIDk2cHg7XHJcbiAgLS1jb2x1bW4td2lkdGgyOiA5NnB4IDEyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNDgpIHZhcigtLWNvbHVtbi13aWR0aDEpLCByZ2JhKDUsIDUwLCA2NSwgMC4zMikgdmFyKC0tY29sdW1uLXdpZHRoMikpO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEzMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLS1jb2x1bW4td2lkdGgxOiAwIDg4cHg7XHJcbiAgICAtLWNvbHVtbi13aWR0aDI6IDg4cHggMTEycHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1MnB4O1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICAtLWNvbHVtbi13aWR0aDE6IDAgODhweDtcclxuICAgIC0tY29sdW1uLXdpZHRoMjogODhweCAxMTJweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var ngx_glide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-glide */ "nZCN");
/* harmony import */ var _carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel-tiny-slider/carousel-tiny-slider.component */ "c7hU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_glide__WEBPACK_IMPORTED_MODULE_7__["NgxGlideModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_8__["CarouselTinySliderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        ngx_glide__WEBPACK_IMPORTED_MODULE_7__["NgxGlideModule"]] }); })();


/***/ }),

/***/ "c7hU":
/*!************************************************************************!*\
  !*** ./src/app/carousel-tiny-slider/carousel-tiny-slider.component.ts ***!
  \************************************************************************/
/*! exports provided: CarouselTinySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTinySliderComponent", function() { return CarouselTinySliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CarouselTinySliderComponent {
    constructor() { }
    ngOnInit() {
        this.slider = tns({
            container: '.my-slider',
            items: 5,
            slideBy: 1,
            startIndex: 2,
            mode: 'carousel',
            gutter: 24,
            center: true,
            centerSlideCount: 1,
            mouseDrag: true,
            autoWidth: true,
        });
        this.slider.events.on("transitionEnd", (info) => {
            info.slideItems[info.indexCached].classList.remove("center-item");
            info.slideItems[info.index].classList.add("center-item");
        });
    }
}
CarouselTinySliderComponent.ɵfac = function CarouselTinySliderComponent_Factory(t) { return new (t || CarouselTinySliderComponent)(); };
CarouselTinySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselTinySliderComponent, selectors: [["app-carousel-tiny-slider"]], decls: 56, vars: 0, consts: [[1, "container"], [1, "question"], [1, "my-slider"], [1, "carousel-item"], [1, "image"], [1, "label"]], template: function CarouselTinySliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " What are you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "here to do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Get a device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add a phone-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mobile internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Home internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Get a device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add a phone-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 264px;\n  margin-left: 0;\n  position: relative;\n}\n\n.question[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 240px;\n  top: 288px;\n  width: 216px;\n  height: 80px;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 32px;\n  line-height: 40px;\n  letter-spacing: -0.2px;\n  color: #223322;\n}\n\n.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media screen and (max-width: 1919px) {\n  .question[_ngcontent-%COMP%] {\n    left: 230px;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .question[_ngcontent-%COMP%] {\n    left: 265px;\n    width: 752px;\n    font-size: 24px;\n    line-height: 28px;\n    width: 152px;\n  }\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  background: #ebebeb;\n  border-radius: 8px;\n  border: 2px solid rgba(150, 150, 150, 0.08);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);\n  width: 200px;\n  height: 284px;\n  font-family: \"Work Sans\", sans-serif;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  color: #232323;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 86px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  height: 72px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 20px;\n}\n\ndiv.tns-slide-active.center-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  margin-top: 0;\n  width: 424px;\n  height: 556px;\n  box-shadow: 0 8px #FFC000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcm91c2VsLXRpbnktc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFNRTtFQUNFLGdCQUFBO0FBSko7O0FBT0E7RUFDRTtJQUNFLFdBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVFFO0VBQ0UsWUFBQTtBQU5KOztBQVFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFZRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBVEoiLCJmaWxlIjoiY2Fyb3VzZWwtdGlueS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjY0cHg7XHJcbiAgLy8gbWluLXdpZHRoOiAxMjMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG4vLyAgIC5jb250YWluZXIge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC0yNDBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI0MHB4O1xyXG4gIHRvcDogMjg4cHg7XHJcbiAgd2lkdGg6IDIxNnB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBjb2xvcjogIzIyMzMyMjtcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgLnF1ZXN0aW9uIHtcclxuICAgIGxlZnQ6IDIzMHB4XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuICAucXVlc3Rpb24ge1xyXG4gICAgbGVmdDogMjY1cHg7XHJcbiAgICB3aWR0aDogNzUycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE1MCwxNTAsMTUwLDAuMDgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDI4NHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGNvbG9yOiAjMjMyMzIzO1xyXG4gIC8vcGFkZGluZzogNDBweDtcclxuICAuaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gIH1cclxuICAubGFiZWwge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIH07XHJcbn1cclxuXHJcbmRpdi50bnMtc2xpZGUtYWN0aXZlLmNlbnRlci1pdGVtIHtcclxuICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgd2lkdGg6IDQyNHB4O1xyXG4gICAgaGVpZ2h0OiA1NTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4ICNGRkMwMDA7XHJcbiAgfSAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "container"], ["routerLink", "/glidejs"], ["routerLink", "/tinyslider"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Glide Js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tiny Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  height: 80px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1416px;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  padding: 20px;\n}\n\n@media screen and (max-width: 1919px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1320px;\n  }\n}\n\n@media screen and (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    width: 752px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0E7RUFDRTtJQUNFLGFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxZQUFBO0VBREY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuOTYpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDE0MTZweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTMyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NXB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzUycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-tiny-slider/carousel-tiny-slider.component */ "c7hU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'glidejs', component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"] },
    { path: 'tinyslider', component: _carousel_tiny_slider_carousel_tiny_slider_component__WEBPACK_IMPORTED_MODULE_2__["CarouselTinySliderComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map