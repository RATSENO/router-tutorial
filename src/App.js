import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes} from 'react-router-dom';
import Profile from "./pages/profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile/:username" element={<Profile></Profile>}></Route>
      </Route>
      <Route path="/articles" element={<Articles></Articles>}>
        <Route path=":id" element={<Article></Article>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
