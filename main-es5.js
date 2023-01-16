(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunklead_ahead"] = self["webpackChunklead_ahead"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    71555:
    /*!**********************************************!*\
      !*** ./src/app/aboutus/aboutus.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutusComponent": function AboutusComponent() {
          return (
            /* binding */
            _AboutusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-useful-swiper */
      49789);

      var _AboutusComponent = /*#__PURE__*/function () {
        function _AboutusComponent() {
          _classCallCheck(this, _AboutusComponent);

          this.config = {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            slidesPerView: 3,
            breakpoints: {
              1000: {
                slidesPerView: 4
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              900: {
                slidesPerView: 3
              }
            },
            spaceBetween: 30
          };
        }

        _createClass(_AboutusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("About Us");
          }
        }]);

        return _AboutusComponent;
      }();

      _AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
        return new (t || _AboutusComponent)();
      };

      _AboutusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AboutusComponent,
        selectors: [["app-aboutus"]],
        decls: 79,
        vars: 2,
        consts: [[1, "container"], [1, "about-content"], [1, "centered-content"], [1, "specialisation"], [1, "leadership-skill"], [1, "icon-div"], ["id", "icon-img", "src", "assets/images/leadership-icon.png"], [1, "specialisation-heading"], [1, "specialisation-description"], [1, "communication-skill"], ["id", "icon-img", "src", "assets/images/communication-icon.png"], [1, "behavioral-skill"], ["id", "icon-img", "src", "assets/images/behaviour-icon.png"], [1, "student-skill"], ["id", "icon-img", "src", "assets/images/students-icon.jpg"], [1, "left-side", "testClass"], ["id", "team-img", "src", "assets/images/meet-the-team.jpg"], [1, "right-side", "testClass"], [1, "meet-team-text"], ["id", "team-more"], ["id", "know-more", 3, "routerLink"], [1, "client-carousel"], ["id", "client-heading"], [1, "mySwiper", 3, "config"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/EssarLogo.svg.png"], ["src", "assets/images/indusind.png"], ["src", "assets/images/modi-prop.jpeg"], ["src", "assets/images/Oracle-logo.jpeg"], ["src", "assets/images/Osmania-Univeristy.jpeg"], ["src", "assets/images/piramal-vector-logo.png"], ["src", "assets/images/suzuki-logo.png"], ["src", "assets/images/Gati-logo.png"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"]],
        template: function AboutusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WE BUILD LEADERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "At LeadAhead, we believe that every person has the ability to Lead. Through our programmes we show that even small changes in yourself can create outstanding outcome. Future Problems need future proof Leadership.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Leadership Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Effective leaders have the ability to communicate well, motivate their team, handle and delegate responsibilities, listen to feedback, and have the flexibility to solve problems in an ever-changing workplace. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Communication Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Effective leaders have the ability to communicate well, motivate their team, handle and delegate responsibilities, listen to feedback, and have the flexibility to solve problems in an ever-changing workplace. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Behavioral Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Effective leaders have the ability to communicate well, motivate their team, handle and delegate responsibilities, listen to feedback, and have the flexibility to solve problems in an ever-changing workplace. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Students Section ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Effective leaders have the ability to communicate well, motivate their team, handle and delegate responsibilities, listen to feedback, and have the flexibility to solve problems in an ever-changing workplace. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "MEET OUR AWESOME TEAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Get to Know More About our Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Know More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "OUR CLIENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "We have served clients across various Industrial Domains. We have strong credentials of Serving over 40000 Professional and Students. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "swiper", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent],
        styles: [".heading[_ngcontent-%COMP%]\n{\n    width: 100%;    \n}\nh2[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 2em;\n}\n.container[_ngcontent-%COMP%]\n{\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n}\n.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]\n{\n    flex: 1;\n    \n    width: 50%;\n    height: auto;\n    background-color: black;\n    color: white;\n}\n.about-content[_ngcontent-%COMP%]\n{\n    background-image: url('AboutUs-2.jpg');\n    background-size: cover;\n    background-position: center;\n    color: white;\n    height: 90vh;\n}\n.centered-content[_ngcontent-%COMP%]\n{\n  width: 50%;\n  margin: 10% auto;\n  \n  font-family: 'NevisBold';\n  min-width: 400px;\n}\n.right-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: auto;\n    max-width: 100%;\n    min-height: 600px;\n}\n.specialisation[_ngcontent-%COMP%]\n{\n    display: flex;\n    width: 100%;\n    margin-left: 10px;\n    margin-right: 5px;\n    margin-top: 10px;\n    flex-wrap: wrap;\n}\n.specialisation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    flex: 25%;\n    width: 80%;\n    \n}\n#icon-img[_ngcontent-%COMP%]\n{\n    height: 75px;\n    width: 75px;\n}\n.specialisation-heading[_ngcontent-%COMP%]\n{\n    font-family: sans-serif;\n    font-weight: 600;\n    text-align: center;\n}\n.specialisation-description[_ngcontent-%COMP%]\n{\n    font-family: sans-serif;\n    width: 80%;\n    margin-top: 5px;\n    text-align: center;\n    margin-left: 20px;\n}\n.icon-div[_ngcontent-%COMP%]\n{\n    text-align: center;\n}\n.testClass[_ngcontent-%COMP%]\n{\n    border: 1px solid white;\n    background-color: whitesmoke;\n    color: black;\n}\nh1[_ngcontent-%COMP%]{\n    font-family: 'NevisBold';\n    font-size: 2em;\n}\n#team-img[_ngcontent-%COMP%]\n{\n    width: 100%;\n}\n.meet-team-text[_ngcontent-%COMP%]\n{\n    margin-top: 20%;\n    text-align: center;\n    height: 100%;\n}\n#team-more[_ngcontent-%COMP%]\n{\n    font-family: 'NevisBold';\n    font-size: 1.5rem;\n}\n#know-more[_ngcontent-%COMP%]\n{\n    font-family: 'NevisBold';\n    font-weight: bold;\n    border: 1px solid #ea2030;\n    border-radius: 30px;\n    padding: 10px;\n    color: white;\n    background-color: #ea2030;\n    margin: 20px;\n}\nswiper[_ngcontent-%COMP%]\n{\n    width: 100%;\n}\n.client-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    height: 40%;\n    width: 40%;\n}\n#client-heading[_ngcontent-%COMP%]\n{\n    text-align: center;\n    color: #ea2030;\n    font-family: 'NevisBold';\n    background-color: black;\n}\n#client-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n}\n.centered-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n\n@media screen and (max-width: 992px) {\n    .specialisation[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n      flex: 50%;\n    }\n  }\n\n@media screen and (max-width: 600px) {\n    .specialisation[_ngcontent-%COMP%] {\n      flex-direction: column;\n    }\n    #team-img[_ngcontent-%COMP%]\n    {\n        height: 100%;\n    }\n    .client-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n    {\n        height: 100%;\n        width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxzQ0FBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBOztFQUVFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEI7K0JBQzZCO0VBQzdCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBR0EsZ0ZBQWdGO0FBQ2hGO0lBQ0k7TUFDRSxTQUFTO0lBQ1g7RUFDRjtBQUVBLHNIQUFzSDtBQUN0SDtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7O1FBRUksWUFBWTtJQUNoQjtJQUNBOztRQUVJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7RUFDRiIsImZpbGUiOiJhYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ1xue1xuICAgIHdpZHRoOiAxMDAlOyAgICBcbn1cbmgye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuLmNvbnRhaW5lclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sZWZ0LXNpZGUsLnJpZ2h0LXNpZGVcbntcbiAgICBmbGV4OiAxO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hYm91dC1jb250ZW50XG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9BYm91dFVzLTIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDkwdmg7XG59XG5cbi5jZW50ZXJlZC1jb250ZW50XG57XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIC8qIG1hcmdpbjogMjAlIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAgICAqL1xuICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG4ucmlnaHQtc2lkZSBpbWd7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbi5zcGVjaWFsaXNhdGlvblxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc3BlY2lhbGlzYXRpb24gPiBkaXZ7XG4gICAgZmxleDogMjUlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLyogbWFyZ2luOiAzcHg7ICovXG59XG4jaWNvbi1pbWdcbntcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4uc3BlY2lhbGlzYXRpb24taGVhZGluZ1xue1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwZWNpYWxpc2F0aW9uLWRlc2NyaXB0aW9uXG57XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmljb24tZGl2XG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlc3RDbGFzc1xue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaDF7XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuI3RlYW0taW1nXG57XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWVldC10ZWFtLXRleHRcbntcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiN0ZWFtLW1vcmVcbntcbiAgICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ja25vdy1tb3JlXG57XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYTIwMzA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWEyMDMwO1xuICAgIG1hcmdpbjogMjBweDtcbn1cbnN3aXBlclxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNsaWVudC1jYXJvdXNlbCBpbWdcbntcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNDAlO1xufVxuI2NsaWVudC1oZWFkaW5nXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZWEyMDMwO1xuICAgIGZvbnQtZmFtaWx5OiAnTmV2aXNCb2xkJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiNjbGllbnQtaGVhZGluZyBwe1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5jZW50ZXJlZC1jb250ZW50IHB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgOTkycHggd2lkZSBvciBsZXNzLCBnbyBmcm9tIGZvdXIgY29sdW1ucyB0byB0d28gY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc3BlY2lhbGlzYXRpb24+ZGl2IHtcbiAgICAgIGZsZXg6IDUwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggd2lkZSBvciBsZXNzLCBtYWtlIHRoZSBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnNwZWNpYWxpc2F0aW9uIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgICN0ZWFtLWltZ1xuICAgIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuY2xpZW50LWNhcm91c2VsIGltZ1xuICAgIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aboutus/aboutus.component */
      71555);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact/contact.component */
      11563);
      /* harmony import */


      var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homecomponent/homecomponent.component */
      83672);
      /* harmony import */


      var _programme_programme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./programme/programme.component */
      67419);
      /* harmony import */


      var _team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./team/team.component */
      53975);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_2__.HomecomponentComponent
      }, {
        path: 'home',
        component: _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_2__.HomecomponentComponent
      }, {
        path: 'about',
        component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_0__.AboutusComponent
      }, {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_4__.TeamComponent
      }, {
        path: 'programme',
        component: _programme_programme_component__WEBPACK_IMPORTED_MODULE_3__.ProgrammeComponent
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent
      }, {
        path: '**',
        redirectTo: 'home'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      54696);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      10970);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'leadAhead';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout */
      77114);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homecomponent/homecomponent.component */
      83672);
      /* harmony import */


      var _programme_programme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./programme/programme.component */
      67419);
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      54696);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aboutus/aboutus.component */
      71555);
      /* harmony import */


      var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./team/team.component */
      53975);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-useful-swiper */
      49789);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact/contact.component */
      11563);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./footer/footer.component */
      10970);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__.NgxUsefulSwiperModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_2__.HomecomponentComponent, _programme_programme_component__WEBPACK_IMPORTED_MODULE_3__.ProgrammeComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__.AboutusComponent, _team_team_component__WEBPACK_IMPORTED_MODULE_6__.TeamComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__.NgxUsefulSwiperModule]
        });
      })();
      /***/

    },

    /***/
    11563:
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ContactComponent = /*#__PURE__*/function () {
        function _ContactComponent() {
          _classCallCheck(this, _ContactComponent);
        }

        _createClass(_ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactComponent;
      }();

      _ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || _ContactComponent)();
      };

      _ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactComponent,
        selectors: [["app-contact"]],
        decls: 28,
        vars: 0,
        consts: [[1, "banner", "banner-bg"], [1, "container"], [1, "banner-heading"], [1, "contact-div"], [1, "phone-info"], ["src", "assets/images/contact-icon.png", 1, "img-icon"], [1, "contact-heading"], [1, "training-para"], [1, "email-info"], ["src", "assets/images/mail-icon.png", 1, "img-icon"], [1, "email-heading"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in touch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We would love to hear from you.Feel free to reach out to us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Interested in Our Product. Talk to us directly at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+91 9952704490");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+91 8921171726");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "For Detailed Enquiry, Our Offerings or to reach out to ous, please write out to");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "customer-service@leadhead.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".main-contact[_ngcontent-%COMP%]\n{\n    background-image: url('Contactus.jpg');\n    width: 100%;\n    height: 90vh;\n    background-size: cover;\n    background-position: center;\n    display: grid;\n}\nh1[_ngcontent-%COMP%]{\n    font-size: 2em;\n    font-family: 'NevisBold';\n    font-weight: bold;\n    color: white;\n    text-align: center;\n}\n#main-content[_ngcontent-%COMP%]\n{\n    font-family: 'NevisBold';\n    color: rgb(167, 13, 13);    \n    font-size: 32px;\n    text-align: center;\n    place-self: center;\n}\n.break[_ngcontent-%COMP%]\n{\n    flex-basis: 100%;\n    height: 0;\n}\n#contact-info[_ngcontent-%COMP%]\n{\n    \n    display: grid;\n    color:white; \n    grid-template-columns: 1fr 1fr 1fr;\n    font-weight: bold;\n}\n.mat-icon[_ngcontent-%COMP%]\n{\n    font-size: 100px;\n    color: white;\n}\n#phone-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #email-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #address-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\n{\n    font-size: 1.5em;\n    display: inline;\n}\nh2[_ngcontent-%COMP%]\n{\n    font-size: 2rem;\n}\n.banner[_ngcontent-%COMP%]\n{\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    height: 50%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n.banner-bg[_ngcontent-%COMP%]\n{\n    background-image: url('Contactus.jpg');\n}\n.container[_ngcontent-%COMP%]\n{\n    margin: auto;\n    color: white;\n}\n.contact-div[_ngcontent-%COMP%]\n{\n    display: flex;\n    text-align: center;\n    position: relative;\n    top: -60px;\n    font-weight: bold;\n}\n.phone-info[_ngcontent-%COMP%]\n{\n    width: 50%;\n    margin: 25px;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #eaf0f6;\n}\n.email-info[_ngcontent-%COMP%]\n{\n    width: 50%;\n    margin: 25px;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #eaf0f6;\n}\nh3[_ngcontent-%COMP%]\n{\n    font-weight: bold;\n    font-size: 1.5em;\n    color:#2e475d\n}\n@media screen and (max-width: 600px)\n{\n    .contact-div[_ngcontent-%COMP%]\n    {\n        display: flex;\n        text-align: center;\n        position: relative;\n        top: -20px;\n        font-weight: bold;\n        flex-direction: column;\n    }  \n    .phone-info[_ngcontent-%COMP%]\n{\n    width: 80%;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #eaf0f6;\n    position: relative;\n    top: -40px;\n}\n.email-info[_ngcontent-%COMP%]\n{\n    width: 80%;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #eaf0f6;\n} \n}\n.banner-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\n{\n    font-size: 24px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxzQ0FBMEQ7SUFDMUQsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBOzs7SUFHSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUVBOztJQUVJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHNDQUEwRDtBQUM5RDtBQUNBOztJQUVJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7O0lBRUk7O1FBRUksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7SUFDQTs7SUFFQSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBOztJQUVJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWN0XG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Db250YWN0dXMuanBnXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuaDF7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbWFpbi1jb250ZW50XG57XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIGNvbG9yOiByZ2IoMTY3LCAxMywgMTMpOyAgICBcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbn1cbi5icmVha1xue1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xufVxuI2NvbnRhY3QtaW5mb1xue1xuICAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6d2hpdGU7IFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWF0LWljb25cbntcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNwaG9uZS1pbmZvIHAsICNlbWFpbC1pbmZvIHAsICNhZGRyZXNzLWluZm8gcFxue1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuaDJcbntcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5iYW5uZXJcbntcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVyLWJnXG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Db250YWN0dXMuanBnXCIpO1xufVxuLmNvbnRhaW5lclxue1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFjdC1kaXZcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5waG9uZS1pbmZvXG57XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWYwZjY7XG59XG4uZW1haWwtaW5mb1xue1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFmMGY2O1xufVxuaDNcbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiMyZTQ3NWRcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxue1xuICAgIC5jb250YWN0LWRpdlxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH0gIFxuICAgIC5waG9uZS1pbmZvXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZjBmNjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNDBweDtcbn1cbi5lbWFpbC1pbmZvXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZjBmNjtcbn0gXG59XG4uYmFubmVyLWhlYWRpbmcgcFxue1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    10970:
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 4,
        vars: 0,
        consts: [[1, "footer"], [1, "header-main"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LeadAhead \xA9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    width: 100%;\n    max-height: 20vh;\n    margin-top: auto;\n    line-height: 60px;\n    background-color: black;\n    color: white;\n    display: flex;\n  }\n  .header-main[_ngcontent-%COMP%]\n  {\n    margin: 0 auto;\n    display: table;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-size: 2em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBOztJQUVFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyMHZoO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmhlYWRlci1tYWluXG4gIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBoMntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    83672:
    /*!**********************************************************!*\
      !*** ./src/app/homecomponent/homecomponent.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomecomponentComponent": function HomecomponentComponent() {
          return (
            /* binding */
            _HomecomponentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-useful-swiper */
      49789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _HomecomponentComponent = /*#__PURE__*/function () {
        function _HomecomponentComponent() {
          _classCallCheck(this, _HomecomponentComponent);

          this.config = {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            autoplay: {
              delay: 6000,
              disableOnInteraction: true
            },
            slidesPerView: 1,
            breakpoints: {
              1000: {
                slidesPerView: 1
              },
              600: {
                slidesPerView: 1
              }
            },
            spaceBetween: 30
          };
        }

        _createClass(_HomecomponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomecomponentComponent;
      }();

      _HomecomponentComponent.ɵfac = function HomecomponentComponent_Factory(t) {
        return new (t || _HomecomponentComponent)();
      };

      _HomecomponentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomecomponentComponent,
        selectors: [["app-homecomponent"]],
        decls: 25,
        vars: 4,
        consts: [[1, "home-carousel"], [1, "mySwiper", 3, "config"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/Ahead.jpg"], [1, "carousel-slide-text"], ["id", "know-more", 3, "routerLink"], ["src", "assets/images/LeadAhead1.jpg"], ["src", "assets/images/LeadAhead2.jpg"], [1, "swiper-pagination"]],
        template: function HomecomponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INTELLIGENCE TO ADDRESS CHALLENGES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Know More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "STRATEGIES TO ENHANCE PERFORMANCES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Know More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MOTIVATION TO INFLUENCE RESULTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Know More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/team");
          }
        },
        directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__.SwiperComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".home-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n  width: 100vw;\n  height: 92vh; \n  display: inline-block;\n  position: relative;\n\n}\nh2[_ngcontent-%COMP%]\n{\n  \n  font-family: 'NevisBold';\n  color: white;\n  font-size: 3em;\n}\n.carousel-slide-text[_ngcontent-%COMP%]\n{\n  position: absolute;\n  top:50%;\n  height: 30%;\n}\n#know-more[_ngcontent-%COMP%]\n{\n    font-family: 'NevisBold';\n    font-weight: bolder;\n    border: 1px solid #ea2030;\n    border-radius: 100px;\n    padding: 10px;\n    color: white;\n    background-color: #ea2030;\n    position: relative;\n    display: inline-block;\n    font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVjb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0g7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCOztBQUVwQjtBQUNBOzs7RUFHRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBOztJQUVJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaG9tZWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmhvbWViYWNrZ3JvdW5kLWltYWdlXG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvQmFja0dyb3VuZDEuanBnXCIpO1xuICBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xufSAqL1xuLmhvbWUtY2Fyb3VzZWwgaW1nXG57XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA5MnZoOyBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cbmgyXG57XG4gIFxuICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzZW07XG59XG4uY2Fyb3VzZWwtc2xpZGUtdGV4dFxue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDo1MCU7XG4gIGhlaWdodDogMzAlO1xufVxuI2tub3ctbW9yZVxue1xuICAgIGZvbnQtZmFtaWx5OiAnTmV2aXNCb2xkJztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYTIwMzA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhMjAzMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    67419:
    /*!**************************************************!*\
      !*** ./src/app/programme/programme.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgrammeComponent": function ProgrammeComponent() {
          return (
            /* binding */
            _ProgrammeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProgrammeComponent = /*#__PURE__*/function () {
        function _ProgrammeComponent() {
          _classCallCheck(this, _ProgrammeComponent);
        }

        _createClass(_ProgrammeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProgrammeComponent;
      }();

      _ProgrammeComponent.ɵfac = function ProgrammeComponent_Factory(t) {
        return new (t || _ProgrammeComponent)();
      };

      _ProgrammeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProgrammeComponent,
        selectors: [["app-programme"]],
        decls: 41,
        vars: 0,
        consts: [[1, "banner", "banner-bg"], [1, "container"], [1, "programme-heading"], [1, "training-info"], [1, "training-info-steps"], [1, "training-step"], ["src", "assets/images/listening-icon.png", 1, "img-icon"], [1, "training-heading"], [1, "training-para"], ["src", "assets/images/strategy-icon.png", 1, "img-icon"], ["src", "assets/images/execution-icon.png", 1, "img-icon"], ["src", "assets/images/evaluation-icon.png", 1, "img-icon"]],
        template: function ProgrammeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TRAINING THAT MEETS YOUR DEMAND");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How We Work with you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TRAINING THAT DELIVERS RESULTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Our Program Aims to provide a path for fruitful Learning. We are determined to design, implement and execute interative learning assignment. LeadhAhead's Team idenitfies obstacles, challenges and measures your training need and then prescribes a Leadership plan that provides solution to your problems and results in desired output. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1. Hear You Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Identify your needs, challenges and targets.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2. Planning it Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Prepare a detailed learning curriculum to meet your targets.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3. Execute It Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Deliver the training program in various ways to fullfill your needs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "4. Evaluate It Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Collect Feedback and make alterations to maximize outcome and impact.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h1[_ngcontent-%COMP%]\n{\n    font-size: 2rem;\n    font-weight: bold;\n    font-family: 'NevisBold';\n    color: white;\n}\nh2[_ngcontent-%COMP%]\n{\n    font-size: 2em;\n    font-weight: bold;\n    font-family: 'NevisBold';\n}\nh3[_ngcontent-%COMP%]\n{\n    font-size: 1.8em;\n    color:#7bafd4;\n    font-family: 'NevisBold';\n    font-weight: bold;    \n    text-align: center;\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n    color:white;\n    font-weight: bold;\n    font-family: 'NevisBold';\n    text-align: center;\n\n}\n@media screen and (max-width:992px){\n    .banner[_ngcontent-%COMP%]\n    {\n        background-image: url('Leading.jpg');\n        background-size: cover;\n        height: 100%;\n        width: 100%;\n    }\n}\n.banner[_ngcontent-%COMP%]\n{\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    height: 50%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    \n}\n.banner-bg[_ngcontent-%COMP%]\n{\n    background-image: url('discussion2.jpg');\n}\n.banner-bg[_ngcontent-%COMP%]::before\n{\n    background-color: #0e1b31;\n    opacity: 0.5;\n}\n.container[_ngcontent-%COMP%]\n{\n    margin: auto;\n}\n.training-info[_ngcontent-%COMP%]\n{\n    background: #f4f7fc;\n    color:#7bafd4;\n    text-align: center;\n}\n.training-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: black;\n    margin: 10px;\n    text-align: center;\n    font-size: 20px;\n}\n.training-info-steps[_ngcontent-%COMP%]\n{\n    display: flex;\n    margin-right: 10px;\n    margin-top: 20px;\n    text-align: center;\n}\n.training-step[_ngcontent-%COMP%]{\n    width:25%;\n    min-height: 280px;\n    text-align: center;\n    box-shadow:  0 15px rgb(0 0 0 / 5%);\n    border-bottom: 5px solid #7bafd4;\n    margin: 10px;\n    background: white;\n}\n.img-icon[_ngcontent-%COMP%]\n{\n    height: 70px;\n    width: 70px;\n}\n.training-heading[_ngcontent-%COMP%]\n{\n    color: black;\n}\n.training-para[_ngcontent-%COMP%]\n{\n    font-weight: 500;\n    font-size: 16px;\n}\n@media screen and (max-width: 600px)\n{\n .training-info-steps[_ngcontent-%COMP%]\n {\n    flex-direction: column;\n    align-items: center;\n }\n .training-step[_ngcontent-%COMP%]\n {\n    width: 80%;\n    padding: 10px;\n }   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSTs7UUFFSSxvQ0FBd0Q7UUFDeEQsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixXQUFXO0lBQ2Y7QUFDSjtBQUNBOztJQUVJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLHdDQUE0RDtBQUNoRTtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7O0NBRUM7O0lBRUcsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0QjtDQUNBOztJQUVHLFVBQVU7SUFDVixhQUFhO0NBQ2hCO0FBQ0QiLCJmaWxlIjoicHJvZ3JhbW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVxue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuaDJcbntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG59XG5oM1xue1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgY29sb3I6IzdiYWZkNDtcbiAgICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XG4gICAgLmJhbm5lclxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9MZWFkaW5nLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uYmFubmVyXG57XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xufVxuLmJhbm5lci1iZ1xue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzY3Vzc2lvbjIuanBnXCIpO1xufVxuLmJhbm5lci1iZzo6YmVmb3JlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMWIzMTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4uY29udGFpbmVyXG57XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnRyYWluaW5nLWluZm9cbntcbiAgICBiYWNrZ3JvdW5kOiAjZjRmN2ZjO1xuICAgIGNvbG9yOiM3YmFmZDQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRyYWluaW5nLWluZm8gcHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udHJhaW5pbmctaW5mby1zdGVwc1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRyYWluaW5nLXN0ZXB7XG4gICAgd2lkdGg6MjUlO1xuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAgMCAxNXB4IHJnYigwIDAgMCAvIDUlKTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzdiYWZkNDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaW1nLWljb25cbntcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG59XG4udHJhaW5pbmctaGVhZGluZ1xue1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50cmFpbmluZy1wYXJhXG57XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxue1xuIC50cmFpbmluZy1pbmZvLXN0ZXBzXG4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG4gLnRyYWluaW5nLXN0ZXBcbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuIH0gICBcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    54696:
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      13338);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);

      function NavbarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r3.routeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
        }
      }

      function NavbarComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r4.routeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.label, " ");
        }
      }

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent() {
          _classCallCheck(this, _NavbarComponent);

          this.menuItems = [{
            label: 'Home',
            icon: 'home',
            routeName: 'home'
          }, {
            label: 'About Us',
            icon: 'info',
            routeName: 'about'
          }, {
            label: 'How we Work',
            icon: 'business_center',
            routeName: 'programme'
          }, {
            label: 'Contact',
            icon: 'email',
            routeName: 'contact'
          }];
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)();
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 12,
        vars: 3,
        consts: [["color", "primary"], ["src", "assets/images/leadahead-logo.png"], [1, "example-spacer"], ["fxHide.xs", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "fxHide", "", "fxShow.xs", "", 3, "matMenuTriggerFor"], ["color", "white"], ["dropMenu", "matMenu"], [4, "ngFor", "ngForOf"], ["fxHide.xs", "", 3, "routerLink"], [1, "menu-item"], ["mat-menu-item", "", 3, "routerLink"], [1, "mr"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_button_5_Template, 5, 3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_ng_container_11_Template, 6, 3, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultShowHideDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider],
        styles: [".mat-toolbar[_ngcontent-%COMP%]\n{\n    background:transparent;\n    border-bottom: 1px solid white;\n    width: 100%;\n    height: 7vh;\n    top: 0;\n}\nimg[_ngcontent-%COMP%]\n{\n    height: 7vh;\n    width: 150px;\n    margin-left: 0;\n}\n.example-spacer[_ngcontent-%COMP%]\n{\n    width: 20%;\n}\nbutton[_ngcontent-%COMP%]{\n    background: none;\n    border: 0;\n    display:inline;\n    color:black;\n    font-weight: bold;\n    font-size: 20px;\n    margin: 10px;\n}\n.menu-item[_ngcontent-%COMP%]:hover\n{\n    text-decoration: underline;\n}\nmat-icon[_ngcontent-%COMP%] {\n    display: inline;\n    vertical-align: middle;\n    margin: 3px;\n}\n.right-menu[_ngcontent-%COMP%]\n{\n    margin-left: 20%;\n    margin-right: 0;  \n    display: inline;     \n}\n.mat-menu-item[_ngcontent-%COMP%]\n{\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFdBQVc7SUFDWCxNQUFNO0FBQ1Y7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhclxue1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIHRvcDogMDtcbn1cbmltZ1xue1xuICAgIGhlaWdodDogN3ZoO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cbi5leGFtcGxlLXNwYWNlclxue1xuICAgIHdpZHRoOiAyMCU7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTppbmxpbmU7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5tZW51LWl0ZW06aG92ZXJcbntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbm1hdC1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5yaWdodC1tZW51XG57XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7ICBcbiAgICBkaXNwbGF5OiBpbmxpbmU7ICAgICBcbn1cbi5tYXQtbWVudS1pdGVtXG57XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    53975:
    /*!****************************************!*\
      !*** ./src/app/team/team.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeamComponent": function TeamComponent() {
          return (
            /* binding */
            _TeamComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-useful-swiper */
      49789);

      var _c0 = ["newSwiper"];

      var _TeamComponent = /*#__PURE__*/function () {
        function _TeamComponent() {
          _classCallCheck(this, _TeamComponent);

          this.config = {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            slidesPerView: 3,
            breakpoints: {
              1000: {
                slidesPerView: 3
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 100
              }
            },
            spaceBetween: 30
          };
        }

        _createClass(_TeamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("Inside Team Component");
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.newSwiper.swiperRef); //Swiper instance will be displayed in console
          }
        }]);

        return _TeamComponent;
      }();

      _TeamComponent.ɵfac = function TeamComponent_Factory(t) {
        return new (t || _TeamComponent)();
      };

      _TeamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TeamComponent,
        selectors: [["app-team"]],
        viewQuery: function TeamComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newSwiper = _t.first);
          }
        },
        decls: 68,
        vars: 1,
        consts: [[1, "team-heading"], [1, "team-container"], [1, "narenInfo"], [1, "photo"], ["id", "photo", "src", "assets/images/narendran-photo.jfif"], [1, "designation"], ["id", "about"], [1, "detailedDescription"], [1, "testimonial"], [1, "mySwiper", 3, "config"], ["newSwiper", ""], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/modi-properties-logo.png", 1, "testimonial-img"], ["src", "assets/images/semcom-school.png", 1, "testimonial-img"], ["src", "assets/images/EssarLogo.svg.png", 1, "testimonial-img"], ["src", "assets/images/KILA-Logo.png", 1, "testimonial-img"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"]],
        template: function TeamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEET OUR AWESOME TEAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PR Narendran");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Founder and Head Coach");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Who Am I?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " PR Narendran is a Certified Soft Skills Trainer, Motivational Speaker, Leadership Coach with professional career spaning decades including distinguished career with defence. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Strong credentials of Training over 40000 students & professional from prestigious corporates and institues through interactive workshop. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Certified Associate Power Coach(APC) from PCMKTM Coach Training,One of the world's most most Advanced & In-Depth, IIC & IFC Approved Coaching Program,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Canada.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Among the few Trainers Accredited by AP State Council for Higher Education - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "APSCHE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " An Associate with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Regional Centre for Urban & Environmental Studies (RCEUS), Osmania University ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "for Training District heads of all southern states of India. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "TESTIMONIALS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "swiper", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Modi Properties & Investments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Demonstrated Professional Excellence in Conducting Corporate training Session while imparting reward vision amoong participants. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Semcom Business School");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Narendran's illustration on personality identification with immense sense of humour is irreplaceable. I would strongly recommend him to any human. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Essar Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " An Acknowledged Training Consultant and contributor of Strategic Inputs which enabled us to succeed and exceed performance benchmark. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "KILA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " An Acknowledged Training Consultant and contributor of Strategic Inputs which enabled us to succeed and exceed performance benchmark. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
          }
        },
        directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__.SwiperComponent],
        styles: [".team-container[_ngcontent-%COMP%]\n{\n    display: flex;\n}\n.sachinInfo[_ngcontent-%COMP%], .narenInfo[_ngcontent-%COMP%]\n{\n    flex: 1;\n    background-color: #f4f7fc;\n}\n#photo[_ngcontent-%COMP%]\n{\n    min-height: 200px;\n    width: 200px;\n    border-radius: 100%;\n    text-align: center;\n}\n.photo[_ngcontent-%COMP%]\n{\n    text-align: center;\n}\n.team-heading[_ngcontent-%COMP%]\n{\n    font-family: 'NevisBold';\n    font-weight: bold;\n    width: 100%;\n    height: 20%;\n    background: #f4f7fc;\n    color:#7bafd4;\n}\n.team-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    display: grid;\n    justify-content: center;\n    font-size: 45px;\n    align-self: center;\n    place-items: center;\n    justify-self: center;\n    height: 100%;\n}\n.designation[_ngcontent-%COMP%]\n{\n    margin-top: 20px;\n}\nh2[_ngcontent-%COMP%]{\n    color:#7bafd4;\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    margin-top: 5px;\n}\nh3[_ngcontent-%COMP%]\n{\n    color: #7bafd4;\n    font-size: 40px;\n    text-align: center;\n    font-weight: bold;\n}\n#about[_ngcontent-%COMP%]\n{\n    font-weight: bold;\n    color: #E94B3CFF;\n    font-size: 32px;\n    margin-top: 1em;\n}\n.detailedDescription[_ngcontent-%COMP%]\n{\n    font-size: 20px;\n    color: #7bafd4;\n    font-family: 'NevisBold';\n}\nli[_ngcontent-%COMP%]{\n    margin-top: 5px;\n}\nstrong[_ngcontent-%COMP%]\n{\n    background-color: white;\n}\n.card-style[_ngcontent-%COMP%]\n{\n    max-width: 400px;\n    display: inline-block;\n    margin: 1em;\n    min-width: 200px;\n}\nh1[_ngcontent-%COMP%]{\n    font-family: 'NevisBold';\n    font-weight: bold;\n    text-align: center;\n    color:#7bafd4;\n    margin-top: 5%;\n    font-size: 3em;\n}\n.testimonial-img[_ngcontent-%COMP%]\n{\n    height: 100px;\n    width: 100px;\n}\nswiper[_ngcontent-%COMP%]\n{\n    width: 80%;\n}\n.swiper-slide[_ngcontent-%COMP%]\n{\n    color:#7bafd4;\n}\n@media screen and (max-width:600px) \n{\n .team-heading[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]\n {\n    font-size: 24px;\n }\n .team-container[_ngcontent-%COMP%]\n {\n    display: flex;\n    flex-direction: column;\n }\n h2[_ngcontent-%COMP%]\n {\n    font-size: 32px;\n }   \n h3[_ngcontent-%COMP%]\n {\n    font-size: 24px;\n }\n .swiper-wrapper[_ngcontent-%COMP%]\n {\n    color: white;\n }\n .swiper-slide[_ngcontent-%COMP%]\n {\n    border: 1px solid white;\n }\n swiper[_ngcontent-%COMP%]\n {\n    width: 100%;\n }\n}\n[_nghost-%COMP%]     mat-toolbar\n{\n    background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksT0FBTztJQUNQLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksVUFBVTtBQUNkO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUVBOztDQUVDOztJQUVHLGVBQWU7Q0FDbEI7Q0FDQTs7SUFFRyxhQUFhO0lBQ2Isc0JBQXNCO0NBQ3pCO0NBQ0E7O0lBRUcsZUFBZTtDQUNsQjtDQUNBOztJQUVHLGVBQWU7Q0FDbEI7Q0FDQTs7SUFFRyxZQUFZO0NBQ2Y7Q0FDQTs7SUFFRyx1QkFBdUI7Q0FDMUI7Q0FDQTs7SUFFRyxXQUFXO0NBQ2Q7QUFDRDtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1jb250YWluZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnNhY2hpbkluZm8sLm5hcmVuSW5mb1xue1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmYztcbn1cbiNwaG90b1xue1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5waG90b1xue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZWFtLWhlYWRpbmdcbntcbiAgICBmb250LWZhbWlseTogJ05ldmlzQm9sZCc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjdmYztcbiAgICBjb2xvcjojN2JhZmQ0O1xufVxuLnRlYW0taGVhZGluZyA+IHB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmRlc2lnbmF0aW9uXG57XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmgye1xuICAgIGNvbG9yOiM3YmFmZDQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmgzXG57XG4gICAgY29sb3I6ICM3YmFmZDQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNhYm91dFxue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRTk0QjNDRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5kZXRhaWxlZERlc2NyaXB0aW9uXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjN2JhZmQ0O1xuICAgIGZvbnQtZmFtaWx5OiAnTmV2aXNCb2xkJztcbn1cbmxpe1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbnN0cm9uZ1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNhcmQtc3R5bGVcbntcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuaDF7XG4gICAgZm9udC1mYW1pbHk6ICdOZXZpc0JvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjojN2JhZmQ0O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuLnRlc3RpbW9uaWFsLWltZ1xue1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuc3dpcGVyXG57XG4gICAgd2lkdGg6IDgwJTtcbn1cbi5zd2lwZXItc2xpZGVcbntcbiAgICBjb2xvcjojN2JhZmQ0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSBcbntcbiAudGVhbS1oZWFkaW5nID4gcFxuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gfVxuIC50ZWFtLWNvbnRhaW5lclxuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gfVxuIGgyXG4ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiB9ICAgXG4gaDNcbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuIH1cbiAuc3dpcGVyLXdyYXBwZXJcbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuIH1cbiAuc3dpcGVyLXNsaWRlXG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuIH1cbiBzd2lwZXJcbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxufVxuOmhvc3QgOjpuZy1kZWVwIG1hdC10b29sYmFyXG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map