import { Piece, Move } from "./piece";

export enum Color {
	Black,
	White
}


export interface Board {
	tiles: (Piece | null)[][]; // 2D array, null if tile is empty
}

export interface GameState {
	board: Board;
	currentTurn: Color;
	moveHistory: Move[];
	winner: Color | null; // if winner exists, store the color
}
