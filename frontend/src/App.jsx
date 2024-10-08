import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const {authUser} = useAuthContext();
  return (
   <div className="p-4  flex items-center justify-center bg-gradient-to-r from-gray-800 to-black h-screen">
     <Routes>
     <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
      <Route path="/login" element={authUser ? <Navigate to="/" /> :<Login/>}/>
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp/>}/>

     </Routes>
     <Toaster/>
   </div>
  )
}