import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Piece } from '../types/piece';
import { Position } from '@utils/drag'

import InitialBoard from '@store/init_board'

interface PieceState {
  pieces: (Piece | null)[][]; // board
  selectedPiece: Piece | null;
  dragPosition: Position | null;
}

interface PieceMove {
    from: [number, number];
    to: [number, number];
}

const initialState: PieceState = {
    pieces: new InitialBoard().tiles,
    selectedPiece: null,
    dragPosition: null,
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        selectPiece: (state, action: PayloadAction<{ position: [number, number]}>) => {
            const { position } = action.payload;
            const selectedPiece = state.pieces[position[0]][position[1]];

            if (selectedPiece) {
                state.selectedPiece = selectedPiece;
                state.dragPosition = { x: 0, y: 0 };
            }
        },

        dragPiece: (state, action: PayloadAction<Position>) => {
            if (state.selectedPiece) {
                state.dragPosition = action.payload;
            }
        },

        dropPiece: (state, action: PayloadAction<PieceMove>) => {
            const { from, to } = action.payload;
            const piece = state.pieces[from[0]][from[1]];

            if (piece) {
                state.pieces[to[0]][to[1]] = {
                    ...piece,
                    position: to,
                    hasMoved: true,
                };
                state.pieces[from[0]][from[1]] = null;
                state.selectedPiece = null;
                state.dragPosition = null;
            }
        },

        reset: (state: PieceState) => {
            state.pieces = new InitialBoard().tiles;
            state.selectedPiece = null;
            state.dragPosition = null;
        },
    }
})

export const { selectPiece, dragPiece, dropPiece, reset } = boardSlice.actions;

export const boardLayout = (state: { board: PieceState}) => state.board.pieces;

export default boardSlice.reducer;