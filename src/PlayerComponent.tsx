// PlayerComponent.tsx
import React from "react";
import CardComponent from "./CardComponent";
import { Player } from "./types";

interface Props {
    player: Player;
    isDealer: boolean;
    isTurn: boolean;
}

function PlayerComponent(props: Props) {
    return (
        <div className="player">
            <h3>{props.player.name}</h3>
            <div className="hand">
                {props.player.hand.map((card) => (
                    // add className="card"
                    <CardComponent key={card.suit + card.rank} card={card} className="card" />
                ))}
            </div>
            {/* add className="actions" */}
            <div className="actions">
                {props.isTurn && (
                    <>
                        <button className="button call">Call</button>
                        <button className="button go-alone">Go Alone</button>
                        <button className="button pass">Pass</button>
                    </>
                )}
            </div>
            {/* add className="dealer" */}
            <div className="dealer">{props.isDealer && <p>Dealer</p>}</div>
        </div>
    );
}

export default PlayerComponent;
