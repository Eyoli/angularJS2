import {Injectable} from 'angular2/core';

import { ArbreModele }    from './arbre.modele';

@Injectable()
export class DataService {
    arbresModeles: ArbreModele[];
    
    constructor() {
        this.arbresModeles = [];
        this.arbresModeles.push(new ArbreModele("Modèle 1", 0.25, 2, 100, 200, 400, 'app/arbre1.png', 50/2, 53/2));
        this.arbresModeles.push(new ArbreModele("Modèle 2", 0.25, 2, 100, 200, 400, 'app/arbre2.png', 25, 25));
        this.arbresModeles.push(new ArbreModele("Modèle 3", 0.25, 2, 100, 200, 400, 'app/arbre3.png', 25, 25));
    }
    
    getModeles() {
        return Promise.resolve(this.arbresModeles);
    }
}