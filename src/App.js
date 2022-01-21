import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./components/contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/services" element={<Services></Services>} />
            <Route
              path="/service/:serviceId"
              element={
                <PrivateRoute>
                  <Detail></Detail>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/contact-us" element={<Contact></Contact>} />
            <Route
              path="/events"
              element={
                <PrivateRoute>
                  <Events></Events>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
