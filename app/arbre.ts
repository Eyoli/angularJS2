import {ArbreModele} from './arbre.modele';

export class Arbre {
  public tailleMax: number;
  public taille: number;
  public age: number;
  public ageMax: number;
  public ageDernierePortee: number;
  public intervalleFecondation: number;
    
  constructor(
    public centreX: number,
    public centreY: number,
    public modele: ArbreModele) {  
        this.age = 0;
        this.ageMax = 300 + 100 * Math.random();
        this.taille = 0.25;
        this.tailleMax = 0.75 + Math.random()*1.5;
        this.ageDernierePortee = 0;
        this.intervalleFecondation = 90 + 100 * Math.random();
    }
}