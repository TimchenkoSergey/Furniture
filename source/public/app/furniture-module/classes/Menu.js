"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu = (function () {
    function Menu(text, link) {
        this._text = text;
        this._link = link;
    }
    Object.defineProperty(Menu.prototype, "text", {
        get: function () { return this._text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "link", {
        get: function () { return this._link; },
        enumerable: true,
        configurable: true
    });
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map