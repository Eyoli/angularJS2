import {Injectable} from 'angular2/core';

@Injectable()
export class Generator2DService {
    genererPoint2DGaussien(Vx, Mx, Vy, My) {
        var w = 0;
        var x = 0;
        var y = 0;
        var ecartTypeX = Math.sqrt(Vx);
        var ecartTypeY = Math.sqrt(Vy);
        
        do {
            var v1 = 2*Math.random() - 1;
            var v2 = 2*Math.random() - 1;
            var w = v1*v1 + v2*v2;
            
        } while(w >= 1);
        
        var coef = Math.sqrt(-2 * (Math.log(w) / w));

        x = ecartTypeX*(v1 * coef) + Mx;
        y = ecartTypeY*(v2 * coef) + My;
        
        return {x: x, y: y};
    }
    
    comp(p1, p2) {
        if(p1.y < p2.y) {
            return -1;
        }
        return 1;
    }
    
    genererForet(params) {
        var points = [];
        var nodes = [];
        for(var i = 0; i < params.nb; i++) {
            var point = this.genererPoint2DGaussien(params.vx, params.mx, params.vy, params.my);
            
            points.push(point);
            nodes.push({x: point.x - (params.textureWidth / 2), y: point.y - (params.textureHeight / 2)});
            nodes.push({x: point.x + (params.textureWidth / 2), y: point.y - (params.textureHeight / 2)});
            nodes.push({x: point.x - (params.textureWidth / 2), y: point.y + (params.textureHeight / 2)});
            nodes.push({x: point.x + (params.textureWidth / 2), y: point.y + (params.textureHeight / 2)});
        }
        points.sort(this.comp);
        
        return Promise.resolve({centers: points, nodes: nodes});
    }
}