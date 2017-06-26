import {
    Component,
    OnInit
} from '@angular/core';

import { Product } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'product-list',
    templateUrl : 'product-list.component.html',
    styleUrls   : [ 'product-list.component.css' ]
})
export class ProductListComponent implements OnInit{
    productList : Product[];

    constructor() {

    }

    ngOnInit() {

    }
}