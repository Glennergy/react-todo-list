import ListItem from "./ListItem";

const List = (props) => {
  const deleteHandler = (item) => {
    props.removeItem(item);
  };

  return (
    <ul id="myUL">
      {props.items.map((items, index) => (
        <ListItem
          key={index}
          item={items}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
    </ul>
  );
};

export default List;
