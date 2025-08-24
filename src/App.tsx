import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import NotFound from "./pages/pageNotFound";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";





const App = () => {
  return (
    <main className="h-full  w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </main>
  );
};

export default App;
