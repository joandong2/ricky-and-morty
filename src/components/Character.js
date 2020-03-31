import React from "react";
import { Col } from "reactstrap";

export default function CharacterList(props) {
    return (
        <Col md="3" className="char">
            <img src={props.attributes.image} alt={props.attributes.name} />
            <h4>{props.attributes.name}</h4>
        </Col>
    );
}
