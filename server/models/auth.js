import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: { type: String, requied: true },
        email: { type: String, requied: true },
        password: { type: String, requied: true },
        about: { type: String, requied: true },
        tags: { type: [String] },
        joinedon: { type: Date, default: Date.now }
    }
)

export default mongoose.model("User", userSchema);