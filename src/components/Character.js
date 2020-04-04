import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Icon } from "semantic-ui-react";

export default function Character(props) {
    //console.log(props);
    const [charId, setCharId] = useState(props.match.params.id);
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${charId}`
            )
            .then((res) => {
                // handle success
                console.log(res.data);
                setCharacter(res.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, [charId]);

    // console.log(character.location);
    // Object.keys(character.location).map((key) => {
    //     console.log(character.location[key]);
    // });

    // Gender
    let gender_img = "";
    switch (character.gender) {
        case "Female":
            gender_img = "femail";
            break;
        case "Genderless":
            gender_img = "street view";
            break;
        case "unknown":
            gender_img = "question circle outline";
            break;
        default:
            gender_img = "male";
            break;
    }

    // Status
    let status_img = "";
    switch (character.status) {
        case "Dead":
            status_img = "bed";
            break;
        case "unknown":
            status_img = "question circle outline";
            break;
        default:
            status_img = "child";
            break;
    }

    return (
        <Grid>
            <Grid.Row columns={2} className="charsWrapper">
                <Grid.Column className="first-col">
                    <img src={character.image} alt={character.name} />
                </Grid.Column>
                <Grid.Column className="second-col">
                    <h1>
                        <Icon.Group size="big">
                            <Icon
                                loading
                                size="big"
                                name="circle notch"
                                color="yellow"
                            />
                            <Icon
                                loading
                                name="rocket"
                                size="large"
                                color="purple"
                            />
                        </Icon.Group>
                        <Icon loading name="rocket" size="large" color="red" />{" "}
                        {character.name}
                    </h1>
                    <ul>
                        <li>
                            <Icon
                                name={gender_img}
                                size="large"
                                color="purple"
                            />{" "}
                            <span className="redBox">{character.gender}</span>
                        </li>
                        <li>
                            <Icon
                                name={status_img}
                                size="large"
                                color="yellow"
                            />{" "}
                            <span className="purpleBox">
                                {character.status}
                            </span>
                        </li>
                        <li>
                            Species:{" "}
                            <span className="greenBox">
                                {character.species}
                            </span>
                        </li>
                        <li>
                            Type:{" "}
                            <span className="brownBox">
                                {character.type === "" ? "NA" : character.type}
                            </span>
                        </li>
                    </ul>
                    {/* <ul>
                        <li>Status: {character.status}</li>
                        <li>Species: {character.species}</li>
                        <li>
                            Type:{" "}
                            {character.type === "" ? "NA" : character.type}
                        </li>
                        <li>Gender: {character.gender}</li>
                    </ul> */}
                    <ul>
                        {/* {Object.keys(character.location).map((key, i) => {
                            const loc = character.location[key];
                            return <li>{loc.name}</li>;
                        })} */}
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
