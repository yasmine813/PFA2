import mongoose from 'mongoose';
const { Schema } = mongoose;

const trailSchema = new mongoose.Schema({
    name: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    type: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    city: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    numberP: {
        type: Number, // Modifier "number" en "Number"
        required: true,
    },
    photos: {
        type: [String], // Modifier "string" en "String"
        required: true
    },
    description: {
        type: String, // Modifier "string" en "String"
        required: true,
    },
    price: {
        type: Number, // Modifier "number" en "Number"
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.model("Trail", trailSchema); // Exporter le modèle en tant que "Trail"
