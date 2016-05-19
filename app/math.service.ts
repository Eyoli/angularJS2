import {Injectable} from 'angular2/core';

@Injectable()
export class MathService {
    produitVectoriel(p1, p2, p3) {
        return (p2.x-p1.x)*(p3.y-p1.y)-(p2.y-p1.y)*(p3.x-p1.x);
    }

    calculerEnveloppeConvexe(points) {
        var indiceOrdonneeMin = 0;
        
        // Détermination du point d'ordonnée minimale P (O(N))
        for(var i = 0; i < points.length; i++) {
            
            if(points[indiceOrdonneeMin].y > points[i].y) {
                indiceOrdonneeMin = i;
            } else if(points[indiceOrdonneeMin].y === points[i].y && points[indiceOrdonneeMin].x > points[i].x) {
                indiceOrdonneeMin = i;
            }
        }
        
        var P = points[indiceOrdonneeMin];
        points.splice(indiceOrdonneeMin, 1);
        
        // Tri suivant l'angle entre chaque point et P (O(Nlog(N)))
        points.sort(function(p1, p2) {
            var d1 = Math.sqrt((p1.x - P.x)*(p1.x - P.x) + (p1.y - P.y)*(p1.y - P.y));
            var d2 = Math.sqrt((p2.x - P.x)*(p2.x - P.x) + (p2.y - P.y)*(p2.y - P.y));
            var cos1 = (p1.x - P.x) / d1;
            var cos2 = (p2.x - P.x) / d2;
            if(cos1 > cos2) {
                return 1;
            } else {
                return -1;
            }
        });
        points.unshift(P);
        
        var enveloppe = [];
        for(var i = 0; i < points.length; i++) {
            enveloppe.push(points[i]);
            enveloppe[i].num = i+1;
        }
        
        // Détermination de l'enveloppe convexe
        var j = 0;
        while(j < enveloppe.length-2) {
            var p1 = enveloppe[j];
            var p2 = enveloppe[j+1];
            var p3 = enveloppe[j+2];
            var pv = this.produitVectoriel(p1, p2, p3);
            if(pv > 0) {
                enveloppe.splice(j+1, 1);
                j--;
            } else {
                j++;
            }
        }
        
        return Promise.resolve(enveloppe);
    }
}