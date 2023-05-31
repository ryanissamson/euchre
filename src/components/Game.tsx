import * as React from 'react';
import {Deck} from './Deck';
import {Player} from './Player';
import {Card} from './Card';
import {useSocket} from './useSocket';
import {useEffect, useState} from "react";
import '../assets/css/Game.css';

// Game component for the Euchre card game.

type GameProps = {
    mode: 'single' | 'multi';
    onReset: () => void;
};

export const Game = ({mode, onReset}: GameProps) => {
    // state to keep track of the deck of cards
    const [deck, setDeck] = useState<Card[]>([]);

    // state to keep track of the players
    const [players, setPlayers] = useState<Player[]>([]);

    // state to keep track of the current turn
    const [turn, setTurn] = useState<number>(0);

    // state to keep track of the game status
    const [status, setStatus] = useState<'waiting' | 'playing' | 'over'>('waiting');

    // state to keep track of the game winner
    const [winner, setWinner] = useState<Player | null>(null);

    // custom hook to handle socket connection and events
    const socket = useSocket(mode);

    // effect to initialize the deck and the players
    useEffect(() => {
        // create a new deck of cards
        const newDeck = new Deck();
        // shuffle the deck
        newDeck.shuffle();
        // set the deck state
        setDeck(newDeck.cards);

        // create an array of players
        const newPlayers: Player[] = [];
        // loop through the number of players (4 for euchre)
        for (let i = 0; i < 4; i++) {
            // create a new player with an id and a name
            const player = new Player(i, `Player ${i + 1}`);
            // deal five cards to the player from the deck
            player.hand = newDeck.deal(5);
            // add the player to the array
            newPlayers.push(player);
        }
        // set the players state
        setPlayers(newPlayers);

        // set the status to playing
        setStatus('playing');
    }, []);

    // effect to handle socket events
    useEffect(() => {
        if (socket) {
            // listen for game over event
            socket.on('game over', (data: {winner: Player}) => {
                // set the winner state
                setWinner(data.winner);
                // set the status to over
                setStatus('over');
            });

            // listen for turn change event
            socket.on('turn change', (data: {turn: number}) => {
                // set the turn state
                setTurn(data.turn);
            });
        }
    }, [socket]);

    // function to handle card click event
    const handleCardClick = (card: Card) => {
        if (socket) {
            // emit card played event to the server with the card and the turn data
            socket.emit('card played', {card, turn});
        }
    };

    return (
        <div className="Game">
            <h2>Game Mode: {mode}</h2>
            <button onClick={onReset}>Reset</button>
            {status === 'waiting' ? (
                <p>Waiting for other players...</p>
            ) : status === 'playing' ? (
                <div className="game-board">
                    <div className="player-container">
                        {players.map((player) => (
                            <div key={player.id} className="player">
                                <h3>{player.name}</h3>
                                <div className="player-hand">
                                    {player.hand.map((card) => (
                                        <div key={card.id} className="card">
                                            <img
                                                src={card.image}
                                                alt={card.name}
                                                onClick={() => handleCardClick(card)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="turn-indicator">
                        <p>Current turn: {turn}</p>
                    </div>
                </div>
            ) : status === 'over' ? (
                <div className="game-over">
                    <p>Game over!</p>
                    {winner && <p>The winner is {winner.name}</p>}
                </div>
            ) : null}
        </div>
    );
};
