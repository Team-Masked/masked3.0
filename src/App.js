import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/pages/Home';
// import Products from './components/pages/Products';
// import About from './components/pages/About';
import Footer from './components/Footer';
import Cakes from './components/Cakes';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Cakes />
      <Footer />
    </div>
  );
}

export default App;