import { Color } from "./board";

export interface Player {
	color: Color;
	turn: boolean; // whether it's this player's turn
	pieces: number; // number of pieces left
}
