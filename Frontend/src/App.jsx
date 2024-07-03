import Header from "./Components/Header/Header";

import { Home } from "./Pages/Home/Home";


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
