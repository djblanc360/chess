import React, { useRef } from 'react'

import { Piece } from '../types/piece'
import Drag from '@utils/drag'

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { 
    selectPiece, dragPiece, dropPiece, boardPieces, selectedPiece, dragPosition
} from '@store/boardSlice'

const ChessPiece = ({piece}: {piece: Piece}) => {
    console.log('piece')
    
    const dispatch = useAppDispatch();
    const pieceElement = useRef<HTMLDivElement | null>(null);


    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();

        console.log('onmouse down', pieceElement)
        
        if (pieceElement.current) {
            const drag = new Drag({ x: 0, y: 0 }, pieceElement.current);
            drag.mouseDown(e as unknown as MouseEvent);

            // store selected piece in state
            const position = piece.position as [number, number]
            dispatch(selectPiece({ position }))

            // tie  mouse up to this piece
            const handleMouseMove = (e: MouseEvent) => {
                e.preventDefault()
                console.log('onmouse move', pieceElement)
                drag.mouseMove(e);
            }


            const handleMouseUp = (e: MouseEvent) => {
                e.preventDefault();
                console.log('onmouse up', pieceElement);

                drag.mouseUp(e);

                const finalX = e.clientX;
                const finalY = e.clientY;

                
                // const to = [Math.floor(finalY / 60), Math.floor(finalX / 60)] as [number, number];

                const toRow = Math.floor(finalY / 60);
                const toCol = Math.floor(finalX / 60);

                // is target within board boundaries (0 to 7)
                if (toRow >= 0 && toRow <= 7 && toCol >= 0 && toCol <= 7) {
                    const from = piece.position as [number, number];
                    const to = [toRow, toCol] as [number, number];

                    // update board of piece placement
                    dispatch(dropPiece({ from, to }));
                } else {
                    console.log("invalid drop=n");
                    //  reset to original position
                }

                
                pieceElement.current!.removeEventListener('mousemove', handleMouseMove);
                pieceElement.current!.removeEventListener('mouseup', handleMouseUp);
            }
            pieceElement.current.addEventListener('mousemove', handleMouseMove);
            pieceElement.current.addEventListener('mouseup', handleMouseUp);
        }
    }

    return (
        <div
            ref={pieceElement}
            onMouseDown={handleMouseDown}
            className='cursor-pointer relative'
        >
            <img
                src={piece.image[piece.color]}
                alt={`${piece.type} ${piece.color}`}
            />
        </div>
    )
}

export default ChessPiece;