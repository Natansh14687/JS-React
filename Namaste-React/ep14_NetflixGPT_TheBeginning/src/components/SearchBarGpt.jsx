import React, { useRef } from "react";

const SearchBarGpt = () => {
  const searchedText = useRef();
  const handleClick = async () => {
    console.log(searchedText.current.value);

    const response = await gogglegeminiai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: "Why is the sky blue?",
    });
    console.log(response.text);

  };
  return (
    <div className="flex justify-center pt-[7%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchedText}
          type="text"
          name=""
          id=""
          placeholder="What would you like to watch today ?"
          className="bg-white m-4 col-span-9 p-2 rounded"
        />
        <button
          className="bg-red-700 col-span-3 m-4 p-2 ml-2 rounded-xl text-white font-bold cursor-pointer"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarGpt;
