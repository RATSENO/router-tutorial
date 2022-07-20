import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes} from 'react-router-dom';
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/profile/:username" element={<Profile></Profile>}></Route>
    </Routes>
  );
}

export default App;
