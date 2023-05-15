import React from 'react';
import {Character} from "./Character";
import './CharacterCard.css'
import {useNavigate} from "react-router-dom";

type Props = {
    currentCharacter:Character
}

export default function CharacterCard(props:Props) {
    const navigate = useNavigate();

    function onClickHandlerForDetails() {
        navigate("/character/" + props.currentCharacter.id)
    }

    return (
        <div className="frame">
            <h3 key={props.currentCharacter.id}>{props.currentCharacter.id + ". " + props.currentCharacter.name}</h3>
            <img id="pic" src={props.currentCharacter.image} alt="picture not found"/>
            <div id="info">
                <ul>
                    <li>{props.currentCharacter.species}</li>
                    <li>{props.currentCharacter.status}</li>
                </ul>
            </div>
            <button onClick={onClickHandlerForDetails}>Details</button>
        </div>
    );
}
