const ListItem = (props) => {
  const deleteItem = () => {
    props.deleteHandler();
  };

  return (
    <li key={props.key}>
      {props.item}{" "}
      <span onClick={deleteItem} class="close">
        ×
      </span>{" "}
    </li>
  );
};

export default ListItem;
