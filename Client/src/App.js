import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";
import Error from "./Components/Error";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./Components/UserReducer";


export const  userContext= createContext()

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
    <userContext.Provider  value={{state,dispatch}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
