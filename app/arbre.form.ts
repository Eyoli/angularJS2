import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import {DataService} from './data.service.ts'

import { ArbreModele }    from './arbre.modele';

@Component({
  selector: 'optionsCroissance',
  templateUrl: 'app/arbre.form.html'
})
export class ArbreFormulaire {
    arbresModeles: ArbreModele[];
    
    constructor(private _dataService: DataService) {
        _dataService.getModeles()
            .then(result => this.arbresModeles = result);
    }
}