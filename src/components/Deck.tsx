// Deck component for the Euchre card game app.

import {Card} from './Card';
import {Rank, Suit} from "./types";

// class to represent a deck of cards
export class Deck {
    // property to store the cards in the deck
    cards: Card[];

    // constructor to initialize the deck with 52 cards
    constructor() {
        this.cards = [];
        // loop through the four suits
        for (let suit of [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]) {
            // loop through the 13 ranks
            for (let rank of [
                Rank.Ace,
                Rank.Two,
                Rank.Three,
                Rank.Four,
                Rank.Five,
                Rank.Six,
                Rank.Seven,
                Rank.Eight,
                Rank.Nine,
                Rank.Ten,
                Rank.Jack,
                Rank.Queen,
                Rank.King,
            ]) {
                // create a new card with the suit and rank
                const card = new Card(suit, rank);
                // add the card to the deck
                this.cards.push(card);
            }
        }
    }

    // method to shuffle the deck using Fisher-Yates algorithm
    shuffle() {
        // loop through the deck from the last card to the first
        for (let i = this.cards.length - 1; i > 0; i--) {
            // generate a random index between 0 and i
            const j = Math.floor(Math.random() * (i + 1));
            // swap the cards at i and j
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    // method to deal a number of cards from the deck
    deal(n: number) {
        // create an array to store the dealt cards
        const dealtCards: Card[] = [];
        // loop through the number of cards to deal
        for (let i = 0; i < n; i++) {
            // remove the last card from the deck and add it to the array
            const card = this.cards.pop();
            if (card) {
                dealtCards.push(card);
            }
        }
        // return the array of dealt cards
        return dealtCards;
    }
}