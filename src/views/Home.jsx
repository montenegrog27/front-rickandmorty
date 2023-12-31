import Cards from "../components/Cards/Cards";
import NavBar from "../components/NavBar/NavBar";
import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";

function Home(props) {
  return (
    <div>
      <NavBar />
      <SearchBar onSearch={props.onSearch} />
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
export default Home;
