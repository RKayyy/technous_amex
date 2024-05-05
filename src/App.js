import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import SustainableStocks from './pages/SustainableStocks';
import EcoTokenMarketplace from './pages/EcoTokenMarketplace';
import SustainableBudgeting from './pages/SustainableBudgeting';
import DigitalDocuments from './pages/DigitalDocuments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/digitaldocuments" element={<DigitalDocuments />} />
          <Route path="/sustainablestocks" element={<SustainableStocks />} />
          <Route path="/ecotokenmarketplace" element={<EcoTokenMarketplace />} />
          <Route path="/sustainablebudgeting" element={<SustainableBudgeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
