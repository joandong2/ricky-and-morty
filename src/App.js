import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import Home from "./pages/Home.js";

function App() {
    return (
        <Container>
            <div className="App">
                <Route path="/" component={Header} />
                <Route exact path="/" component={Home} />
                <Route exact path="/characters" component={CharacterList} />
            </div>
        </Container>
    );
}

export default App;
