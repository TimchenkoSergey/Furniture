import {
    Component,
    OnInit
} from '@angular/core';

import { News } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'news-list',
    templateUrl : 'news-list.component.html',
    styleUrls   : [ 'news-list.component.css' ]
})
export class NewsListComponent implements OnInit {
    newsList : News[];

    constructor() {

    }

    ngOnInit() {

    }
}