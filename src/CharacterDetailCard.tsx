import React from 'react';
import {Character} from "./Character";
import {Link, useParams} from "react-router-dom";

type Props = {
    characters:Character[]
}

function CharacterDetailCard(props:Props) {
    const params = useParams();
    const id: string | undefined = params.id;
    const foundCharacter:Character | undefined = props.characters.find(currentCharacter => currentCharacter.id.toString() === id)


    return (
        <div>
            <div className="frame">
                <h3>{foundCharacter?.id + ". " + foundCharacter?.name}</h3>
                <img id="pic" src={foundCharacter?.image} alt="picture not found"/>
                <div id="info">
                    <ul>
                        <li>{foundCharacter?.species}</li>
                        <li>{foundCharacter?.status}</li>
                    </ul>
                </div>
                <Link to={"/home"}>back</Link>
            </div>

        </div>
    );
}

export default CharacterDetailCard;