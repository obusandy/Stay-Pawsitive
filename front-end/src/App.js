import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/ContactUs";
import Chat from "./pages/Chat";
import List from "./pages/List";
import Adopt from "./pages/Adopt";
import BookAppointment from "./pages/BookAppointment";
import Tips from "./pages/Tips";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/list" element={<List />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/book-appointment/:id" element={<BookAppointment />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
