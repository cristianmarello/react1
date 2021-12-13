//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home'


function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
