import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {
    Product,
    ProductsService
} from '../index';

@Injectable()
export class ProductsResolve implements Resolve<Product[]> {
    constructor(private productsService : ProductsService) {  }

    resolve(route : ActivatedRouteSnapshot) : Observable<Product[]> {
        return this.productsService.getProducts();
    }
}