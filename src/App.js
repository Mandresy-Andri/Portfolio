import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (  
    <Router>
    <NavigationBar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
