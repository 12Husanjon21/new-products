import React, { useState, useEffect } from 'react';
import Header from './components/header';

const ratings = ["1", "2", "3", "4", "5"];
const colors = ["Black", "Silver", "Blue", "Lime", "Red", "White", "Purple", "Gray"];

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      let url = "http://localhost:3000/products?";
      if (selectedRating) {
        url += `rating=${selectedRating}`;
        if (selectedColor) {
          url += `&color=${selectedColor}`;
        }
      } else if (selectedColor) {
        url += `color=${selectedColor}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, [selectedRating, selectedColor]);

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className='box-wrapper'>
      <Header />
      <div className="container">
        <aside className='in-box'>
          <h2>Rating</h2>
          {ratings.map((r, index) => (
            <div className='rating-box' key={index}>
              <input
                onChange={handleRatingChange}
                name='rating'
                type="radio"
                value={r}
                id={r}
                checked={selectedRating === r}
              />
              <label htmlFor={r}>{r} star</label>
            </div>
          ))}
          <h2>Color</h2>
          {colors.map((c, index) => (
            <div className='color-box' key={index}>
              <input
                onChange={handleColorChange}
                name='color'
                type="radio"
                value={c}
                id={c}
                checked={selectedColor === c}
              />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </aside>

        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <img src={p.image} alt="product" />
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <h3 style={{color: `${p.color}`}}>{p.color}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
