import { Color, Board } from '../types/board'
import { Piece } from '../types/piece'

import ChessSet from '@services/chess_pieces'

const ROWS: number = 8;
const COLS: number = 8;

const order: Piece[] = [
    ChessSet.Rook,
    ChessSet.Knight,
    ChessSet.Bishop,
    ChessSet.Queen,
    ChessSet.King,
    ChessSet.Bishop,
    ChessSet.Knight,
    ChessSet.Rook
]

export default class InitialBoard implements Board {
    tiles: (Piece | null)[][]

    constructor() {
        this.tiles = this.build();
    }


    build(): (Piece | null)[][] {
        const board: (Piece | null)[][] = new Array(ROWS);

        for (let i=0;i<ROWS;i++) {

            switch (i) {
                case 0:
                    // white major pieces
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            ...order[j],
                            color: Color.White,
                            position: [i, j], // tuple
                            hasMoved: false,
                            isCaptured: false
                        }
                    }
                    break;

                case 1:
                    // white pawns
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            type: ChessSet.Pawn.type,
                            color: Color.White,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false
                        };
                    }
                    break;

                case 6:
                    // black pawns
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            type: ChessSet.Pawn.type,
                            color: Color.Black,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false
                        };
                    }
                    break;
                
                case 7:
                    // black major pieces
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            ...order[j],
                            color: Color.Black,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false
                        }
                    }
                    break;

                default:
                    // empty tile
                    board[i] = new Array(COLS).fill(null);
                    break
            }

        }

        return board;
    }

}