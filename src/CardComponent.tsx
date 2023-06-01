// CardComponent.tsx

import React from "react";
import { Card } from "./types";

interface CardComponentProps {
    card: Card;
}

function CardComponent(props: CardComponentProps) {
    return (
        <div className="card">
            <div className="suit">{props.card.suit}</div>
            <div className="rank">{props.card.rank}</div>
        </div>
    );
}

export default CardComponent;
