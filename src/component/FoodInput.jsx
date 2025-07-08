const FoodInput = ({handleInput}) => {
    return (
      <input
        type="text"
        placeholder="Enter Food Name Here"
        onKeyDown={(event) => handleInput(event)}
      />
    );
};
export default FoodInput ;
