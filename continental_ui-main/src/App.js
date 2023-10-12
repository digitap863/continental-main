import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Migrate from "./Pages/Migrate";
import Contact from "./Pages/Contact";
import Countries from "./Pages/Countries";
import Blogs from "./Pages/Blogs";
import TestPreparation from "./Pages/TestPreparation";
import ECounselling from "./Pages/ECounselling";
import Services from "./Pages/Services";
import CustomCountry from "./Pages/CustomCountry";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Migrate />} path="/study-abroad" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Countries />} path="/country/:countryName" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<TestPreparation />} path="/testpreperation" />
          <Route element={<ECounselling />} path="/counselling" />
          {/* <Route element={<SchenganPage />} path="/schengen-visa" /> */}
          <Route element={<Services />} path="/services" />
          <Route element={<CustomCountry />} path="/canada" />
          <Route element={<CustomCountry />} path="/uk" />
          <Route element={<CustomCountry />} path="/new-zealand" />
          <Route element={<CustomCountry />} path="/australia" />
          <Route element={<CustomCountry />} path="/usa" />
          <Route element={<CustomCountry />} path="/ireland" />
          <Route element={<CustomCountry />} path="/schengen-visa" />
       </Routes>
      </Router>
    </>
  );
}

export default App;
