import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Product } from '../index';

@Injectable()
export class ProductsService {
    private _products    : Product[];
    private _productsUrl : string = '/product';

    constructor (private http: Http) {  }

    getProducts() : Observable<Product[]>  {
        return this.http
            .get(this._productsUrl)
            .map((response : Response) => {
                this._products = response.json();
                return this._products;
            });
    }

    getProductById(id : string) : Product {
        return this._products.find(product => product._id === id);
    }
}