import { Board, Color } from '../types/board'
import type { Piece } from '../types/piece'

import ChessSet from '@services/chess_pieces'

type ROW = number;
type COL = number;
const ROWS: ROW = 8;
const COLS: COL = 8;

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
        console.log('board', board)

        for (let i=0;i<ROWS;i++) {
            board[i] = new Array(COLS);

            switch (i) {
                case 0:
                    // black major pieces
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            ...order[j],
                            color: Color.Black,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false,
                            image: order[j].image
                        }
                    }
                    break;


                case 1:
                    // black pawns
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            type: ChessSet.Pawn.type,
                            color: Color.Black,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false,
                            image: ChessSet.Pawn.image
                        };
                    }
                    break;

                case 6:
                    // white pawns
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            type: ChessSet.Pawn.type,
                            color: Color.White,
                            position: [i, j],
                            hasMoved: false,
                            isCaptured: false,
                            image: ChessSet.Pawn.image
                        };
                    }
                    break;
                
                case 7:
                    // white major pieces
                    for (let j=0;j<COLS;j++) {
                        board[i][j] = {
                            ...order[j],
                            color: Color.White,
                            position: [i, j], // tuple
                            hasMoved: false,
                            isCaptured: false,
                            image: order[j].image
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