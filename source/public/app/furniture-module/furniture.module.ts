import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import { FurnitureRoutingModule } from './furniture-routing.module';
import * as barrel                from './index';

const components = [
    barrel.AboutUsComponent,
    barrel.FooterComponent,
    barrel.HeaderComponent,
    barrel.LogoInformationComponent,
    barrel.MenuComponent,
    barrel.NewsComponent,
    barrel.NewsListComponent,
    barrel.ProductComponent,
    barrel.ProductListComponent,
    barrel.OrderComponent,
    barrel.BasketComponent
];

@NgModule({
    imports : [
        CommonModule,
        HttpModule,
        FurnitureRoutingModule,
    ],
    declarations : components,
    exports      : components,
    providers    : [ barrel.MenuService ]
})
export class FurnitureModule {  }