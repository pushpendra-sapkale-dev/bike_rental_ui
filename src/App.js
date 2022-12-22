import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Home />
    </BrowserRouter>
  );
}

export default App;
