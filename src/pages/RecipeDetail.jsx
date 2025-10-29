import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://rpserver.onrender.com/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{recipe?.name}</h2>
      <img src={recipe?.image} alt={recipe?.name} width="300" />
      <p><b>Category:</b> {recipe?.category}</p>
      <p><b>Ingredients:</b> {recipe?.ingredients}</p>
      <p><b>Instructions:</b> {recipe?.instructions}</p>
      <Link to="/"><button>Back</button></Link>
      
    </div>
  );
}

export default RecipeDetail;
