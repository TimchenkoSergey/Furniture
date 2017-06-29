import {
    Component,
    Input
} from '@angular/core';

import { Product } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'product-description',
    templateUrl : 'product-description.component.html',
    styleUrls   : [ 'product-description.component.css' ]
})
export class ProductDescriptionComponent {
    @Input() product : Product;
    @Input() white   : boolean = false;

    constructor() {  }
}