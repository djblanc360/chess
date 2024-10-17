import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Piece } from '../types/piece';

import InitialBoard from '@store/init_board'

interface PieceState {
  pieces: (Piece | null)[][];
}

const initialState: PieceState = {
  pieces: new InitialBoard().tiles
};
const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {

    }
})

export default boardSlice.reducer;