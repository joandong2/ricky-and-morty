import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import Character from "./Character.js";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [searchKey, setSearchKey] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name`
            )
            .then((res) => {
                // handle success
                //console.log(res);
                setCharacters(res.data.results);
            });
    }, []);

    console.log(characters);

    return (
        <Row>
            {characters.map((char) => {
                return <Character attributes={char} />;
            })}
        </Row>
    );
}
