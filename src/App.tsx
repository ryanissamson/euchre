// App.tsx
import React from 'react';
import {Game} from './components/Game';
import {useState, useRef} from "react";
import Dealer from './components/Dealer'; // import the Dealer component

// A basic, single player Euchre card game built with React and TypeScript.
function App() {
    // state to keep track of the game mode
    const [mode, setMode] = useState<'single' | 'multi' | 'none'>('none');

    // state to keep track of the first dealer
    const [firstDealer, setFirstDealer] = useState(-1);

    // ref to access the dealer component instance
    const dealerRef = useRef<Dealer>(null);

    // function to handle mode selection
    const handleModeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setMode(value as 'single' | 'multi');

        // call the dealCards method of the dealer component
        dealerRef.current?.dealCards();
    };

    // function to handle mode reset
    const handleModeReset = () => {
        setMode('none');
    };

    // function to handle first dealer change
    const handleFirstDealerChange = (dealer: number) => {
        setFirstDealer(dealer);
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
                    {/* pass the firstDealer state as a prop to the Game component */}
                    <Game mode={mode} onReset={handleModeReset} firstDealer={firstDealer} />
                    {/* pass the handleFirstDealerChange function as a prop to the Dealer component */}
                    <Dealer ref={dealerRef} onFirstDealerChange={handleFirstDealerChange} />
                </div>
            )}
        </div>
    );
}

export default App;