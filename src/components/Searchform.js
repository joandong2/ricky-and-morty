import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Searchform(props) {
    const [key, setKey] = useState("");

    const changeHandler = (e) => {
        setKey(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.keyword(key);
    };

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <Label for="search">Search</Label>
                <Input
                    type="text"
                    name="search"
                    id="search"
                    value={key}
                    onChange={changeHandler}
                    placeholder="Search Character"
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}
