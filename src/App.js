import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SingleArticle from "./components/Singlearticle/SingleArticle";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import { UserContext } from "./contexts/User";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    name: "Enamul Ali",
    avatar_url: "https://www.computerhope.com/jargon/g/guest-user.jpg",
  });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":topic" element={<Articles />} />
          </Route>
          <Route path="/articles/id/:articleId" element={<SingleArticle />} />
          <Route path="/articles/:articleId/comments" element={<Comments />} />
          <Route path="/login" element={<Users />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
