import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    color: white;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  const [ character, setCharacter ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a  side effect in a component, you want to think about which state and/or props it should sync up with, if any.
  const fetchCharacter = () => {
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      setCharacter(response.data);
    })
    .catch(error => console.log(error));
  }

  useEffect(fetchCharacter, []);

  // console.log("character " + character[1])

  const Character = (props) => {
    return (
      character.map(person => (
        <div className="Character">
         <h2>{person.name}</h2>
         <div className="Info">
          <list>
            <li>Height: {person.height} inches</li>
            <li>Mass: {person.mass} kg</li>
            <li>Hair color: {person.hair_color}</li>
            <li>Eye color: {person.eye_color}</li>
            <li>Gender: {person.gender}</li> 
          </list>
         </div>
      </div>
      ))
    )
  }

  return (
    <div className="App">
      <React.Fragment>
        <GlobalStyle />
      </React.Fragment>
      <h1 className="Header">Characters</h1>
      <div className="Characters">
        <Character key={character.name} />
      </div>
    </div>
  );
}

export default App;
