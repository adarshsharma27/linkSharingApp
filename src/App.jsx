import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Preview from "./components/Preview";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
