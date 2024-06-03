import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import ShopDetailsPage from './Pages/ShopDetailsPage';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shopDetail" element={<ShopDetailsPage />} />
          <Route path="contact" element={<Contact />} />
          </Routes>
          </Router>
    </div>
  );
}

export default App;
