import React from "react";
import { Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import CharacterList from "./components/CharacterList.js";

function App() {
    return (
        <Container>
            <div className="App">
                <Container>
                    <Route path="/" component={Header} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={CharacterList} />
                </Container>
            </div>
        </Container>
    );
}

export default App;
