import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    ingredients: "",
    instructions: "",
    image: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://rpserver.onrender.com/recipes", recipe);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", backgroundImage:"url('https://t3.ftcdn.net/jpg/11/47/77/88/360_F_1147778833_qD90YBrzdd6Z9MhWs1pmP6hqzwQVEVAt.jpg' )", height:500,
    backgroundPosition:"cover"}}>


      <h2 className="text-light">Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input className="mt-3" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input className="mt-3" name="category" placeholder="Category" onChange={handleChange} required /><br />
        <textarea className="mt-3" name="ingredients" placeholder="Ingredients" onChange={handleChange} /><br />
         <textarea className="mt-3" name="instructions" placeholder="Instructions" onChange={handleChange} /><br />
           <input className="mt-3" name="image" placeholder="Image URL" onChange={handleChange} /><br />
        <button className="mt-3" type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddRecipe;
