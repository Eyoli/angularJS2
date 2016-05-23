import {Injectable} from 'angular2/core';

import { ArbreModele }    from './arbre.modele';

@Injectable()
export class DataService {
    arbresModeles: ArbreModele[];
    
    constructor() {
        this.arbresModeles = [];
        this.arbresModeles.push(new ArbreModele("Modèle 1", 2.25, 400, 200, 'app/arbre1.png', 50/2, 53/2));
        this.arbresModeles.push(new ArbreModele("Modèle 2", 2.25, 400, 200, 'app/arbre2.png', 50/2, 53/2));
    }
    
    getModeles() {
        return Promise.resolve(this.arbresModeles);
    }
}