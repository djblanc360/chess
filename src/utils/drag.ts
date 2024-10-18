
export interface Position {
    x: number;
    y: number;
  }
  
  export interface Move {
    startX: number;
    startY: number;
    currX: number;
    currY: number;
  }
  
  export default class Drag {
    position: Position;
    piece: HTMLElement;
    startX: number = 0;
    startY: number = 0;
    currX: number = 0;
    currY: number = 0;
    
    constructor(position: Position, piece: HTMLElement) {
        this.position = position;
        this.piece = piece;
    
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
    
        this.piece.addEventListener('mousedown', this.mouseDown);
    }

    mouseDown(e: MouseEvent) {
        this.startX = e.clientX;
        this.startY = e.clientY;

        // immediate feedback
        this.currX = this.startX - this.piece.offsetLeft;
        this.currY = this.startY - this.piece.offsetTop;
        this.piece.style.transform = `translate(${this.currX}px, ${this.currY}px)`;

        // Attach listeners for movement and dropping
        document.addEventListener('mousemove', this.mouseMove);
        document.addEventListener('mouseup', this.mouseUp);
    }

    mouseMove(e: MouseEvent) {
        this.currX = e.clientX - this.startX;
        this.currY = e.clientY - this.startY;

        this.piece.style.transform = `translate(${this.currX}px, ${this.currY}px)`;
    }

    mouseUp(e: MouseEvent) {
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup', this.mouseUp);

        const finalX = e.clientX;
        const finalY = e.clientY;

        // return final position for potential logic
        return { finalX, finalY };
    }
}