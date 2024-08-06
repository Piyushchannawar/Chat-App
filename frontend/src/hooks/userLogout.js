// import { useState } from "react";
// import { useAuthContext } from "../context/AuthContext";
// import toast from "react-hot-toast";

// const useLogout = () => {
//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext();
//     const logout = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch("/api/auth/logout", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" }
//             });
//             const data = await res.json();
//             if (data.error) {
//                 throw new Error(data.error);
//             }
//            console.log(data);
           
//             localStorage.removeItem("chat-user");
//             setAuthUser(null);
//         } catch (error) {
//             toast.error(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
//     return { loading, logout };
// }

// export default useLogout;


import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const logout = async () => {
        console.log("Logout function called");
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log("Logout response:", data);
           
            // Remove the user from localStorage and set state to null
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            console.log("User logged out and localStorage item removed");

            // Navigate to login page
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout;
