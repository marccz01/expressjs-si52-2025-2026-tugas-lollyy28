import UserModel from "../model/userModel.js";

export const privateProfile = async (req, res) => {
    try {
        const userId = req.user?.id;

        const user = await UserModel.findOne(userId);

        if (!user) {
            res.status(404).json({
            message : "user not found",
            data : null,
        });
        }
        res.status(200).json({
            message : "Private profile berhasil di akses",
            data : null,
        });
    } catch (error){
        res.status(500).json({
            message : error.message,
            data : null,
        });
    }
};