import { BrowserRouter as Router , Routes , Route } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
