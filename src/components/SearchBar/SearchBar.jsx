import { useState } from "react";

function SearchBar(props) {
  const [id, setIde] = useState("");

  const handleChange = (event) => {
    setIde(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onSearch(id);
    }
  };

  return (
    <div className=" w-full flex bg-slate-700 justify-end items-center py-3 mb-4">
      <input
        className="w-72 h-10 text-white text-lg bg-gray-800 p-2 rounded-full border border-green-500 focus:outline-none focus:ring focus:border-green-300 transition duration-200 ease-in-out"
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />
      <button
        className="ml-2 w-24 h-10 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-200 ease-in-out"
        onClick={() => props.onSearch(id)}
      >
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
