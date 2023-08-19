import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const listItems = [
    "Hit the gym",
    "Pay bills",
    "Meet George",
    "Buy eggs",
    "Read a book",
    "Organize office",
  ];

  {
    /** PART 2: Add listItems into state*/
  }
  const [items, setItems] = useState(listItems);

  const clickHandler = (item) => {
    const newItem = { item };
    console.log(newItem);
    setItems([...items, item]);
    console.log(items);
  };

  const removeItem = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };

  return (
    <>
      {/** PART 2: Pass clickHandler to the Header */}
      <Header title="My Notes" clickHandler={clickHandler} />
      <List items={items} removeItem={removeItem} />
    </>
  );
}

export default App;
