import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";





const App = () => {
  return (
    <main className="h-full    w-full">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<h1>Home Page</h1>}/> */}
          <Route path="/" element={<Login/>} />
          <Route path='/sign-up' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
