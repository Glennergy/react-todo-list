import { useState } from "react";

const Header = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.clickHandler(e.target.myInput.value);
  };
  {
    /** PART 2 : Store the input Text in state*/
    const [inputText, setInputText] = useState("");
  }

  return (
    <header className="header">
      <h2 style={{ margin: "5px" }}>{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="myInput" placeholder="Title..." />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </header>
  );
};

export default Header;
