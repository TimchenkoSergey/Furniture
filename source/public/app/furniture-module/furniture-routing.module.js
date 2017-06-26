"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var barrel = require("./index");
var FurnitureRoutingModule = (function () {
    function FurnitureRoutingModule() {
    }
    FurnitureRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'about-us', component: barrel.AboutUsComponent },
                    { path: 'basket', component: barrel.BasketComponent },
                    { path: 'news-list', component: barrel.NewsListComponent },
                    { path: 'news/:id', component: barrel.NewsComponent },
                    { path: 'product/:id', component: barrel.ProductComponent },
                    { path: 'order', component: barrel.OrderComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], FurnitureRoutingModule);
    return FurnitureRoutingModule;
}());
exports.FurnitureRoutingModule = FurnitureRoutingModule;
//# sourceMappingURL=furniture-routing.module.js.map