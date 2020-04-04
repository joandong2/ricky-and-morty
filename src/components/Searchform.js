import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import spaceship from "../images/spaceship.png";

export default function Searchform(props) {
    const [key, setKey] = useState("");

    const changeHandler = (e) => {
        setKey(e.target.value);
    };

    const submitHandler = (e) => {
        setKey("");
        e.preventDefault();
        props.keyword(key);
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group inline>
                <Form.Field
                    control={Input}
                    placeholder="Search character.."
                    onChange={changeHandler}
                    value={key}
                    name="search"
                />

                <Form.Field control={Button}>
                    <img src={spaceship} alt="button" />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}
