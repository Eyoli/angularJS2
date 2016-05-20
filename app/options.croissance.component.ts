import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import {DrawerService} from './drawer.service.ts'

@Component({
  selector: 'optionsCroissance',
  templateUrl: 'app/options.croissance.component.html'
})
export class OptionsCroissanceComponent {
    constructor(private _drawerService: DrawerService) {
    }
    
    reset() {
        this._drawerService.reset();
    }
}