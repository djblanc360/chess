import { ChessPiece } from '../types/piece'
import { Color } from '../types/board'

const ChessSet = {
    Pawn: { 
      type: ChessPiece.Pawn, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: 'assets/pieces/pawn_w.png',
        [Color.Black]: 'assets/pieces/pawn_b.png',
      },
    },
    Rook: { 
      type: ChessPiece.Rook, color: Color.White, hasMoved: false, isCaptured: false ,
      image: {
        [Color.White]: 'assets/pieces/rook_w.png',
        [Color.Black]: 'assets/pieces/rook_b.png',
      },
    },
    Knight: { 
      type: ChessPiece.Knight, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: 'assets/pieces/knight_w.png',
        [Color.Black]: 'assets/pieces/knight_b.png',
      },
    },
    Bishop: { 
      type: ChessPiece.Bishop, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: 'assets/pieces/bishop_w.png',
        [Color.Black]: 'assets/pieces/bishop_b.png',
      },
    },
    Queen: { 
      type: ChessPiece.Queen, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: 'assets/pieces/queen_w.png',
        [Color.Black]: 'assets/pieces/queen_b.png',
      }, 
    },
    King: { 
      type: ChessPiece.King, color: Color.White, hasMoved: false, isCaptured: false,
      image: {
        [Color.White]: 'assets/pieces/king_w.png',
        [Color.Black]: 'assets/pieces/king_b.png',
      },
    }
  };

export default ChessSet;