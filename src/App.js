import Home from './views/Home';
import Contact from './views/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
