import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';

import { Product } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'product',
    templateUrl : 'product.component.html',
    styleUrls   : [ 'product.component.css' ]
})
export class ProductComponent implements OnInit {
    product   : Product;
    productId : number;

    constructor(private router : Router, private activatedRoute : ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.params.forEach((param : Params) => {
            this.productId = +param['id'];
        });
    }

    goToProductList() {
        this.router.navigate(['/product-list']);
    }
}