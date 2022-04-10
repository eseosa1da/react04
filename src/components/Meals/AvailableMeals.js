import { useEffect, useState } from "react";
import Card from "../UI/Card";
// import { DUMMY_MEALS } from "./dummy-meals";

// import FetchMeals from "./FetchMeals";

import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      //   try {
      const response = await fetch(
        "https://react-tp-backend-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }

      console.log(loadedMeals);

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        {isLoading && <p className="classes.MealsLoading">Loading...</p>}
        {httpError && <p className="classes.MealsError">{httpError}</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
