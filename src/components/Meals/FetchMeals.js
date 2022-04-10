// import { useCallback } from "react";

const FetchMeals = async () => {
  //   try {
  const response = await fetch(
    "https://react-tp-backend-default-rtdb.firebaseio.com/meals.json"
  );
  // if (!response.ok) {
  //   throw new Error("Something went wrong!");
  // }

  const data = await response.json();

  console.log(data);

  const loadedMeals = [];

  for (const key in data) {
    loadedMeals.push({
      id: key,
      description: data[key].description,
      name: data[key].name,
      price: data[key].price,
    });
  }

  console.log(loadedMeals);

  // const transformedMovies = data.results.map((movieData) => {
  //   return {
  //     id: movieData.episode_id,
  //     title: movieData.title,
  //     openingText: movieData.opening_crawl,
  //     releaseDate: movieData.release_date,
  //   };
  // });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
};

export default FetchMeals;
