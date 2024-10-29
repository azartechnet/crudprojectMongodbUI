// FoodItems.js
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodItems() {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Our Food Items</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {foodList.map((val, key) => (
          <div className="card m-2" style={{ width: '18rem' }} key={key}>
            <div className="card-body">
              <h5 className="card-title">{val.foodName}</h5>
              <p className="card-text">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
