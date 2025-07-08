const FoodItems = ({ helthyItems }) => {
  return (
    <ul className="list-group">
      {helthyItems.map((item) => (
        <li className="list-group-item itemName">
          {item}
          <button type="button" className="btn btn-info button">
            Add
          </button>
        </li>
      ))}
      ;
    </ul>
  );
};
export default FoodItems;
