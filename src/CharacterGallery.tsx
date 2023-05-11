import React, {useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import {Character} from "./Character";
import './CharacterGallery.css'
import axios from "axios";


export default function CharacterGallery() {
    const initialUrl = "https://rickandmortyapi.com/api/character";
    let newUrl = ""
    const [pageCounter,setPageCounter] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]) // save characters from api
    const [inputName,setInputName] = useState("");

    useEffect(() =>{
        getAllCharactersFromApi(initialUrl) // call function automatically
    }, []) // with [] make sure that its just one time called (no infinity loop)

    function getAllCharactersFromApi(apiUrl:string){
        axios.get(apiUrl) // get information from url
            .then(response => setCharacters(response.data.results)); // save all characters from api in useState characters
    }

    function nextPage() {
        if(pageCounter<=41){ // make sure that it stops at the last page
            let nextPageCounter = pageCounter + 1; // keeping pages synchronus with the click on button
            newUrl = initialUrl + "/?page=" + nextPageCounter;
            getAllCharactersFromApi(newUrl);
            setPageCounter(pageCounter+1);
        }
    }

    function previousPage() {
        if (pageCounter >= 2) {
            let previousPageCounter = pageCounter - 1;
            newUrl = initialUrl + "/?page=" + previousPageCounter;
            getAllCharactersFromApi(newUrl)
            setPageCounter(pageCounter - 1);
        }
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
            <div>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
            <CharacterCard characters={filterCharacters()} ></CharacterCard>
        </div>
    );
}

