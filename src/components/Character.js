import React from "react";

export default function CharacterList(props) {
    return (
        <div>
            <img src={props.attributes.image} alt={props.attributes.name} />
            <h4>{props.attributes.name}</h4>
        </div>
    );
}
