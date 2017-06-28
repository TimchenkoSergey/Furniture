export class Product {
    private _year        : number;
    private _price       : number;
    private __id         : string;
    private _name        : string;
    private _mainImgSrc  : string;
    private _type        : string;
    private _designer    : string;
    private _material    : string;
    private _description : string[];

    constructor(year : number, price : number, name : string, id : string, mainImgSrc : string, type : string, designer : string, material : string, description : string[]) {
        this._year        = year;
        this._price       = price;
        this._name        = name;
        this.__id         = id;
        this._mainImgSrc  = mainImgSrc;
        this._type        = type;
        this._designer    = designer;
        this._material    = material;
        this._description = description;
    }

    get year()        : number   { return this._year; }
    get price()       : number   { return this._price; }
    get name()        : string   { return this._name; }
    get _id()         : string   { return this.__id; }
    get mainImgSrc()  : string   { return this._mainImgSrc; }
    get type()        : string   { return this._type; }
    get designer()    : string   { return this._designer; }
    get material()    : string   { return this._material; }
    get description() : string[] { return this._description; }
}