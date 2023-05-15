import React, {useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import {Character} from "./Character";
import './CharacterGallery.css'
import useLoadCharacters from "./useLoadCharacters";


type Props = {
    characters: Character[]
}

export default function CharacterGallery(props:Props) {
    const {previousPage,nextPage} = useLoadCharacters();
    const [inputName,setInputName] = useState("");

    function useTextInput(event: React.FormEvent<HTMLInputElement>) {
        setInputName(event.currentTarget.value); // change the useState-string to the input from the textfield
    }

    function filterCharacters() {
        // filters all characters which have the inputName included
        return props.characters.filter((currentCharacter:Character) => {
            return currentCharacter.name.toLowerCase().includes(inputName.toLowerCase()); // compare words with all lowercase
        })
    }

    return (
        <div>
            <h2>In this gallery you can see all characters from Rick and Morty:</h2>
            <div id="window">
                <h3>Please type in the name, you are looking for:</h3>
                <input placeholder="Search..." type="text" value={inputName} onInput={useTextInput}/>
            </div>
            <div>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>

            <div className="order">
                {filterCharacters().map((currentCharacter:Character) => <CharacterCard currentCharacter={currentCharacter}></CharacterCard>)}
            </div>
        </div>
    );
}

