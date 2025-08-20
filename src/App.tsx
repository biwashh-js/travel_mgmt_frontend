import { HiH1 } from "react-icons/hi2";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
  return (
    <main className="h-full w-full">
      <Router>
        <Routes>
          <Route path ='/' element={<h1>Home Page</h1>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>

    </main>
  );
};

export default App;
