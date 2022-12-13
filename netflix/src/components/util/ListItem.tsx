const ListItem = (props: any) => {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li>{value}</li>
  );
};

export default ListItem;
