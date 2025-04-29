import './App.css';
import BlogArticle from './components/Blog';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (  
    <Router>
    <NavigationBar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/blog' exact element={<BlogArticle/>}/>
    </Routes>
  </Router>
  );
}

export default App;
