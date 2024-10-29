

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FoodItems from './FoodItems'; // Import FoodItems component
import './Home';


function App() {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addFoodData = () => {
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      description: description
    });
  };

  const updateFoodData = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName
    });
  };

  const deleteData = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <Router>
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">CRUD App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> {/* Link to Home */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-food">Add Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-food">View Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food-items">Food Items</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-4">
          <Routes>
            <Route path="/" element={<h1 className="text-center">Welcome to the CRUD App</h1>} />
            <Route path="/add-food" element={
              <div>
                <h1 className="text-center">Add Food</h1>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Food name"
                    required
                    onChange={(event) => setFoodName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Description"
                    required
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <button className="btn btn-primary" onClick={addFoodData}>Submit</button>
              </div>
            } />
            <Route path="/view-food" element={
              <div>
                <h3 className="text-center">Get Data from Database</h3>
                <table className="table table-bordered mt-3">
                  <thead className="thead-dark">
                    <tr>
                      <th>Food Name</th>
                      <th>Food Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodList.map((val, key) => (
                      <tr key={key}>
                        <td>{val.foodName}</td>
                        <td>{val.description}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Update food name"
                            onChange={(event) => setNewFoodName(event.target.value)}
                          />
                          <button className="btn btn-warning mt-2" onClick={() => updateFoodData(val._id)}>Edit</button>
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={() => deleteData(val._id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            } />
            <Route path="/food-items" element={<FoodItems />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
