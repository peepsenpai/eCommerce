import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user", "admin", "root"]
    }
},
    {
        timestamps: true
    }
);

export default mongoose.models.User || mongoose.model('User', UserSchema)