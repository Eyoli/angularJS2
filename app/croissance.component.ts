import {Component} from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {ViewChild} from 'angular2/core';

import {Generator2DService} from './generator.service.ts'
import {MathService} from './math.service.ts'
import {DrawerService} from './drawer.service.ts'
import {DataService} from './data.service.ts'

import {OptionsCroissanceComponent} from './options.croissance.component';

import {Arbre} from './arbre';
import {ArbreModele} from './arbre.modele';

@Component({
    templateUrl: 'app/croissance.component.html',
    providers: [DrawerService],
    directives: [OptionsCroissanceComponent]
})
export class CroissanceComponent implements AfterViewInit {
    @ViewChild("canvasCroissance") canvasCroissance;
    
    arbresModeles: ArbreModele[];
    arbres: Arbre[];
    imgWidth: number;
    imgHeight: number;
    intervalleFecondation: number;
    nbArbresMax: number;
    lastArbresNb: number;
    dispersion: number;
    
    constructor(private _generator2DService: Generator2DService, 
                private _mathService: MathService,
                private _drawerService: DrawerService,
                private _dataService: DataService) {
        
        this._dataService.getModeles()
            .then(result => this.arbresModeles = result);
    }
    
    ngAfterViewInit() {
        var canvas = this.canvasCroissance.nativeElement;
        canvas.width = canvas.parentElement.clientWidth;
        var context = canvas.getContext("2d");
        this.imgWidth = 50 / 2;
        this.imgHeight = 53 / 2;
        this.nbArbresMax = 2000;
        this.dispersion = 80;
        this.arbres = [];
        this.lastArbresNb = 0;
        
        this._drawerService.init(context, canvas.width, canvas.height);
        
        this.afficher();
    }
    
    commencerForet(event) {
        this.arbres.length = 0;
        var arbre = this.creerArbre(event.offsetX, event.offsetY);
        this.insererArbre(arbre);
        var self = this;
    }
    
    faireCroitre() {
        var nouveauxArbres = [];
        
        var i = 0;
        while(i < this.arbres.length) {
            this.arbres[i].age++;
            if(this.arbres[i].taille < this.arbres[i].tailleMax) {
                this.arbres[i].taille += 0.03;
            }
            
            if(this.arbres[i].age - this.arbres[i].ageDernierePortee > this.arbres[i].intervalleFecondation
             && this.arbres.length < this.nbArbresMax) {
                var nbRejetons = Math.random();
                for(var j = 0; j < nbRejetons; j++) {
                    var point = this._generator2DService.genererPoint2DGaussien(
                        this.dispersion*this.dispersion,
                        this.arbres[i].centreX,
                        this.dispersion*this.dispersion,
                        this.arbres[i].centreY);
                        
                    var arbre = this.creerArbre(point.x, point.y);
                    nouveauxArbres.push(arbre);
                }
                this.arbres[i].ageDernierePortee = this.arbres[i].age;
            }
            
            if(this.arbres[i].age >= this.arbres[i].ageMax) {
                this.arbres.splice(i, 1);
            } else {
                i++;
            }
        }
        
        for(var i = 0; i < nouveauxArbres.length; i++) {
            this.insererArbre(nouveauxArbres[i]);
        }
    }
    
    creerArbre(x, y) {
        var idModele = Math.floor(Math.random() * (this.arbresModeles.length - 0.0000001));
        return new Arbre(x, y, this.arbresModeles[idModele]);
    }
    
    insererArbre(arbre) {
        var i = 0;
        while(this.arbres.length < i && this.arbres[i].centreY > arbre.centreY) {
            i++;
        }
        this.arbres.push(arbre);
    }
    
    afficher() {
        this._drawerService.reset();
        
        if(this.lastArbresNb !== this.arbres.length) {
            this.arbres.sort(function(a1: Arbre, a2: Arbre) {
                if(a1.centreY < a2.centreY) {
                    return -1;
                }
                return 1;
            });
            this.lastArbresNb = this.arbres.length;
        }
        
        for(var i = 0; i < this.arbres.length; i++) {
            this._drawerService.dessinerArbre(this.arbres[i].centreX,
                                              this.arbres[i].centreY,
                                              this.imgWidth * this.arbres[i].taille,
                                              this.imgHeight * this.arbres[i].taille,
                                              null);
        }
        
        var self = this;
        self._drawerService.getNextFrame(function() {
          self.faireCroitre();
          self.afficher();
        });
    }
}