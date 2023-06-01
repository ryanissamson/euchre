// types.tsx

// define data types for card, suit, player and team

// define an enum for the four suits
export enum Suit {
    Clubs = "♣",
    Diamonds = "♦",
    Hearts = "♥",
    Spades = "♠",
}

// define an interface for a card object
export interface Card {
    suit: Suit; // the suit of the card
    rank: string; // the rank of the card (9, 10, J, Q, K, A)
}

// define an interface for a player object
export interface Player {
    name: string; // the name of the player
    hand: Card[]; // the array of cards in the player's hand
    isHuman: boolean; // whether the player is human or computer
}

// define an interface for a team object
export interface Team {
    name: string; // the name of the team
    score: number; // the score of the team
}