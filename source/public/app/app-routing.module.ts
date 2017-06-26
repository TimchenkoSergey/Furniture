import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './furniture-module/index';

@NgModule({
    imports : [
        RouterModule.forRoot([
            { path : 'product-list', component : ProductListComponent },
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