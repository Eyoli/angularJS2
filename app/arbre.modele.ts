export class ArbreModele {
    public texture: HTMLImageElement

  constructor(
    public nom: string,
    public tailleMin: number,
    public tailleMax: number,
    public intervalleReproductionMin: number,
    public intervalleReproductionMax: number,
    public ageMax: number,
    textureSrc: string,
    public width: number,
    public height: number) {
        this.texture = new Image();
        this.texture.src = textureSrc;
    }
}