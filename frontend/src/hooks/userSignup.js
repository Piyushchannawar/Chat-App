import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const userSignup = () => {
  const [loading,setLoading] = useState(false);
const {setAuthUser} = useAuthContext(); 

  const signup = async({fullname,username,password,conformpassword,gender})=>{
      const success = handleInputErrors({fullname,username,password,conformpassword,gender});
      if(!success) return;
     
      setLoading(true);
      try {
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({fullname,username,password,conformpassword,gender})
      })
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error);
      }
      
      // localstorage
      localStorage.setItem("chat-user",JSON.stringify(data));
      // context
      setAuthUser(data);






      console.log(data);
      
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false);
      }
  }
  return {loading, signup}
}

export default userSignup


function handleInputErrors({fullname,username,password,conformpassword,gender}) {
	if (!fullname || !username || !password || !conformpassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== conformpassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}
    return true;
}