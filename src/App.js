import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
