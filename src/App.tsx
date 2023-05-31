// App.tsx
import React from 'react';
import {Game} from './components/Game';
import {useState} from "react";
import Dealer from './components/Dealer';
// import the Dealer component

// A basic, single player Euchre card game built with React and TypeScript.
function App() {
    // state to keep track of the game mode
    const [mode, setMode] = useState<'single' | 'multi' | 'none'>('none');
    // state to keep track of the first dealer
    const [firstDealer, setFirstDealer] = useState(-1);
    // state to keep track of the dealCards function
    const [dealCards, setDealCards] = useState<(() => void) | null>(null);

    // function to handle mode selection
    const handleModeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setMode(value as 'single' | 'multi');
        // check if there is a dealCards function
        if (dealCards) {
            // call the dealCards function
            dealCards();
        }
    };

    // function to handle mode reset
    const handleModeReset = () => {
        setMode('none');
    };

    // function to handle first dealer change
    const handleFirstDealerChange = (dealer: number) => {
        setFirstDealer(dealer);
    };

    // function to handle dealCards change
    const handleDealCardsChange = (dealCards: () => void) => {
        setDealCards(dealCards);
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
                    {/* pass the handleFirstDealerChange and handleDealCardsChange functions as props to the Dealer component */}
                    <Dealer
                        onFirstDealerChange={handleFirstDealerChange}
                        onDealCardsChange={handleDealCardsChange}
                    />
                </div>
            )}
        </div>
    );
}

export default App;