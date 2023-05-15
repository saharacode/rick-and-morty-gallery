import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import {Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./CharacterDetailCard";
import axios from "axios";
import {Character} from "./Character";

export default function App() {

    const initialUrl = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState<Character[]>([]) // save characters from api

    useEffect(() =>{
        getAllCharactersFromApi(initialUrl) // call function automatically
    }, []) // with [] make sure that its just one time called (no infinity loop)

    function getAllCharactersFromApi(apiUrl:string){
        axios.get(apiUrl) // get information from url
            .then(response => setCharacters(response.data.results)); // save all characters from api in useState characters
    }


  return (
    <div className="headline">
        <header className="headline">
            <h1>Welcome to the Rick and Morty App</h1>
        </header>
        <Routes>
            <Route path={"/home"} element={<CharacterGallery/>}></Route>
            <Route path={"/character/:id"} element = {<CharacterDetailCard characters={characters}/>}></Route>
        </Routes>

    </div>
  );
}
