import { ChessPiece } from '../types/piece'
import { Color } from '../types/board'

const ChessSet = {
    Pawn: { 
      type: ChessPiece.Pawn, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: '/pieces/pawn_w.png',
        [Color.Black]: '/pieces/pawn_b.png',
      },
    },
    Rook: { 
      type: ChessPiece.Rook, color: Color.White, hasMoved: false, isCaptured: false ,
      image: {
        [Color.White]: '/pieces/rook_w.png',
        [Color.Black]: '/pieces/rook_b.png',
      },
    },
    Knight: { 
      type: ChessPiece.Knight, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: '/pieces/knight_w.png',
        [Color.Black]: '/pieces/knight_b.png',
      },
    },
    Bishop: { 
      type: ChessPiece.Bishop, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: '/pieces/bishop_w.png',
        [Color.Black]: '/pieces/bishop_b.png',
      },
    },
    Queen: { 
      type: ChessPiece.Queen, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: '/pieces/queen_w.png',
        [Color.Black]: '/pieces/queen_b.png',
      }, 
    },
    King: { 
      type: ChessPiece.King, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: '/pieces/king_w.png',
        [Color.Black]: '/pieces/king_b.png',
      },
    }
  };

export default ChessSet;