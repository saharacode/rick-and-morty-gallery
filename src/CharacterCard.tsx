import React from 'react';
import {Character} from "./Character";
import './CharacterCard.css'

type Props = {
    characters:Character[]
}

export default function CharacterCard(props:Props) {
    return (
        <div className="order">
            {props.characters.map((currentCharacter:Character) => {
                return <div className="frame">
                    <h3 key={currentCharacter.id}>{currentCharacter.id + ". " + currentCharacter.name}</h3>
                    <img id="pic" src={currentCharacter.image} alt="picture not found"/>
                    <div id="info">
                        <ul>
                            <li>{currentCharacter.species}</li>
                            <li>{currentCharacter.status}</li>
                        </ul>
                    </div>
                </div>
            })
            }

        </div>
    );
}
