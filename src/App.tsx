import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";





const App = () => {
  return (
    <main className="h-full    w-full">
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
