// PlayerComponent.tsx

import React from "react";
import { Player } from "./types";
import CardComponent from "./CardComponent";

interface PlayerComponentProps {
    player: Player;
    isDealer: boolean;
    isTurn: boolean;
}

function PlayerComponent(props: PlayerComponentProps) {
    return (
        <div className={`player ${props.isTurn ? "turn" : ""}`}>
            <h3>{props.player.name}</h3>
            <div className="hand">
                {props.player.hand.map((card) => (
                    <CardComponent key={`${card.suit}${card.rank}`} card={card} />
                ))}
            </div>
            <div className="actions">
                {props.isTurn && (
                    <>
                        <button className="button call">Call</button>
                        <button className="button go-alone">Go Alone</button>
                        <button className="button pass">Pass</button>
                    </>
                )}
            </div>
            <div className="dealer">{props.isDealer && <p>Dealer</p>}</div>
        </div>
    );
}

export default PlayerComponent;
