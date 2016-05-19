function Generator2D(x1, y1, height, width) {
    this.genererPoint2DGaussien = function(Vx, Mx, Vy, My) {
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
};

function comp(p1, p2) {
    if(p1.y < p2.y) {
        return -1;
    }
    return 1;
};

function produitVectoriel(p1, p2, p3) {
    return (p2.x-p1.x)*(p3.y-p1.y)-(p2.y-p1.y)*(p3.x-p1.x);
}

function genererForet(context, gen, cx, cy, texture) {
    var nb = 500*Math.random() + 50;
    var vx = 2000*Math.random() + 5000;
    var vy = 2000*Math.random() + 5000;
    var imgWidth = 50 / 2;
    var imgHeight = 53 / 2;
    
    var points = [];
    var nodes = [];
    for(var i = 0; i < nb; i++) {
        points.push(gen.genererPoint2DGaussien(vx, cx, vy, cy));
    }
    points.sort(comp);
    
    context.beginPath();
    for(var i = 0; i < points.length; i++) {
        var coefAgrandissement = Math.random() + 0.7;
        var width = coefAgrandissement * imgWidth;
        var height = coefAgrandissement * imgHeight;
        
        context.drawImage(texture, points[i].x, points[i].y, width, height);
        nodes.push({x: points[i].x, y: points[i].y});
        nodes.push({x: points[i].x + width, y: points[i].y});
        nodes.push({x: points[i].x, y: points[i].y + height});
        nodes.push({x: points[i].x + width, y: points[i].y + height});
    }
    
    return nodes;
};

// Calcule l'enveloppe convexe d'un ensemble de points par la méthode du parcours de Graham.
function calculerEnveloppeConvexe(points) {
    
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
        var pv = produitVectoriel(p1, p2, p3);
        if(pv > 0) {
            enveloppe.splice(j+1, 1);
            j--;
        } else {
            j++;
        }
    }
    
    return enveloppe;
};

function afficherDebug(points, context) {
    context.fillStyle = "red";
    context.font = "15px Comic Sans MS";
    context.lineWidth = 2;
    for(var i = 0; i < points.length; i++) { 
        context.moveTo(points[i].x, points[i].y);
        context.arc(points[i].x, points[i].y, 1,0,2*Math.PI);
        context.fillText(i+1, points[i].x, points[i].y);
        
        context.moveTo(points[0].x, points[0].y);
        context.lineTo(points[i].x, points[i].y);
        
    }
    context.stroke();
}

function afficherEnveloppeConvexe(enveloppe, context) {
    context.beginPath();
    context.strokeStyle = '#003300';
    context.moveTo(enveloppe[0].x, enveloppe[0].y);
    for(var i = 1; i < enveloppe.length; i++) {
        context.lineTo(enveloppe[i].x, enveloppe[i].y);
        context.stroke();
    }
    context.lineTo(enveloppe[0].x, enveloppe[0].y);
    context.stroke();
    context.closePath();
    
    context.beginPath();
    context.strokeStyle = '#FF0000';
    context.arc(enveloppe[0].x, enveloppe[0].y, 1,0,2*Math.PI);
    context.stroke();
    context.closePath();
}

window.onload = function name(params) {
    /*var canvas = document.getElementById("myCanvas");
    canvas.width = canvas.parentElement.clientWidth;
    
    var context = canvas.getContext("2d");
    context.lineWidth = 5;
    
    var gen = new Generator2D(canvas.clientLeft, canvas.clientTop, canvas.clientWidth, canvas.clientHeight);
    
    var arbre = new Image();
    arbre.src = 'app/arbre.png';
    arbre.onload = function() {
        canvas.onclick = function(event) {
            var cx = event.clientX;
            var cy = event.clientY;
            var points = genererForet(context, gen, cx, cy, arbre);
            
            var enveloppe = calculerEnveloppeConvexe(points);
            
            // afficherEnveloppeConvexe(enveloppe, context);
        }
    };
    
    var currentScale = 1;
    canvas.addEventListener("mousewheel", function(event) {
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = null;
        if(event.wheelDelta > 0) {
            context.scale(currentScale + 0.2, currentScale + 0.2);
        } else if(event.wheelDelta < 0) {
            context.scale(currentScale - 0.2, currentScale - 0.2);
        }
        context.strokeRect(canvas.clientLeft, canvas.clientTop, canvas.clientWidth, canvas.clientHeight);
        context.closePath();
    }, false);*/
};