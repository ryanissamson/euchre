// TeamComponent.tsx

import React from "react";
import { Team } from "./types";

interface TeamComponentProps {
    team: Team;
}

function TeamComponent(props: TeamComponentProps) {
    return (
        <div className="team">
            <h4>{props.team.name}</h4>
            <p>Score: {props.team.score}</p>
        </div>
    );
}

export default TeamComponent;
