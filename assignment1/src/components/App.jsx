import { useState } from 'react';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const handleToggle = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <p>Hello, {name || "Guest"}</p>
      </div>

      <button onClick={handleToggle}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <hr />

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;