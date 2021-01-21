const FruitFilter = props => {
  return (
<div>
  <label htmlFor="fruit-filter">Filter these Fruits:</label>
  <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
    </div>
    )
}

export default FruitFilter;

//FruitFilter renders a single input. It's value and onChange callbacks
// will be both be set by the container component.