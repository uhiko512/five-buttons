
export class GameScreen {
    public readonly canvas: HTMLCanvasElement;

    constructor() {
        this.canvas = document.getElementById("app") as HTMLCanvasElement;
        this.resize();
    }

    public resize() {
        this.canvas.style.width = window.innerWidth + "px";
        setTimeout(() => this.canvas.style.height = window.innerHeight + "px", 0);
    };
}