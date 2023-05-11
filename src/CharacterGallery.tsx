import React from 'react';
import CharacterCard from "./CharacterCard";
import {Character} from "./Character";
import './CharacterGallery.css'

type Props = {
    characters:Character[]
}

export default function CharacterGallery(props:Props) {
    return (
        <div>
            <h2>In this gallery you can see all characters from Rick and Morty:</h2>
            <CharacterCard characters={props.characters} ></CharacterCard>
        </div>
    );
}

