// Dealer.tsx
import React from 'react';
import { Deck } from './Deck';
import { Suit, Rank } from './types';

// interface for dealer props
interface DealerProps {
    // add a prop for the function to handle first dealer change
    onFirstDealerChange: (dealer: number) => void;
}

// function to represent the dealer component
const Dealer = React.forwardRef((props: DealerProps, ref: React.RefObject<Dealer>) => {
    // property to store the deck of cards
    const deck = new Deck();

    // property to store the first dealer
    const [firstDealer, setFirstDealer] = React.useState(-1);

    // shuffle the deck on mount
    React.useEffect(() => {
        deck.shuffle();
    }, []);

    // method to deal one card to each player until someone gets a jack
    const dealCards = () => {
        // loop through the players
        for (let i = 0; i < 4; i++) {
            // get the top card from the deck
            let card = deck.cards.pop();

            // check if the card is a jack
            if (card && card.rank === Rank.Jack) {
                // set the first dealer to the current player index
                setFirstDealer(i);

                // break the loop
                break;
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

    // expose the dealCards method to the ref object
    React.useImperativeHandle(ref, () => ({
        dealCards,
    }));

    // return nothing from the component
    return null;
});

export default Dealer;