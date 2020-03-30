import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "reactstrap";

import Character from "./Character.js";
import Pagination from "./Pagination.js";
import Searchform from "./Searchform.js";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchKey}&page=${currentPage}`
            )
            .then((res) => {
                // handle success
                console.log(res);
                setPages(res.data.info.pages);
                setCharacters(res.data.results);
            });
    }, [searchKey, currentPage]);

    const currPageHandler = (e) => {
        setCurrentPage(e.target.getAttribute("data-id"));
    };

    const keyHandler = (e) => {
        setCurrentPage(1);
        setSearchKey(e);
    };

    return (
        <Row>
            <Searchform keyword={keyHandler} />

            {characters.map((char, i) => {
                return <Character key={i} attributes={char} />;
            })}

            {[...Array(pages).keys()].map((i) => {
                return (
                    <Pagination
                        key={i + 1}
                        index={i + 1}
                        onclick={currPageHandler}
                    />
                );
            })}
        </Row>
    );
}
