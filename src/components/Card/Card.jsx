// import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();
  const { character, onClose, myFavorites } = props;

  const id = character.id;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  //?crear funcion handleFavorite aca:
  function handleFavorite() {
    if (isFav === true) {
      dispatch(deleteFavorites(character.id));
      setIsFav(false);
    } else {
      dispatch(addFavorites(character));
      setIsFav(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-top text-green-500 w-180 h-340 border-3 border-solid border-green-500 rounded-lg  transition-all duration-300 border-2 hover:bg-green-400 hover:border-2 hover:border-green-800">
      <div className=" rounded-2xl  w-full pr-2 flex justify-rounded ">
        <div className="pl-2 flex w-full">
          {isFav ? (
            <button
              className=" bg-transparent border-transparent text-2xl"
              onClick={() => handleFavorite()}
            >
              ❤️
            </button>
          ) : (
            <button
              className=" bg-transparent border-transparent text-2xl"
              onClick={() => handleFavorite()}
            >
              🤍
            </button>
          )}
        </div>
        <div className="flex p-2">
          {onClose ? (
            <div className="">
              <button
                className="  justify-center items-center flex bg-red-500 text-white w-8 h-8 rounded-full text-medium font-helvetica cursor-pointer transition-all duration-200  hover:before:bg-green-300 hover:delay-100 "
                onClick={() => onClose(character.id)}
              >
                X
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <Link
        to={`/detail/${character.id}`}
        className="text-decoration-none text-green-500 hover:text-black"
      >
        <img
          src={character.image}
          alt=""
          className="rounded-xl md:max-w-[150px]"
        />

        <div className="text-x-small text-center text-decoration-none">
          <h2 className="text-center mt-30">{character.name}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Card);
