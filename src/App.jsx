import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Preview from "./components/Preview";
import ProfileDetails from "./components/ProfileDetails";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import DashBoard from "./components/DashBoard";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { account } from "./conf/config";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "true") {
      let darkmode = document.querySelector("html");
      darkmode.classList.add("dark");
      setDarkMode(mode);
      localStorage.setItem("mode", mode);
    } else {
      let darkmode = document.querySelector("html");
      darkmode.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("mode", false);
    }
  }, []);
  useEffect(() => {
    const deletePreviousSession = async () => {
      await account.deleteSession("current");
    };
    deletePreviousSession();
  }, []);
  const addDarkMode = () => {
    let darkmode = document.querySelector("html");
    darkmode.classList.toggle("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("mode", !darkMode);
  };
  const user = useSelector((state) => state.AuthenticationReducer.userData);
  return (
    <>
      <Header addDarkMode={addDarkMode} darkMode={darkMode} />
      <Routes>
        <Route element={<ProtectedRoutes isAuthenticated={user} />}>
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
