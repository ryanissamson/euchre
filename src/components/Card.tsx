// Card.tsx component for the Euchre card game app.
import {Suit, Rank} from './types';

// Import the SVG images for the cards from the .../assets directory.
import nineOfClubs from '../assets/images/9_of_clubs.svg';
import nineOfDiamonds from '../assets/images/9_of_diamonds.svg';
import nineOfHearts from '../assets/images/9_of_hearts.svg';
import nineOfSpades from '../assets/images/9_of_spades.svg';
import tenOfClubs from '../assets/images/10_of_clubs.svg';
import tenOfDiamonds from '../assets/images/10_of_diamonds.svg';
import tenOfHearts from '../assets/images/10_of_hearts.svg';
import tenOfSpades from '../assets/images/10_of_spades.svg';
import jackOfClubs from '../assets/images/jack_of_clubs.svg';
import jackOfDiamonds from '../assets/images/jack_of_diamonds.svg';
import jackOfHearts from '../assets/images/jack_of_hearts.svg';
import jackOfSpades from '../assets/images/jack_of_spades.svg';
import queenOfClubs from '../assets/images/queen_of_clubs.svg';
import queenOfDiamonds from '../assets/images/queen_of_diamonds.svg';
import queenOfHearts from '../assets/images/queen_of_hearts.svg';
import queenOfSpades from '../assets/images/queen_of_spades.svg';
import kingOfClubs from '../assets/images/king_of_clubs.svg';
import kingOfDiamonds from '../assets/images/king_of_diamonds.svg';
import kingOfHearts from '../assets/images/king_of_hearts.svg';
import kingOfSpades from '../assets/images/king_of_spades.svg';
import aceOfClubs from '../assets/images/ace_of_clubs.svg';
import aceOfDiamonds from '../assets/images/ace_of_diamonds.svg';
import aceOfHearts from '../assets/images/ace_of_hearts.svg';
import aceOfSpades2 from '../assets/images/ace_of_spades2.svg';

// class to represent a card in the game
export class Card {
    // property to store the card suit
    suit: Suit;

    // property to store the card rank
    rank: Rank;

    // property to store the card id (suit + rank)
    id: string;

    // property to store the card name (rank + suit)
    name: string;

    // property to store the card image url
    image: string;

    // constructor to initialize the card with a suit and a rank
    constructor(suit: Suit, rank: Rank) {
        this.suit = suit;
        this.rank = rank;
        this.id = `${suit}-${rank}`;
        this.name = `${rank} of ${suit}`;

        // use a switch statement to assign the correct image based on the suit and rank
        switch (this.id) {
            case 'clubs-nine':
                this.image = nineOfClubs;
                break;
            case 'diamonds-nine':
                this.image = nineOfDiamonds;
                break;
            case 'hearts-nine':
                this.image = nineOfHearts;
                break;
            case 'spades-nine':
                this.image = nineOfSpades;
                break;
            case 'clubs-ten':
                this.image = tenOfClubs;
                break;
            case 'diamonds-ten':
                this.image = tenOfDiamonds;
                break;
            case 'hearts-ten':
                this.image = tenOfHearts;
                break;
            case 'spades-ten':
                this.image = tenOfSpades;
                break;
            case 'clubs-ace':
                this.image = aceOfClubs;
                break;
            case 'diamonds-ace':
                this.image = aceOfDiamonds;
                break;
            case 'hearts-ace':
                this.image = aceOfHearts;
                break;
            case 'spades-ace':
                this.image = aceOfSpades2;
                break;
            case 'clubs-jack':
                this.image = jackOfClubs;
                break;
            case 'diamonds-jack':
                this.image = jackOfDiamonds;
                break;
            case 'hearts-jack':
                this.image = jackOfHearts;
                break;
            case 'spades-jack':
                this.image = jackOfSpades;
                break;
            case 'clubs-queen':
                this.image = queenOfClubs;
                break;
            case 'diamonds-queen':
                this.image = queenOfDiamonds;
                break;
            case 'hearts-queen':
                this.image = queenOfHearts;
                break;
            case 'spades-queen':
                this.image = queenOfSpades;
                break;
            case 'clubs-king':
                this.image = kingOfClubs;
                break;
            case 'diamonds-king':
                this.image = kingOfDiamonds;
                break;
            case 'hearts-king':
                this.image = kingOfHearts;
                break;
            case 'spades-king':
                this.image = kingOfSpades;
                break;
            default:
                this.image = '';
                break;
        }
    }
}
