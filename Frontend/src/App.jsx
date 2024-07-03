import Header from "./Components/Header/Header";

import { Home } from "./Pages/Home/Home";
// import { PersonalDetails } from "./components/PersonalDetails/PersonalDetails";
// import { BrowswrRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="bg-[#f3f4f6]">
      <header>
        <Header />
      </header>

      <Home />
    </div>
    // </Router>
  );
}

export default App;
