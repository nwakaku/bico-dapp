import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Second from "./components/Second";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Second />} />
      </Routes> */}
      <Landing/>
      
    </div>
  );
}

export default App;
