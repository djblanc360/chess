import { Color } from "./board";

export enum ChessPiece {
	Pawn,
	Rook,
	Knight,
	Bishop,
	Queen,
	King
}

export interface Piece {
	type: ChessPiece;
	color: Color;
	position?: [number, number]; // coordinates on the board [row, column]
	hasMoved: boolean; // useful for things like castling or pawn's first move
	isCaptured: boolean; // to track if the piece has been captured
}

export interface Move {
	from: [number, number]; // initial position of the piece
	to: [number, number]; // new position of the piece
	piece: Piece; // the piece that moved
	capturedPiece?: Piece; // optional, if a piece was captured
}
