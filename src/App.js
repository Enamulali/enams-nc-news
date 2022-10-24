import "./App.css";
import { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SingleArticle from "./components/Singlearticle/SingleArticle";
import Comments from "./components/Comments/Comments";
import ErrorPage from "./components/Error/ErrorPage";
import Users from "./components/Users/Users";
import { UserContext } from "./contexts/User";
import { GrLinkTop } from "react-icons/gr";
import Profile from "./components/Profile";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Guest",
    name: "Guest",
    avatar_url: "https://www.computerhope.com/jargon/g/guest-user.jpg",
  });

  const nav = useRef(null);

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: "smooth",
    });
  };

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div ref={nav} />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div className="margin" />
        <button className="scroll-btn" onClick={() => handleScroll(nav)}>
          <GrLinkTop className="scroll" />
        </button>
      </UserContext.Provider>
    </div>
  );
}

export default App;
