import { ChessPiece } from '../types/piece'
import { Color } from '../types/board'

const ChessSet = {
    Pawn: { type: ChessPiece.Pawn, color: Color.White, hasMoved: false, isCaptured: false },
    Rook: { type: ChessPiece.Rook, color: Color.White, hasMoved: false, isCaptured: false },
    Knight: { type: ChessPiece.Knight, color: Color.White, hasMoved: false, isCaptured: false },
    Bishop: { type: ChessPiece.Bishop, color: Color.White, hasMoved: false, isCaptured: false },
    Queen: { type: ChessPiece.Queen, color: Color.White, hasMoved: false, isCaptured: false },
    King: { type: ChessPiece.King, color: Color.White, hasMoved: false, isCaptured: false }
  };

export default ChessSet;