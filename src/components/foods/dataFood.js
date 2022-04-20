import Card from "../card/card.js";
import classes from "./datafood.module.css";
import ItemFoods from "./foodsItem/foodItem.js";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Finest fish and veggies",
    price: 1000,
  },
  {
    id: "m2",
    name: "Chicken",
    description: "A german specialty!",
    price: 2000,
  },
  {
    id: "m3",
    name: "Hotdog",
    description: "American, raw, meaty",
    price: 5000,
  },
  {
    id: "m6",
    name: "Hamburger",
    description: "Healthy...and green...",
    price: 3000,
  },

  {
    id: "m7",
    name: "Ayam Goreng",
    description: "Ayam Goreng Danil dan Bona",
    price: 6000,
  },

  {
    id: "m5",
    name: "Steak",
    description: "Steak Danil dan Bona",
    price: 4000,
  },
];

const DataFood = (props) => {
  const dataFoods = DUMMY_MEALS.map((food) => (
    <ItemFoods
      nama={food.name}
      id={food.id}
      deskripsi={food.description}
      key={food.id}
      harga={food.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{dataFoods}</ul>
      </Card>
    </section>
  );
};

export default DataFood;
