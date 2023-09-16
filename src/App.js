import "./App.css";
import Detail from "./views/Detail";
import Home from "./views/Home";
import About from "./views/About";
import Favorites from "./views/Favorites";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";

import axios from "axios";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
const URL = "https://api-aws-rickandmorty-production.up.railway.app/";
function App() {
  const [characters, setCharacters] = useState([]);

  async function searchHandler(id) {
    if (!Number(id) || id > 824 || id < 1) {
      alert("Debe buscar un numero del 1 al 824");
    } else {
      try {
        let found1 = characters.find((c) => c.id === Number(id));

        if (!found1) {
          const response = (await axios.get(` ${URL}character/${id}`)).data;

          if (response.name) {
            setCharacters((oldChars) => [response, ...oldChars]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onClose(id) {
    let found = characters.find((char) => char.id === id);
    let deleted = characters.filter((char) => char.id !== found.id);
    setCharacters(deleted);
  }

  return (
    <Authenticator className="  mt-10 ">
      {() => (
        <main>
          <div className="App ">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route exact path="/" element={<Landing />} />
              <Route
                path="/home"
                element={
                  <Home
                    characters={characters}
                    onClose={onClose}
                    onSearch={searchHandler}
                  />
                }
              />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorites" element={<Favorites />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
