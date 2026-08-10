import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";

// Components
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

// Pages
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import WelcomePage from "./pages/welcomepage";

const AppContent = () => {
  const location = useLocation();

  // Welcome page is "/"
  const isWelcomePage = location.pathname === "/";

  return (
    <>
      <CustomCursor />  

      {/* Navbar  */}
      {!isWelcomePage && (
        <div className="mb-20">
          <Navbar />
        </div>
      )}

      <Routes>
        {/* Welcome page */}
        <Route path="/" element={<WelcomePage />} />

        {/*  pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      {!isWelcomePage && (
        <div className="mt-10">
          <Footer />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;