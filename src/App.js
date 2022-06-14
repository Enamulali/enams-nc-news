import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SingleArticle from "./components/Singlearticle/SingleArticle";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":topic" element={<Articles />} />
        </Route>

        <Route path="/articles/id/:id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
