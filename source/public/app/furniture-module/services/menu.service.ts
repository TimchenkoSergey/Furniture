import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Menu } from '../index';

@Injectable()
export class MenuService {
    private _menuUrl : string = '/menu';

    constructor (private http: Http) {  }

    getMenuItems() : Observable<Menu[]> {
        return this.http
                    .get(this._menuUrl)
                    .map((response : Response) => response.json());
    }
}