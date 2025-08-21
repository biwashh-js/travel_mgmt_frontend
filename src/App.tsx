import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";





const App = () => {
  return (
    <main className="h-full    w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home Page</div>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='*' element={<div>Page not found</div>}/>

        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
