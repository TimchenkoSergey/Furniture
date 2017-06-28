import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'product-list',
    templateUrl : 'product-list.component.html',
    styleUrls   : [ 'product-list.component.css' ]
})
export class ProductListComponent implements OnInit{
    productList : Product[];

    constructor(private activatedRoute : ActivatedRoute) {  }

    ngOnInit() {
        this.activatedRoute.data.forEach((data : { products : Product[] }) => {
            this.productList = data.products;
        });
    }
}