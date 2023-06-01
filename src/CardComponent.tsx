// CardComponent.tsx
import React from "react";
import { Card } from "./types";

interface Props {
    card: Card;
    className?: string; // add className as a prop
}

function CardComponent(props: Props) {
    return (
        // pass className prop to div element
        <div className={props.className}>
            <div className="suit">{props.card.suit}</div>
            <div className="rank">{props.card.rank}</div>
        </div>
    );
}

export default CardComponent;
