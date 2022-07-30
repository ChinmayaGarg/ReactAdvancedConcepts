export const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  //https://stackoverflow.com/questions/71282886/destructuring-in-react-props-dont-understand-resourcename-item-ins
  // https://riptutorial.com/reactjs/example/13689/passing-down-props-using-spread-operator
  // pass props to a component using spread operator
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
