import { useLoaderData } from "react-router";

const Recipes = () => {
  const data = useLoaderData().data;
  console.log(data, "Recipes.jsx", 6);
  return (
    <div>
      <h1>Total Recipes: {data.length}</h1>
    </div>
  );
};

export default Recipes;
