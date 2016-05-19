import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import {DrawerService} from './drawer.service.ts'

import {Options} from './options.ts'

@Component({
  selector: 'options',
  templateUrl: 'app/options.component.html'
})
export class OptionsComponent {
    constructor(private _drawerService: DrawerService) {
    }
    
    options = new Options(1000, 200, 50, 0.50, 2);
    
    getOptions() {
        return this.options;
    }
    
    reset() {
        this._drawerService.reset();
    }
}