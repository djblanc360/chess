import { useAppSelector } from '@store/hooks'
import { boardLayout} from '@store/boardSlice'

const Board = () => {
    const pieces = useAppSelector(boardLayout);
    console.log('pieces', pieces)
    return (
        <div className='grid grid-rows-8 grid-cols-8 gap-[1px] w-[448px] h-[448px] border-2 border-black'>
            {pieces.map((row, i) => (
                row.map((piece, j) => (
                    <div
                        key={`${i}-${j}`}
                        className={`
                            w-14 h-14 ${(i + j) % 2 === 0  ? 'bg-light' : 'bg-dark'}
                        `}
                    >
                        {
                            piece && (
                                <img
                                    src={piece.image[piece.color]}
                                    alt={`${piece.type} ${piece.color}`}
                                />
                            )
                        }
                    </div>
                ))
            ))}
        </div>
    )
}

export default Board;