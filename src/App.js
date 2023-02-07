
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCountries from './components/AllCountries';
import Population from './components/Population';
import Population2 from './components/Population2';
import Population3 from './components/Population3';
import Population4 from './components/Population4';

function App() {
  return (
    <div className="App App-header">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllCountries />} />
          <Route exact path="/populationunder10" element={<Population />} />
        <Route exact path="/populationunder1M" element={<Population2 />} />
        <Route exact path="/populationunder10M" element={<Population3 />} />
        <Route exact path="/populationunder100M" element={<Population4 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
