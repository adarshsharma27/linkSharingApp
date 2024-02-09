import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Preview from "./components/Preview";
import ProfileDetails from "./components/ProfileDetails";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Toaster/>
      <Footer />
    </>
  );
}

export default App;
