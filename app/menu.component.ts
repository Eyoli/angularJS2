import { Component } from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {ViewChild} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from 'angular2/router';

import {DataService} from './data.service.ts'
import {MathService} from './math.service.ts'
import {Generator2DService} from './generator.service.ts'

import {CanvasComponent} from './canvas.component';
import {CroissanceComponent} from './croissance.component';
import {ArbreFormulaire} from './arbre.form';

@Component({
  selector: 'menu',
  templateUrl: 'app/menu.component.html',
  providers: [ROUTER_PROVIDERS, RouteData, DataService,  MathService, Generator2DService],
  directives: [ROUTER_DIRECTIVES, CanvasComponent, ArbreFormulaire, CroissanceComponent]
})
@RouteConfig([
  {
    path: '/foret',
    name: 'Foret',
    component: CanvasComponent
  },
  {
    path: '/croissance/canvas',
    name: 'Canvas',
    component: CroissanceComponent,
    useAsDefault: true
  },
  {
    path: '/croissance/modeles',
    name: 'Modeles',
    component: ArbreFormulaire
  }
])
export class MenuComponent implements AfterViewInit {
    routes: {};
    
    constructor(private _routerService: RouteData,
                private _dataService: DataService) {
        this.routes = _routerService.data;
    }
    
    ngAfterViewInit() {
    }
}