import { useState } from "react";

const Header = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.clickHandler(inputText);
  };

  /** PART 2 : Store the input Text in state*/
  const [inputText, setInput] = useState("");

  return (
    <header className="header">
      <h2 style={{ margin: "5px" }}>{props.title}</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        onChange={(evt) => {
          setInput(evt.target.value);
          console.log(inputText);
        }}
      />
      <button type="submit" onClick={handleSubmit} className="addBtn">
        Add
      </button>
    </header>
  );
};

export default Header;
