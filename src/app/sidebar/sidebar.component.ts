import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
var mda:any = {
   misc: {
       movingTab: '<div class="sidebar-moving-tab"/>',
       isChild: false,
       sidebarMenuActive: ''
   }
};

var sidebarTimer;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    ngOnInit() {
        // $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);

    }


}
