import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }     from './app.component';
import { FurnitureModule }  from './furniture-module/index';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        FurnitureModule,
        AppRoutingModule
    ],
    declarations : [ AppComponent ],
    bootstrap    : [ AppComponent ]
})
export class AppModule {
    
}