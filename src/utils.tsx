// utils.tsx

// initialize some helper functions

import { Card, Suit, Player } from "./types"; // import data types from types.tsx

// define a function to shuffle an array of cards using Fisher-Yates algorithm
export function shuffleCards(cards: Card[]): Card[] {
    let shuffled = [...cards]; // copy the original array
    let i = shuffled.length; // get the length of the array
    while (i > 0) {
        // loop from the end to the beginning
        let j = Math.floor(Math.random() * i); // pick a random index from 0 to i-1
        i--; // decrement i by one
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap the elements at i and j
    }
    return shuffled; // return the shuffled array
}

// define a function to deal five cards to each player and update their hand
export function dealCards(cards: Card[], players: Player[]): Player[] {
    let dealt = [...players]; // copy the original array of players
    for (let i = 0; i < dealt.length; i++) {
        // loop through each player
        dealt[i].hand = cards.slice(i * 5, (i + 1) * 5); // assign five cards to their hand from the cards array
    }
    return dealt; // return the updated array of players
}

// define a function to determine the first dealer by dealing one card at a time to each player and returning the index of the first player to receive a Jack
export function determineFirstDealer(cards: Card[], players: Player[]): number | null {
    let dealerIndex = null; // initialize a variable to store the dealer index
    let i = 0; // initialize a variable to track the current card index
    while (dealerIndex === null && i < cards.length) {
        // loop until a dealer is found or all cards are dealt
        let playerIndex = i % players.length; // get the index of the current player by modulo operation
        if (cards[i].rank === "J") {
            // check if the current card is a Jack
            dealerIndex = playerIndex; // assign the current player index to dealer index
        }
        i++; // increment i by one
    }
    return dealerIndex; // return the dealer index or null if not found
}

// define a function to determine the trump suit by checking the suit of the top card on the table and returning it as a string
export function determineTrumpSuit(topCard: Card | null): Suit | null {
    if (topCard) {
        // check if there is a top card on the table
        return topCard.suit; // return its suit as trump suit
    } else {
        return null; // otherwise return null
    }
}