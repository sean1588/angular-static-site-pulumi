webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ng_init_directive__ = __webpack_require__("./src/app/directives/ng-init.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_leftnav_leftnav_component__ = __webpack_require__("./src/app/components/shared/leftnav/leftnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_topnav_topnav_component__ = __webpack_require__("./src/app/components/shared/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_app_app_component__ = __webpack_require__("./src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__ = __webpack_require__("./src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_main_layout_main_layout_component__ = __webpack_require__("./src/app/layouts/main-layout/main-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_14__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        // canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/home' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */], data: { title: 'Pulumi Café' } },
            { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__["a" /* MenuComponent */], data: { title: 'Menu' } },
        ]
    },
    { path: '**', redirectTo: '/home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layouts_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_shared_leftnav_leftnav_component__["a" /* LeftNavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shared_topnav_topnav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directives_ng_init_directive__["a" /* NgInitDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatListModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["f" /* Title */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgressInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__components_app_app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(themeService) {
        this.themeService = themeService;
        themeService.loadSavedTheme();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services__["b" /* ThemeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["b" /* ThemeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <h1>Pulumi Café</h1>\n  <img src=\"assets/coffeeshop1.jpg\"/>\n  <h2>{{address}}</h2>\n  <div class=\"hours\">\n    <div class=\"days\">\n      <div>\n        monday to friday - 9am to 9pm\n      </div>\n      <div>\n        saturday - 10am to 5pm\n      </div>\n      <div>\n        sunday - closed\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.address = "1525 4th Ave, Seattle, WA 98101";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <h1>Menu</h1>\n  <table>\n    <tr *ngFor=\"let item of menuItems\">\n      <td class=\"item\">\n        <h3>{{item.name}}</h3>\n      </td>\n      <td class=\"price\">\n        <h3>{{item.price}}</h3>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.menuItems = [
            {
                name: "drip",
                price: "$3.00"
            },
            {
                name: "espressso",
                price: "$3.50"
            },
            {
                name: "americano",
                price: "$3.50"
            },
            {
                name: "latte",
                price: "$4.75"
            },
            {
                name: "cortado",
                price: "$3.50"
            },
            {
                name: "tea",
                price: "$3.00"
            }
        ];
    }
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/components/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/leftnav/leftnav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <div class=\"logo\"></div>\n  <mat-nav-list>\n    <a mat-list-item routerLink=\"/home\" routerLinkActive=\"active\">\n      <mat-icon>place</mat-icon>\n      <span>About</span>\n    </a>\n    <a mat-list-item routerLink=\"/menu\" routerLinkActive=\"active\">\n      <mat-icon>restaurant</mat-icon>\n      <span>Menu</span>\n    </a>\n  </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/leftnav/leftnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LeftNavComponent = (function () {
    function LeftNavComponent() {
    }
    LeftNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leftnav',
            template: __webpack_require__("./src/app/components/shared/leftnav/leftnav.component.html")
        })
    ], LeftNavComponent);
    return LeftNavComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <!--Sidenav menu button-->\n  <button mat-icon-button (click)=\"onToggleMenu()\">\n    <mat-icon aria-label=\"Toggle menu\">menu</mat-icon>\n  </button>\n\n  <!--Title-->\n  <span class=\"app-title\">Pulumi Café</span>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/shared/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavComponent = (function () {
    function TopNavComponent(router, route, titleService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.toggleMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
    * Dispatch toggleMenu event.
    */
    TopNavComponent.prototype.onToggleMenu = function () {
        this.toggleMenu.emit();
    };
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Use default header as the document title or a fallback for toolbar title
        this.defaultTitle = this.header;
        // Get initial title on page load
        this.getPageTitle();
        this.sub = this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.getPageTitle();
        });
    };
    TopNavComponent.prototype.getPageTitle = function () {
        var parentRouteTitle;
        var snapshot = this.route.snapshot;
        var activated = this.route.firstChild;
        if (activated != null) {
            while (activated != null) {
                // Get title for the current route, if case child is missing rote data, use parent title.
                parentRouteTitle = snapshot.data['title'] || parentRouteTitle;
                snapshot = activated.snapshot;
                activated = activated.firstChild;
            }
        }
        // Set header, fallback to default title if data not set on route
        var title = snapshot.data['title'] || parentRouteTitle;
        // If any custom title is set, use it
        this.header = title || this.defaultTitle;
        // Set document title
        this.titleService.setTitle(title ? this.defaultTitle + " - " + title : this.defaultTitle);
    };
    TopNavComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TopNavComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TopNavComponent.prototype, "toggleMenu", void 0);
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topnav',
            template: __webpack_require__("./src/app/components/shared/topnav/topnav.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/directives/ng-init.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgInitDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgInitDirective = (function () {
    function NgInitDirective() {
        this.value = {};
    }
    NgInitDirective.prototype.ngOnInit = function () {
        if (this.ngInit) {
            this.ngInit();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgInitDirective.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgInitDirective.prototype, "ngInit", void 0);
    NgInitDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ngInit]',
            exportAs: 'ngInit'
        })
    ], NgInitDirective);
    return NgInitDirective;
}());



/***/ }),

/***/ "./src/app/layouts/main-layout/main-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [showSpinner]=\"false\" [color]=\"'#039BE5'\"></ng-progress>\n<mat-sidenav-container fullscreen [ngClass]=\"{ 'sidenav-closed': !isSidenavOpen }\">\n\n  <app-topnav header=\"App Title\" (toggleMenu)=\"toggleSidenav()\"></app-topnav>\n\n  <mat-sidenav #sidenav [mode]=\"sidenavMode\">\n    <app-leftnav></app-leftnav>\n  </mat-sidenav>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/layouts/main-layout/main-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainLayoutComponent = (function () {
    function MainLayoutComponent(router) {
        this.router = router;
        this.isSidenavOpen = true;
    }
    /**
    * Gets current side nav mode for page refresh, if any.
    * Sidenav mode is stored in localStorage for later use.
    */
    MainLayoutComponent.prototype.wasSidenavOpen = function () {
        var savedState = localStorage.getItem('sidenavOpen');
        if (savedState) {
            return JSON.parse(savedState);
        }
        return true;
    };
    /**
    * Sets correct sidenav mode based on window size.
    */
    MainLayoutComponent.prototype.setSidenavMode = function () {
        if (window.innerWidth < 768) {
            this.sidenavMode = 'over';
            this.isSidenavOpen = false;
            this.sidenav.close();
        }
        else {
            this.sidenavMode = 'side';
            this.isSidenavOpen = this.wasSidenavOpen();
            if (this.isSidenavOpen)
                this.sidenav.open();
        }
    };
    /**
    * Creates subscription to navigation change event.
    * Used to toggle side menu if one is in "over" mode.
    */
    MainLayoutComponent.prototype.subscribeToRouteChangeEvent = function () {
        var _this = this;
        // Hide sidenav on route change if using 'over' mode
        this.navigationSubscription = this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]; })
            .subscribe(function (event) {
            if (_this.sidenav.mode === 'over')
                _this.sidenav.close();
        });
    };
    /**
    * Handes window resilze.
    *
    * @param event Event args.
    */
    MainLayoutComponent.prototype.onResize = function (event) {
        this.setSidenavMode();
    };
    /**
    * Method executed on component initialization.
    */
    MainLayoutComponent.prototype.ngOnInit = function () {
        this.subscribeToRouteChangeEvent();
        this.setSidenavMode();
    };
    /**
    * Method executed on component destroy.
    */
    MainLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    /**
    * Toggles sidenav based on current sidenav settings.
    */
    MainLayoutComponent.prototype.toggleSidenav = function () {
        if (this.sidenavMode === 'side') {
            this.sidenav.toggle();
            this.isSidenavOpen = !this.isSidenavOpen;
            // Keep open state for desktops only
            localStorage.setItem('sidenavOpen', JSON.stringify(this.isSidenavOpen));
        }
        else {
            this.sidenav.open();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSidenav */])
    ], MainLayoutComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainLayoutComponent.prototype, "onResize", null);
    MainLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-layout',
            template: __webpack_require__("./src/app/layouts/main-layout/main-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    HttpService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var user = localStorage.getItem('user');
        if (user) {
            // HttpHeaders are immutable, set() method returns new instance of HttpHeaders
            headers = headers.set('Authorization', "Bearer " + JSON.parse(user).token);
        }
        return headers;
    };
    HttpService.prototype.onError = function (error) {
        if (error.status === 401 || error.status === 403) {
            this.router.navigate(['/login']);
        }
        return Promise.reject(error);
    };
    /**
     * Executes GET request for specified url.
     * @param url Url to execute.
     */
    HttpService.prototype.get = function (url) {
        var _this = this;
        return this.http.get("" + this.baseUrl + url, {
            headers: this.getHeaders()
        }).catch(function (error) { return _this.onError(error); });
    };
    /**
     * Executes POST request with specified url and data
     * @param url Request Url.
     * @param data Post data.
     */
    HttpService.prototype.post = function (url, data) {
        var _this = this;
        return this.http.post("" + this.baseUrl + url, data, {
            headers: this.getHeaders()
        }).catch(function (error) { return _this.onError(error); });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_service__ = __webpack_require__("./src/app/services/theme.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_service__["a"]; });




/***/ }),

/***/ "./src/app/services/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemeService = (function () {
    function ThemeService() {
        this.themes = [
            { value: 'default', name: 'Default', cssClass: null },
            { value: 'light', name: 'Light', cssClass: 'light-theme' },
            { value: 'snow-white', name: 'Snow white', cssClass: 'snow-white-theme' },
            { value: 'mixed', name: 'Mixed', cssClass: 'mixed-theme' },
            { value: 'Dark', name: 'Dark', cssClass: 'dark-theme' },
            { value: 'black', name: 'Black', cssClass: 'black-theme' }
        ];
    }
    /**
    * Loads saved theme and sets required classes to body element.
    */
    ThemeService.prototype.loadSavedTheme = function () {
        var theme = localStorage.getItem('theme');
        if (theme !== undefined) {
            var selectedTheme = JSON.parse(theme);
            if (selectedTheme != null && selectedTheme.cssClass) {
                var body = document.getElementsByTagName('body')[0];
                body.classList.add(selectedTheme.cssClass);
            }
        }
        // Set toolbar width
        var fullWidthSaved = localStorage.getItem('fullWidth');
        if (fullWidthSaved) {
            this.setFullWidth(JSON.parse(fullWidthSaved));
        }
    };
    /**
    * Gets current theme.
    */
    ThemeService.prototype.currentTheme = function () {
        var storedTheme = localStorage.getItem('theme');
        if (storedTheme != null) {
            var tempTheme_1 = JSON.parse(storedTheme);
            var theme = this.themes.filter(function (theme) { return theme.value && theme.value === tempTheme_1.value; });
            if (theme != null)
                return theme[0];
        }
        return this.themes[0];
    };
    /**
    * Sets theme.
    *
    * @param theme Theme to use.
    */
    ThemeService.prototype.setTheme = function (theme) {
        var body = document.getElementsByTagName('body')[0];
        this.themes.forEach(function (theme) { return body.classList.remove(theme.cssClass); });
        localStorage.removeItem('theme');
        if (theme.cssClass) {
            localStorage.setItem('theme', JSON.stringify(theme));
            body.classList.add(theme.cssClass);
        }
    };
    ThemeService.prototype.isFullWidth = function () {
        var fullWidthSaved = localStorage.getItem('fullWidth');
        if (fullWidthSaved) {
            return JSON.parse(fullWidthSaved);
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            return body.classList.contains('full-width');
        }
    };
    /**
     * Sets toolbar full width options.
     *
     * @param fullWidth Indicates whether toolbar is displayed in full width.
     */
    ThemeService.prototype.setFullWidth = function (fullWidth) {
        var body = document.getElementsByTagName('body')[0];
        localStorage.setItem('fullWidth', JSON.stringify(fullWidth));
        if (fullWidth) {
            body.classList.add('full-width');
        }
        else {
            body.classList.remove('full-width');
        }
    };
    ThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'https://jsonplaceholder.typicode.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map