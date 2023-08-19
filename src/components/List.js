import ListItem from "./ListItem";

const List = (props) => {
  const deleteHandler = (item) => {
    props.removeItem(item);
    console.log(item);
  };

  return (
    <ul id="myUL">
      {props.items.map((items, index) => (
        <ListItem idx={index} item={items} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
};

export default List;
