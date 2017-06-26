import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import * as barrel from './index';

@NgModule({
    imports : [
        RouterModule.forChild([
            { path : 'about-us',    component : barrel.AboutUsComponent },
            { path : 'basket',      component : barrel.BasketComponent },
            { path : 'news-list',   component : barrel.NewsListComponent },
            { path : 'news/:id',    component : barrel.NewsComponent },
            { path : 'product/:id', component : barrel.ProductComponent },
            { path : 'order',       component : barrel.OrderComponent }
        ])
    ],
    exports : [ RouterModule ]
})
export class FurnitureRoutingModule {

}