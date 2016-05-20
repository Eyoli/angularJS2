import { Component } from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {ViewChild} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from 'angular2/router';

import {Generator2DService} from './generator.service.ts'
import {MathService} from './math.service.ts'

import {CanvasComponent} from './canvas.component';
import {CroissanceComponent} from './croissance.component';

@Component({
  selector: 'menu',
  templateUrl: 'app/menu.component.html',
  providers: [ROUTER_PROVIDERS, RouteData, Generator2DService, MathService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/foret',
    name: 'Foret',
    component: CanvasComponent
  },
  {
    path: '/croissance',
    name: 'Croissance',
    component: CroissanceComponent,
    useAsDefault: true
  }
])
export class MenuComponent implements AfterViewInit {
    routes: {};
    
    constructor(private _routerService: RouteData) {
        this.routes = _routerService.data;
    }
    
    changerMenuActif(event) {
        var menuItemList = event.currentTarget.children;
        for(var i = 0; i < menuItemList.length; i++) {
            if(menuItemList[i].firstChild.className === "router-link-active") {
                menuItemList[i].className = "active";
            } else {
                menuItemList[i].className = "";
            }
        }
    }
    
    ngAfterViewInit() {
    }
}