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
	hasMoved: boolean; // for things like castling or pawn's first move
	isCaptured: boolean; // track if piece has been captured
	image: {
		[Color.White]: string;
		[Color.Black]: string;
	};
}


export interface Move {
	from: [number, number];
	to: [number, number];
	piece: Piece; // piece that moved
	capturedPiece?: Piece; // if piece was captured
}

