import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Icon, Grid } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
            })
            .catch((error) => {
                console.log("Error:", error);
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
                <TransitionGroup className="five column row">
                    {characters.map((char, i) => {
                        return (
                            <CSSTransition
                                timeout={200}
                                classNames="fade"
                                key={char.name}
                            >
                                <Grid.Column
                                    key={i}
                                    style={{
                                        transitionDelay: `${i * 100}ms`
                                    }}
                                >
                                    <Character key={i} attributes={char} />
                                    {/* <img src={char.image} alt={char.name} /> */}
                                </Grid.Column>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
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
