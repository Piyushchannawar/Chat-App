import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res)=>{
    try {
        
    const loggedInUserId = req.user._id;

    const filterUser = await User.find({_id: {$ne: loggedInUserId}}).select("-password");


    res.status(200).json(filterUser);


    } catch (error) {
        console.error("Error in getUserForSidebar", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}