import React, {useState} from 'react';
import CharacterCard from "./CharacterCard";
import {Character} from "./Character";
import './CharacterGallery.css'

type Props = {
    characters:Character[]
}


export default function CharacterGallery(props:Props) {
    const [inputName,setInputName] = useState("");

    function useTextInput(event: React.FormEvent<HTMLInputElement>) {
        setInputName(event.currentTarget.value); // change the useState-string to the input from the textfield
    }

    return (
        <div>
            <h2>In this gallery you can see all characters from Rick and Morty:</h2>
            <h3>Please type in the name, you are looking for:</h3>
            <input type="text" value={inputName} onInput={useTextInput}/>
            <p>{inputName}</p>
            <CharacterCard characters={props.characters} ></CharacterCard>
        </div>
    );
}

