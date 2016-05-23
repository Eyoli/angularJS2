export class ArbreModele {
    public texture: HTMLImageElement

  constructor(
    public nom: string,
    public tailleMax: number,
    public ageMax: number,
    public intervalleFecondation: number,
    textureSrc: string,
    public width: number,
    public height: number) {
        this.texture = new Image();
        this.texture.src = textureSrc;
    }
}