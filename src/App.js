import Home from './views/Home';
import Contact from './views/Contact';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
