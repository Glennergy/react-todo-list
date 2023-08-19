const ListItem = (props) => {
  const deleteItem = () => {
    props.deleteHandler(props.item);
  };

  return (
    <li key={props.idx}>
      {props.item}{" "}
      <span onClick={deleteItem} class="close">
        ×
      </span>{" "}
    </li>
  );
};

export default ListItem;
