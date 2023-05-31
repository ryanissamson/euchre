import * as React from 'react';
import {Game} from './components/Game';
import {useState} from "react";

// A basic, single player Euchre card game built with React and TypeScript.
function App() {
    // state to keep track of the game mode
    const [mode, setMode] = useState<'single' | 'multi' | 'none'>('none');

    // function to handle mode selection
    const handleModeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setMode(value as 'single' | 'multi');
    };

    // function to handle mode reset
    const handleModeReset = () => {
        setMode('none');
    };

    return (
        <div className="App">
            <h1>Euchre Card Game</h1>
            {mode === 'none' ? (
                <div className="mode-select">
                    <p>Select a game mode:</p>
                    <button value="single" onClick={handleModeSelect}>
                        Single Player
                    </button>
                    <button value="multi" onClick={handleModeSelect}>
                        Multiplayer
                    </button>
                </div>
            ) : (
                <div className="game-container">
                    <Game mode={mode} onReset={handleModeReset} />
                </div>
            )}
        </div>
    );
}

export default App;