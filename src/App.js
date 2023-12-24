import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Component/Header";
import FeedbackList from "./Component/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import { useState } from "react";
import FeedBackRating from "./Component/FeedBackStats";
import FeedbackForm from "./Component/FeedbackForm";
import About from "./Pages/About";
import Abouticon from "./Component/Shared/Abouticon";
import Post from "./Component/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedBack, setFeedBack] = useState(FeedbackData);

  const comment = [
    { id: 1, text: "This is line 1" },
    { id: 2, text: "This is line 2" },
    { id: 3, text: "This is line 3" },
    { id: 4, text: "This is line 4" },
  ];

  return (
    <FeedbackProvider>
      <Router className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackRating />
                  <FeedbackForm />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/post/:name" element={<Post />} />
          </Routes>
          <Abouticon />
        </div>

        {/* <div>
{
  comment.map((name, index) =>(
    <div key={name.id}>{name.text}</div>
    // We have to provide a unique key, we can also use index as a key
    ))
  }
</div> */}
      </Router>
    </FeedbackProvider>
  );
}

export default App;
