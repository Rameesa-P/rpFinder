import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

function Home() {
  const [recipes, setRecipes] = useState([]);

  // GET all recipes
  const loadRecipes = async () => {
    const res = await axios.get("https://rpserver.onrender.com/recipes");
    setRecipes(res.data);
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  // DELETE recipe
  const deleteRecipe = async (id) => {
    await axios.delete(`https://rpserver.onrender.com/recipes/${id}`);
    loadRecipes();
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" className="text-light fw-bold fs-3">
            <i className="fa-solid fa-store text-warning"></i>Food Recipe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Recipe Finder App</h1>
        <Link to="/add">
          <button className="btn btn-primary">Add Recipe</button>
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {Array.isArray(recipes) && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>{recipe.name}</h3>
                <p>{recipe.category}</p>
                <Link to={`/recipes/${recipe.id}`}>
                  <button className="btn btn-dark">View</button>
                </Link>{" "}
                <Link to={`/edit/${recipe.id}`}>
                  <button className="btn btn-dark">Edit</button>
                </Link>{" "}
                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>Loading or no recipes found.</p>
          )}
        </div>
      </div>

      <div className="row bg-warning p-5">
        <div className="col-lg-4">
          <h3 className="text-light">About us</h3>
          <p className="text-light">
            Healthy food provides the body with essential nutrients like
            vitamins, minerals, and fiber, which are vital for energy, growth,
            and a strong immune system, helping to prevent diseases like
            diabetes and heart problems.
          </p>
        </div>
        <div className="col-lg-2 text-light">
          <h4>Links</h4>
          <div className="mt-4">
            <Link to="/" className="text-light text-decoration-none">
             Home
            </Link>
            <br />
            <Link to="/add" className="text-light text-decoration-none">
              Add recipe
            </Link>
            <br />
            <Link to="/edit/:id" className="text-light text-decoration-none">
              Edit
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
