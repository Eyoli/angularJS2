import {Component} from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {ViewChild} from 'angular2/core';

import {DrawerService} from './drawer.service.ts'
import {Generator2DService} from './generator.service.ts'
import {MathService} from './math.service.ts'

import {OptionsComponent} from './options.component';

@Component({
    selector: 'my-canvas',
    templateUrl: 'app/canvas.component.html',
    providers: [DrawerService],
    directives: [OptionsComponent]
})
export class CanvasComponent implements AfterViewInit {
    @ViewChild("myCanvas") myCanvas;
    @ViewChild("optionsForm") optionsForm: OptionsComponent;
    
    arbre: HTMLImageElement;
    imgWidth: number;
    imgHeight: number;
    
    constructor(private _generator2DService: Generator2DService, 
                private _mathService: MathService,
                private _drawerService: DrawerService) { 
        this.arbre = new Image();
        this.arbre.src = 'app/arbre.png';
    }
    
    ngAfterViewInit() {
        var self = this;
        var canvas = self.myCanvas.nativeElement;
        canvas.width = canvas.parentElement.clientWidth;
        var context = canvas.getContext("2d");
        this.imgWidth = 50 / 2;
        this.imgHeight = 53 / 2;
        this._drawerService.init(context, canvas.width, canvas.height);
    }
    
    genererForet(event:any) {
        var options = this.optionsForm.getOptions();
            var params = {
                nb: options.nb,
                mx: event.clientX,
                my: event.clientY,
                vx: options.ecartTypeX*options.ecartTypeX,
                vy: options.ecartTypeY*options.ecartTypeY,
                textureWidth: this.imgWidth,
                textureHeight: this.imgHeight
            }
            
            var self = this;
            this._generator2DService.genererForet(params) 
                .then(function(result) {
                    var paramsAffichage = {
                        textureWidth: self.imgWidth,
                        textureHeight: self.imgHeight,
                        texture: self.arbre,
                        coefAgrandissementMin: options.coefAgrandissementMin,
                        coefAgrandissementMax: options.coefAgrandissementMax
                    };
                    self._drawerService.dessinerForet(result.centers, paramsAffichage);
                    
                    self._mathService.calculerEnveloppeConvexe(result.nodes)
                    .then(function(enveloppe) {
                        self._drawerService.afficherEnveloppeConvexe(enveloppe);
                    });
                });
       }
}

