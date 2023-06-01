// App.tsx

import React from "react";
import CardComponent from "./CardComponent";
import PlayerComponent from "./PlayerComponent";
import TeamComponent from "./TeamComponent";
import { Card, Player, Team } from "./types";
import { shuffleCards, dealCards, determineFirstDealer } from "./utils";

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
        let players: Player[] = [
            { name: "Player1", hand: [], isHuman: true },
            { name: "Player2", hand: [], isHuman: false },
            { name: "Player3", hand: [], isHuman: false },
            { name: "Player4", hand: [], isHuman: false },
        ];

        // deal five cards to each player using the helper function and update their hand
        let dealtPlayers = dealCards(shuffledCards, players);

        // determine the first dealer using the helper function and assign it to dealer index state hook
        let firstDealerIndex = determineFirstDealer(shuffledCards, players);

        // set the game started state hook to true
        setGameStarted(true);

        // set the table state hook to have the top card as the sixth card from the shuffled cards array
        setTable({ topCard: shuffledCards[5] });

        // set the players state hook to the dealt players array
        setPlayers(dealtPlayers);

        // set the teams state hook to have two teams with names and scores
        setTeams([
            { name: "Team1", score: 0 },
            { name: "Team2", score: 0 },
        ]);

        // set the dealer index state hook to the first dealer index
        setDealerIndex(firstDealerIndex);

        // increment the dealer index by one (or reset to zero if it reaches four) and assign it to turn index state hook
        setTurnIndex((dealerIndex! + 1) % 4);
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
                        {table.topCard && <CardComponent card={table.topCard} />}
                    </div>

                    {/* and four players */}

                    <div className="players">
                        {players.map((player, index) => (
                            <PlayerComponent
                                key={player.name}
                                player={player}
                                isDealer={index === dealerIndex}
                                isTurn={index === turnIndex}
                            />
                        ))}
                    </div>

                    {/* Player1 is human */}

                    <div className="human-player">
                        <PlayerComponent
                            player={players[0]}
                            isDealer={dealerIndex === 0}
                            isTurn={turnIndex === 0}
                        />
                    </div>

                    {/* The others are computer players */}

                    <div className="computer-players">
                        <PlayerComponent
                            player={players[1]}
                            isDealer={dealerIndex === 1}
                            isTurn={turnIndex === 1}
                        />
                        <PlayerComponent
                            player={players[2]}
                            isDealer={dealerIndex === 2}
                            isTurn={turnIndex === 2}
                        />
                        <PlayerComponent
                            player={players[3]}
                            isDealer={dealerIndex === 3}
                            isTurn={turnIndex === 3}
                        />
                    </div>

                    {/* and are displayed on screen across from each other on table just like Euchre rules state */}

                    <div className="teams">
                        <TeamComponent team={teams[0]} />
                        <TeamComponent team={teams[1]} />
                    </div>

                    {/* In the top right of the screen, the score of each team is displayed in a box. */}

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
                </div>
            )}
        </div>
    );
}

export default App;
