import Cards from "../components/Cards/Cards";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar/NavBar";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <>
      <NavBar />
      <div className="py-10">
        <Cards characters={favorites} />
      </div>
    </>
  );
};

export default Favorites;
