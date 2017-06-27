import {
    Component,
    OnInit
} from '@angular/core';
import {
    MenuService,
    Menu
} from  '../../index';

@Component({
    moduleId    : module.id,
    selector    : 'menu',
    templateUrl : 'menu.component.html',
    styleUrls   : [ 'menu.component.css' ]
})
export class MenuComponent implements OnInit {
    menuItems : Menu[];
    menuOpen  : boolean = false;

    constructor(private menuService : MenuService) {  }

    ngOnInit() {
        this.menuService.getMenuItems()
                        .subscribe(
                            menuItems => this.menuItems = menuItems,
                            err => console.log(err)
                        );
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}