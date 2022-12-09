const ListItem = (props: any) => {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>{value}</li>
  );
};

export default ListItem;
