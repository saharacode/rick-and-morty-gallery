import React, {useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import {Character} from "./Character";
import './CharacterGallery.css'
import axios from "axios";


export default function CharacterGallery() {
    const [characters, setCharacters] = useState<Character[]>([]) // save characters from api
    const [inputName,setInputName] = useState("");

    useEffect(() =>{
        getAllCharactersFromApi() // call function automatically
    }, []) // with [] make sure that its just one time called (no infinity loop)

    function getAllCharactersFromApi(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => setCharacters(response.data.results)); // save all characters from api in useState characters
    }

    function useTextInput(event: React.FormEvent<HTMLInputElement>) {
        setInputName(event.currentTarget.value); // change the useState-string to the input from the textfield
    }

    function filterCharacters() {
        // filters all characters which have the inputName included
        return characters.filter((currentCharacter:Character) => {
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
            <CharacterCard characters={filterCharacters()} ></CharacterCard>
        </div>
    );
}

