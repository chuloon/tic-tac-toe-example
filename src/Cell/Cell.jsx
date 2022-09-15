import { useEffect, useState } from "react";
import './Cell.scss';

const Cell = ({ isXTurn, setPlayerTurn, reset }) => {
    const [isPlayed, setIsPlayed] = useState(false);
    const [isX, setIsX] = useState(false);

    const displayMark = () => {
        if(isPlayed) {
            if(isX) {
                return "X"
            }
            else {
                return "O"
            }
        }
        
        return ""
    }

    const cellClick = () => {
        setIsPlayed(true);
        if(isXTurn) {
            setIsX(true);
            setPlayerTurn("O");
        }
        else {
            setPlayerTurn("X");
        }
    }

    useEffect(() => {
        if(reset) {
            setIsPlayed(false);
            setIsX(false);
        }
    }, [reset])

    return (
        <div className="cell" onClick={cellClick}>
            { displayMark() }
        </div>
    )
}

export default Cell;