import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/home';
import About from './component/About';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
