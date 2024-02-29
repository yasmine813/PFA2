import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String, // Modifier "string" en "String"
        required: true,
        unique:true,
    },
    email: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    password: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{timestamps: true}
);

export default mongoose.model("user", userSchema); // Exporter le modèle en tant que "user"
