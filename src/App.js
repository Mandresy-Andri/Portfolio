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
    <Route path='/blog' element={<BlogArticle title='Blog Article' content='Personal Blogs' author='Andriamasinoro Mandresy' date='2023-05-10' tags={['blog', 'portfolio']}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
