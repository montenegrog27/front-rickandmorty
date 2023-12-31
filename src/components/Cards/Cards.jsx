// import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-10 text-green-500 items-center px-3 md:px-10">
      {" "}
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          character={character}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
