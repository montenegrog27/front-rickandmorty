import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
const URL = "https://api-aws-rickandmorty-production.up.railway.app/";

function Detail() {
  const [character, setCharacter] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetch(` ${URL}character/${params.id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [params.id]);

  return (
    <>
      <NavBar />
      <div className="  flex justify-center w-full mx-1 mt-10  shadow-md">
        <div className="flex flex-col bg-gradient-to-r rounded-lg items-center md:w-[600px] from-green-300 via-green-500 to-green-600 p-8">
          <img
            src={character.image}
            alt={character.name}
            className="w-40 h-40 rounded-full border-4 border-white mb-4"
          />
          <h3 className="text-2xl font-semibold text-white mb-2">
            {character.name}
          </h3>
          <p className="text-lg text-white mb-2">{character.status}</p>
          <p className="text-lg text-white mb-2">{character.species}</p>
          <p className="text-lg text-white mb-2">{character.gender}</p>
          <p className="text-lg text-white mb-2">
            Origin: {character.origin?.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Detail;
