import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Form, Pagination, Segment } from "semantic-ui-react";

import Character from "./Character.js";
//import Pagination from "./Pagination.js";
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
        console.log(e);
        //setCurrentPage(e.target.getAttribute("data-id"));
    };

    const keyHandler = (e) => {
        setCurrentPage(1);
        setSearchKey(e);
    };

    return (
        <Row>
            <Col md="5" className="search-wrapper">
                <Searchform keyword={keyHandler} />
            </Col>
            <Col md="12" className="char-wrapper">
                <Row>
                    {characters.map((char, i) => {
                        return <Character key={i} attributes={char} />;
                    })}
                </Row>
            </Col>
            <Col md="12" className="pagination">
                <Row>
                    <Pagination
                        activePage={5}
                        boundaryRange={1}
                        onPageChange={currPageHandler}
                        size="mini"
                        siblingRange={1}
                        totalPages={pages}
                        ellipsisItem={true}
                        firstItem={true}
                        lastItem={true}
                        prevItem={true}
                        nextItem={true}
                    />
                </Row>
            </Col>
        </Row>
    );
}
