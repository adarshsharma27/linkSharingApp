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

function App() {
  const user = useSelector((state) => state.AuthenticationReducer.userData);
  return (
    <>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes isAuthenticated={user} />}>
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
