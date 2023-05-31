// Player.tsx
import {Card} from './Card';

// class to represent a player in the game
export class Player {
    // property to store the player id
    id: number;

    // property to store the player name
    name: string;

    // property to store the player hand of cards
    hand: Card[];

    // constructor to initialize the player with an id and a name
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.hand = [];
    }
}