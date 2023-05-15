import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import {Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./CharacterDetailCard";

import useLoadCharacters from "./useLoadCharacters";

export default function App() {
    const {characters,previousPage,nextPage} = useLoadCharacters();


  return (
    <div className="headline">
        <header className="headline">
            <h1>The Rick and Morty App</h1>
        </header>
        <Routes>
            <Route path={"/home"} element={<CharacterGallery characters={characters} nextPage={nextPage} previousPage={previousPage}/>}></Route>
            <Route path={"/character/:id"} element = {<CharacterDetailCard characters={characters}/>}></Route>
        </Routes>

    </div>
  );
}
