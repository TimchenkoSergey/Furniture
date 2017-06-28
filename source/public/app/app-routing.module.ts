import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    ProductListComponent,
    ProductsResolve
} from './furniture-module/index';

@NgModule({
    imports : [
        RouterModule.forRoot([
            {
                path : 'product-list',
                component : ProductListComponent,
                resolve : {
                    products : ProductsResolve
                }
            },
            {
                path : '',
                redirectTo : 'product-list',
                pathMatch : 'full'
            }
        ])
    ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {

}