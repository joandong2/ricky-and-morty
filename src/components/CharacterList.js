import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Icon, Grid } from "semantic-ui-react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Character from "./Character.js";
import Searchform from "./Searchform.js";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState(1);
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
        setCurrentPage(e.currentTarget.getAttribute("value"));
    };

    const keyHandler = (e) => {
        setCurrentPage(1);
        setSearchKey(e);
    };

    return (
        <div className="charList-wrapper">
            <Searchform keyword={keyHandler} />

            <Grid>
                <Grid.Row columns={4}>
                    <TransitionGroup>
                        {characters.map((char, i) => {
                            return (
                                <Grid.Column key={i}>
                                    <CSSTransition
                                        key={i}
                                        timeout={5000}
                                        classNames="fade"
                                    >
                                        <Character key={i} attributes={char} />
                                    </CSSTransition>
                                </Grid.Column>
                            );
                        })}
                    </TransitionGroup>
                </Grid.Row>
            </Grid>

            <Pagination
                onPageChange={currPageHandler}
                totalPages={pages}
                boundaryRange={2}
                defaultActivePage={1}
                ellipsisItem={{
                    content: <Icon name="ellipsis horizontal" />,
                    icon: true
                }}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
            />
        </div>
    );
}
