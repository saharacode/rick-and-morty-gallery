import React, {useEffect, useState} from 'react';
import {Character} from "./Character";
import axios from "axios";

function useLoadCharacters() {
    const initialUrl = "https://rickandmortyapi.com/api/character";
    let newUrl = ""
    const [pageCounter,setPageCounter] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]) // save characters from api

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

    return {characters,getAllCharactersFromApi,nextPage,previousPage};
}

export default useLoadCharacters;