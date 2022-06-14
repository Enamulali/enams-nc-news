import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
