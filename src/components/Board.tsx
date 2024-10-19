import { useAppSelector } from '@store/hooks'
import { boardPieces} from '@store/boardSlice'

import ChessPiece from '@components/ChessPiece'

const Board = () => {
    const pieces = useAppSelector(boardPieces);
    console.log('pieces', pieces)
    return (
        <div className='grid grid-rows-8 grid-cols-8 gap-[1px] w-[448px] h-[448px] border-2 border-black'>
            {pieces.map((row, i) => (
                row.map((piece, j) => (
                    <div
                        key={`${i}-${j}`}
                        className={`
                            w-[60px] h-[60px] ${(i + j) % 2 === 0  ? 'bg-light' : 'bg-dark'}
                        `}
                    >
                        {
                            piece && (
                                <ChessPiece piece={piece} />
                            )
                        }
                    </div>
                ))
            ))}
        </div>
    )
}

export default Board;