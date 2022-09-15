import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import './Game.scss';

const Game = () => {
    const [isXTurn, setIsXTurn] = useState();
    const [shouldReset, setShouldReset] = useState(false);

    const setPlayerTurn = (value) => {
        setIsXTurn(value === "X" ? true : false);
    }

    const resetBoard = () => {
        setShouldReset(true);
    }

    useEffect(() => {
        if(shouldReset) {
            setShouldReset(false);
        }
    }, [shouldReset])

    return (
        <div className="game-container">
            <div className="current-turn">
                Player's turn: {isXTurn ? "X" : "O"}
            </div>
            <div className="game">
                <div className="row top">
                    <div className="cell left">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell center">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell right">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                </div>
                <div className="row center">
                    <div className="cell left">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell center">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell right">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                </div>
                <div className="row bottom">
                    <div className="cell left">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell center">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                    <div className="cell right">
                        <Cell isXTurn={isXTurn} setPlayerTurn={setPlayerTurn} reset={shouldReset} />
                    </div>
                </div>
            </div>
            <div className="reset-button">
                <button className="reset" onClick={resetBoard}>Reset</button>
            </div>
        </div>
    )
}

export default Game;