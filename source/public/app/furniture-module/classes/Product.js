"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(year, price, name, id, mainImgSrc, type, designer, material, description) {
        this._year = year;
        this._price = price;
        this._name = name;
        this.__id = id;
        this._mainImgSrc = mainImgSrc;
        this._type = type;
        this._designer = designer;
        this._material = material;
        this._description = description;
    }
    Object.defineProperty(Product.prototype, "year", {
        get: function () { return this._year; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () { return this._price; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "_id", {
        get: function () { return this.__id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "mainImgSrc", {
        get: function () { return this._mainImgSrc; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "designer", {
        get: function () { return this._designer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "material", {
        get: function () { return this._material; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        get: function () { return this._description; },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map