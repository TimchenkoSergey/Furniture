export class Menu {
    private _text : string;
    private _link : string;

    constructor(text : string, link : string) {
        this._text = text;
        this._link = link;
    }

    get text() : string { return this._text; }
    get link() : string { return this._link; }
}