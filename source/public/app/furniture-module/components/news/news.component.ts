import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';

import { News } from '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'news',
    templateUrl : 'news.component.html',
    styleUrls   : [ 'news.component.css' ]
})
export class NewsComponent implements OnInit {
    news   : News;
    newsId : number;

    constructor(private router : Router, private activatedRoute : ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.params.forEach((param : Params) => {
            this.newsId = +param['id'];
        });
    }

    goToNewsList() {
        this.router.navigate(['/news-list']);
    }
}