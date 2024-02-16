import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import login from './components/auth/login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login" exact component={login} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
