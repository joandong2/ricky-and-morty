import React from "react";
import { Button } from "reactstrap";

export default function Pagination(props) {
    return (
        <Button
            color="primary"
            size="sm"
            data-id={props.index}
            onClick={props.onclick}
        >
            {props.index}
        </Button>
    );
}
