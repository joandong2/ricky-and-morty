import React, { useState } from "react";

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
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="search"
                id="search"
                value={key}
                onChange={changeHandler}
                placeholder="Search Character"
            />
            <button>Submit</button>
        </form>
    );
}
