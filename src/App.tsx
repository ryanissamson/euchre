// App.tsx
import React from "react";
import CardComponent from "./CardComponent";
import PlayerComponent from "./PlayerComponent";
import TeamComponent from "./TeamComponent";
import { Card, Player, Team } from "./types";
import { shuffleCards, dealCards, determineFirstDealer } from "./utils";
import "./App.css";

function App() {
    // initialize state hooks for game started, table, players, teams, dealer index, turn index and trump suit
    const [gameStarted, setGameStarted] = React.useState(false);
    const [table, setTable] = React.useState<{ topCard: Card | null }>({
        topCard: null,
    });
    const [players, setPlayers] = React.useState<Player[]>([]);
    const [teams, setTeams] = React.useState<Team[]>([]);
    const [dealerIndex, setDealerIndex] = React.useState<number | null>(null);
    const [turnIndex, setTurnIndex] = React.useState<number | null>(null);
    const [trumpSuit, setTrumpSuit] = React.useState<string | null>(null);

    // define a function to start the game
    const startGame = () => {
        // create an array of cards with suits and ranks
        const suits = ["♣", "♦", "♥", "♠"];
        const ranks = ["9", "10", "J", "Q", "K", "A"];
        let cards: Card[] = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                cards.push({ suit: suit as any, rank: rank });
            }
        }
        // shuffle the cards using the helper function
        let shuffledCards = shuffleCards(cards);
        // create an array of players with names and hands
        let allPlayers: Player[] = [
            { name: "Player1", hand: [], isHuman: true },
            { name: "Player2", hand: [], isHuman: false },
            { name: "Player3", hand: [], isHuman: false },
            { name: "Player4", hand: [], isHuman: false },
        ];
        // deal five cards to each player using the helper function and update their hand
        let dealtPlayers = dealCards(shuffledCards, allPlayers);
        // determine the first dealer using the helper function and assign it to dealer index state hook
        let firstDealerIndex = determineFirstDealer(shuffledCards, allPlayers);
        // set the game started state hook to true
        setGameStarted(true);
        // set the table state hook to have the top card as the last card from the shuffled cards array
        setTable({ topCard: shuffledCards[shuffledCards.length - 1] });
        // set the players state hook to the dealt players array
        setPlayers(dealtPlayers);
        // set the teams state hook to have two teams with names and scores
        setTeams([
            { name: "Team1", score: 0 },
            { name: "Team2", score: 0 },
        ]);
        // set the dealer index state hook to the first dealer index
        setDealerIndex(firstDealerIndex);
        // log the dealer index value
        console.log("dealer index:", firstDealerIndex);
        // increment the first dealer index by one (or reset to zero if it reaches four) and assign it to turn index state hook
        setTurnIndex((firstDealerIndex + 1) % 4);
        // log the turn index value
        console.log("turn index:", (firstDealerIndex + 1) % 4);
        // set trumpSuit state hook based on topCard suit or player choice
        setTrumpSuit(shuffledCards[shuffledCards.length - 1].suit);
    };

    return (
        <div className="app">
            {!gameStarted ? (
                <div className="menu">
                    <h1>Euchre Game</h1>
                    <button onClick={startGame}>Start Game</button>
                </div>
            ) : (
                <div className="game">
                    <div className="table">
                        {/* add className="top-card" */}
                        {table.topCard && (
                            <CardComponent card={table.topCard} className="top-card" />
                        )}
                    </div>
                    {/* render all-players div */}
                    <div className="all-players">
                        {players.map((player, index) => (
                            <PlayerComponent
                                key={player.name}
                                player={player}
                                isDealer={dealerIndex === index}
                                isTurn={turnIndex === index}
                            />
                        ))}
                    </div>
                    {/* Game information exists in a bottom bar div below the playing area. */}
                    <div className="bottom-bar">
                    <h4>Scores</h4>
                    <div className="score">
                        <p>Team1: {teams[0].score}</p>
                        <p>Team2: {teams[1].score}</p>
                    </div>
                    {/* In the top left of the screen, the trump is displayed in a box. */}
                    <div className="trump">{trumpSuit && <p>Trump: {trumpSuit}</p>}</div>
                    {/* In the bottom left of the screen, the name of the player who is the dealer is displayed in a box. */}
                    <div className="dealer">
                        {dealerIndex !== null && (
                            <p>Dealer: {players[dealerIndex].name}</p>
                        )}
                    </div>
                    {/* In the bottom right of the screen, the name of the player whose turn it is to play a card is displayed in a box. */}
                    <div className="turn">
                        {turnIndex !== null && <p>Turn: {players[turnIndex].name}</p>}
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;