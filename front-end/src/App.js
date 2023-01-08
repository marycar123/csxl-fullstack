import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserAvatar from './components/UserAvatar';
import Link from "./components/link/Link"
// TODO: import components

const NAME = "MC";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #e66465, #9198e5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Poppins', sans-serif;
  gap: 16px;
`

const StyledH2 = styled.h2`
  margin: 0;
`

function App() {
  // TODO: fetch links from API and store them to display on our page!
  const [links, setLinks] = useState([]);

  function fetchLinks() {
    fetch("http://127.0.0.1:8000/api/links")
    .then(result => result.json())
    .then(result =>{
      setLinks(result);
    })
  }

  useEffect(()=>{
    fetchLinks();
    console.log("we fetched our links")
  }, [])

  /*let links = [
    {url: "https://www.google.com", display_name: "google"},
    {url: "https://www.youtube.com", display_name: "youtube"},
    {url: "https://www.washingtonpost.com/crossword-puzzles/daily/", display_name: "crossword"}
];*/
  // TODO: finish returning
  return (
    <StyledApp>
      <StyledH2>{NAME}'s XLINKS</StyledH2>
      <UserAvatar alt = "mood" src = "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg"/>
      {links.map(i => 
      (<Link url={i.url} display_name={i.display_name} />))}
    </StyledApp>
  );
}

export default App;
