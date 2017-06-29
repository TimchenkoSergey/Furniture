import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';

import {
    Product,
    ProductsService
} from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'product',
    templateUrl : 'product.component.html',
    styleUrls   : [ 'product.component.css' ]
})
export class ProductComponent implements OnInit {
    product   : Product;
    productId : string;

    constructor(
        private router : Router,
        private activatedRoute : ActivatedRoute,
        private productsService : ProductsService
    ) {  }

    ngOnInit() {
        this.activatedRoute.params.forEach((param : Params) => {
            this.productId = param['id'];
            this.product   = this.productsService.getProductById(this.productId);
        });
    }

    goToProductList() {
        this.router.navigate(['/product-list']);
    }

    buyProduct() {

    }
}