// Dealer.tsx
import React from 'react';
import {Deck} from './Deck';
import {Suit, Rank} from './types';

// interface for dealer props
interface DealerProps {
    // add a prop for the function to handle first dealer change
    onFirstDealerChange: (dealer: number) => void;
    // add a prop for the function to handle dealCards change
    onDealCardsChange: (dealCards: () => void) => void;
}

// function to represent the dealer component
// pass the ref parameter as the second argument of React.forwardRef
// specify the type of the ref parameter as React.RefObject<Dealer>
const Dealer = React.forwardRef((props: DealerProps, ref: React.RefObject<Dealer>) => {
    // property to store the deck of cards
    const deck = new Deck();
    // property to store the first dealer
    const [firstDealer, setFirstDealer] = React.useState(-1);

    // shuffle the deck on mount
    React.useEffect(() => {
        deck.shuffle();
        // call the prop function with the dealCards method as an argument
        props.onDealCardsChange(dealCards);
    }, []);

    // method to deal one card to each player until someone gets a jack
    const dealCards = () => {
        // initialize a variable to store the current player index
        let currentPlayer = 0;
        // use a while loop that checks if the deck is not empty and the first dealer is not found
        while (deck.cards.length > 0 && firstDealer === -1) {
            // get the top card from the deck
            let card = deck.cards.pop();
            // check if the card is a jack
            if (card && card.rank === Rank.Jack) {
                // set the first dealer to the current player index
                setFirstDealer(currentPlayer);
                // break the loop
                break;
            }
            // increment the current player index by one
            currentPlayer++;
            // if the current player index reaches 4, reset it to 0
            if (currentPlayer === 4) {
                currentPlayer = 0;
            }
        }
        // check if there is a first dealer
        if (firstDealer !== -1) {
            // display a message with the first dealer
            alert(`The first dealer is player ${firstDealer + 1}`);
            // call the prop function with the first dealer value
            props.onFirstDealerChange(firstDealer);
        } else {
            // reshuffle the deck
            deck.shuffle();
            // deal cards again
            dealCards();
        }
    };

    // return nothing from the component
    return null;
});

export default Dealer;