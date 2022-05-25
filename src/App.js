import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import MyHistory from "./Pages/Dashboard/MyHistory";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import Payment from "./Pages/Dashboard/Payment";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route
            path="history"
            element={
              <RequireAdmin>
                <MyHistory></MyHistory>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="adddoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="managedoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
