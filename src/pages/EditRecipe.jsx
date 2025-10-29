import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    ingredients: "",
    instructions: "",
    image: ""
  });

  useEffect(() => {
    axios.get(`https://rpserver.onrender.com${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/recipes/${id}`, recipe);
    navigate("/");
  };

  return (
    
    <div style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center", backgroundImage:"url('https://t3.ftcdn.net/jpg/11/47/77/88/360_F_1147778833_qD90YBrzdd6Z9MhWs1pmP6hqzwQVEVAt.jpg' )", height:500,
    backgroundPosition:"cover"}}>
      <h2 className="text-light">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input className="mt-3" name="name" value={recipe.name} onChange={handleChange} /><br />
        <input className="mt-3" name="category" value={recipe.category} onChange={handleChange} /><br />
        <textarea className="mt-3" name="ingredients" value={recipe.ingredients} onChange={handleChange} /><br />
        <textarea className="mt-3" name="instructions" value={recipe.instructions} onChange={handleChange} /><br />
        <input className="mt-3" name="image" value={recipe.image} onChange={handleChange} /><br />
        <button className=" btn btn-primary mt-3"  type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}

export default EditRecipe;
