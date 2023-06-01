// App.tsx
import React, {useState, useEffect} from 'react';
import {Card} from './components/Card';
import App_bak from "./App_bak";

// GamePlay for the Euchre card game using stand Euchre card game Stick the Dealer rules from beginning to end.
function App() {
// Present user with a green menu screen to begin the game and one white button with black text. The text on the button is "Start game".
// When the user clicks the button, the game begins, showing a green screen, a box in the middle of the screen to represent the table, and four players, Player 1, the human. The others, Player 2, PLayer 3, and Player 4 are computer players and are displayed on the screen across from each other on the table just like Euchre rules state. Players 1 and 3 are on a team and PLayers 2 and 4 are on a team. In the top right of the screen, the score of each team is displayed in a box. In the top left of the screen, the trump is displayed in a box. In the bottom left of the screen, the name of the player who is the dealer is displayed in a box. In the bottom right of the screen, the name of the player whose turn it is to play a card is displayed in a box.
// The game begins with an animation of the cards being shuffled.
// The game then determines the first dealer by dealing one card at a time to each player, beginning with a random player. The first player to receive a Jack is the first dealer. The game then updates the name of the player who is the dealer to append "(Dealer)" to their name. Each subsequent round, the dealer is the next player in the rotation to the left.
// The game then shows an animation, dealing five cards to each player, one at a time, beginning with the player to the left of the dealer and going around the table to the left.
// The game then shows an animation, dealing one card to the table, face up, called the "top card", to determine the trump suit. The suit of this card is the trump suit for the round.
// The player after the dealer is then presented with a box which displays the name of the trump suit of the top card above three button options: "Call", "Go alone", or "Pass".
// If the player clicks "Call", then the dealer must pick up the card and discard one card from their hand.
// If the player clicks "Go alone", then the dealer must pick up the card and discard one card from their hand. The dealer's partner is not allowed to play in this round.
// If the player clicks "Pass", then the next player to the left is presented with the same three options.
// If all four players pass, then an animation shows the top card flipped over.
// The player to the left of the dealer is then presented with three buttons with names of suits to call any suit other than the suit of the top card that was flipped over.
// If the player clicks a suit, then the trump is determined to be that suit and the hand begins.
// If the player clicks "Pass", then the next player to the left is presented with the same three options.
// If all four players pass, then an animation shows the cards being moved into the middle face down, the hand is over and the next player to the left of the dealer is the dealer for the next round.
// The player to the left of the dealer begins the hand by playing a card from their hand. The player to the left of the dealer is called the "maker" for the hand.
// The next player to the left plays a card from their hand.
// The next player to the left plays a card from their hand.
// The next player to the left plays a card from their hand.
// The player who played the highest card of the suit of the maker wins the hand and the cards are moved to a pile in front of the maker.
    return (
        <div className="App">
            <h1>Euchre</h1>
        </div>
    );
}

export default App;