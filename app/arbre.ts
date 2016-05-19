export class Arbre {
  public tailleMax: number;
  public taille: number;
  public age: number;
  public ageDernierePortee: number;
  public intervalleFecondation: number;
    
  constructor(
    public centreX: number,
    public centreY: number) {  
        this.age = 0;
        this.taille = 0.25;
        this.tailleMax = 0.75 + Math.random()*1.5;
        this.ageDernierePortee = 0;
        this.intervalleFecondation = 50 + 100 * Math.random();
    }
}