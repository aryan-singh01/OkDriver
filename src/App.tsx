import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/site/Header";

import Home from "./pages/Home/page";
import About from "./pages/About/page";
import Services from "./pages/Ser/page";
import DeveloperApi from "./pages/Dev_Api/page";
import Contact from "./pages/Contact/page";
// import More from "./components/site/More";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/developer-api" element={<DeveloperApi />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/more" element={<More />} /> */}
      </Routes>
    </BrowserRouter>
  );
}