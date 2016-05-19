import { Component } from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {ViewChild} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

import {Generator2DService} from './generator.service.ts'
import {MathService} from './math.service.ts'

import {CanvasComponent} from './canvas.component';
import {CroissanceComponent} from './croissance.component';

@Component({
  selector: 'menu',
  templateUrl: 'app/menu.component.html',
  providers: [ROUTER_PROVIDERS, Generator2DService, MathService],
  directives: [ROUTER_DIRECTIVES, CanvasComponent, CroissanceComponent]
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
export class MenuComponent {    
    @ViewChild("panneaux") panneaux;
    @ViewChild("menu") menu;
    
    constructor(private _generator2DService: Generator2DService, 
                private _mathService: MathService) { 
    }
    
    afficherPanneau(numero) {
        for(var i = 0; i < this.panneaux.nativeElement.children.length; i++) {
            this.panneaux.nativeElement.children[i].style.display = "none";
            this.menu.nativeElement.children[i].className = "";
        }
        this.panneaux.nativeElement.children[numero].style.display = "initial";
        this.menu.nativeElement.children[numero].className = "active";
    }
}