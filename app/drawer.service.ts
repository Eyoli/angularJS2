import {Injectable} from 'angular2/core';

@Injectable()
export class DrawerService {
    _context: CanvasRenderingContext2D;
    _width: any;
    _height: any;
    
    init(context, width, height) {
        this._context = context;
        this._width = width;
        this._height = height;
    }
    
    dessinerForet(centers, params) {
        for(var i = 0; i < centers.length; i++) {
            var coefAgrandissement = Math.random() * (params.coefAgrandissementMax - params.coefAgrandissementMin) + params.coefAgrandissementMin;
            var width = coefAgrandissement * params.textureWidth;
            var height = coefAgrandissement * params.textureHeight;
            this._context.drawImage(params.texture, centers[i].x - (width / 2), 
                                    centers[i].y - (height / 2), 
                                    width, 
                                    height);
        }
    }
    
    dessinerArbre(racineX, racineY, width, height, texture) {
        this._context.drawImage(texture, 
                                racineX - (width / 2), 
                                racineY - height, 
                                width, 
                                height);
    }
    
    afficherEnveloppeConvexe(enveloppe) {
        this._context.beginPath();
        this._context.strokeStyle = '#003300';
        this._context.moveTo(enveloppe[0].x, enveloppe[0].y);
        for(var i = 1; i < enveloppe.length; i++) {
            this._context.lineTo(enveloppe[i].x, enveloppe[i].y);
            this._context.stroke();
        }
        this._context.lineTo(enveloppe[0].x, enveloppe[0].y);
        this._context.stroke();
        this._context.closePath();
        
        this._context.beginPath();
        this._context.strokeStyle = '#FF0000';
        this._context.arc(enveloppe[0].x, enveloppe[0].y, 1,0,2*Math.PI);
        this._context.stroke();
        this._context.closePath();
    }
    
    getNextFrame(callback) {
        var fonction = window.requestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
        fonction(callback);
    }
    
    reset() {
        this._context.clearRect(0, 0, this._width, this._height);
    }
}