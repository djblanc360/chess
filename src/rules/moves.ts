import { ChessPiece, Piece, Color } from '../types/piece';

// determine valid moves for each piece
export const getValidMoves = (piece: Piece, board: (Piece | null)[][]) => {
    switch (piece.type) {
        case ChessPiece.Pawn:
            return pawnMoves(piece, board);
        case ChessPiece.Rook:
            return rookMoves(piece, board);
        case ChessPiece.Knight:
            return knightMoves(piece, board);
        case ChessPiece.Bishop:
            return bishopMoves(piece, board);
        case ChessPiece.Queen:
            return queenMoves(piece, board);
        case ChessPiece.King:
            return kingMoves(piece, board);
        default:
            return [];
    }
}

const getPawnMoves = (piece: Piece, board: (Piece | null)[][]): [number, number][] => {}