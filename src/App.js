import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/service/:serviceId" element={<Detail></Detail>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/contact-us" element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
