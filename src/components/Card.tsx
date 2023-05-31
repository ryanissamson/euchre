// Card.tsx component for the Euchre card game app.
import {Suit, Rank} from './types';

// Import the SVG images for the cards from the .../assets directory.
import fiveOfClubs from '../assets/images/5_of_clubs.svg';
import twoOfClubs from '../assets/images/2_of_clubs.svg';
import twoOfDiamonds from '../assets/images/2_of_diamonds.svg';
import twoOfHearts from '../assets/images/2_of_hearts.svg';
import twoOfSpades from '../assets/images/2_of_spades.svg';
import threeOfClubs from '../assets/images/3_of_clubs.svg';
import threeOfDiamonds from '../assets/images/3_of_diamonds.svg';
import threeOfHearts from '../assets/images/3_of_hearts.svg';
import threeOfSpades from '../assets/images/3_of_spades.svg';
import fourOfClubs from '../assets/images/4_of_clubs.svg';
import fourOfDiamonds from '../assets/images/4_of_diamonds.svg';
import fourOfHearts from '../assets/images/4_of_hearts.svg';
import fourOfSpades from '../assets/images/4_of_spades.svg';
import fiveOfDiamonds from '../assets/images/5_of_diamonds.svg';
import fiveOfHearts from '../assets/images/5_of_hearts.svg';
import fiveOfSpades from '../assets/images/5_of_spades.svg';
import sixOfClubs from '../assets/images/6_of_clubs.svg';
import sixOfDiamonds from '../assets/images/6_of_diamonds.svg';
import sixOfHearts from '../assets/images/6_of_hearts.svg';
import sixOfSpades from '../assets/images/6_of_spades.svg';
import sevenOfClubs from '../assets/images/7_of_clubs.svg';
import sevenOfDiamonds from '../assets/images/7_of_diamonds.svg';
import sevenOfHearts from '../assets/images/7_of_hearts.svg';
import sevenOfSpades from '../assets/images/7_of_spades.svg';
import eightOfClubs from '../assets/images/8_of_clubs.svg';
import eightOfDiamonds from '../assets/images/8_of_diamonds.svg';
import eightOfHearts from '../assets/images/8_of_hearts.svg';
import eightOfSpades from '../assets/images/8_of_spades.svg';
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
            case
            'clubs-five':
                this.image = fiveOfClubs;
                break;
            case 'clubs-two':
                this.image = twoOfClubs;
                break;
            case 'diamonds-two':
                this.image = twoOfDiamonds;
                break;
            case 'hearts-two':
                this.image = twoOfHearts;
                break;
            case 'spades-two':
                this.image = twoOfSpades;
                break;
            case 'clubs-three':
                this.image = threeOfClubs;
                break;
            case 'diamonds-three':
                this.image = threeOfDiamonds;
                break;
            case 'hearts-three':
                this.image = threeOfHearts;
                break;
            case 'spades-three':
                this.image = threeOfSpades;
                break;
            case 'clubs-four':
                this.image = fourOfClubs;
                break;
            case 'diamonds-four':
                this.image = fourOfDiamonds;
                break;
            case 'hearts-four':
                this.image = fourOfHearts;
                break;
            case 'spades-four':
                this.image = fourOfSpades;
                break;
            case 'diamonds-five':
                this.image = fiveOfDiamonds;
                break;
            case 'hearts-five':
                this.image = fiveOfHearts;
                break;
            case 'spades-five':
                this.image = fiveOfSpades;
                break;
            case 'clubs-six':
                this.image = sixOfClubs;
                break;
            case 'diamonds-six':
                this.image = sixOfDiamonds;
                break;
            case 'hearts-six':
                this.image = sixOfHearts;
                break;
            case 'spades-six':
                this.image = sixOfSpades;
                break;
            case 'clubs-seven':
                this.image = sevenOfClubs;
                break;
            case 'diamonds-seven':
                this.image = sevenOfDiamonds;
                break;
            case "hearts-seven":
                this.image = sevenOfHearts;
                break;
            case 'spades-seven':
                this.image = sevenOfSpades;
                break;
            case 'clubs-eight':
                this.image = eightOfClubs;
                break;
            case 'diamonds-eight':
                this.image = eightOfDiamonds;
                break;
            case 'hearts-eight':
                this.image = eightOfHearts;
                break;
            case 'spades-eight':
                this.image = eightOfSpades;
                break;
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
