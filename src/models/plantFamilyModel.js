import mongoose from "mongoose";

const plantFamilySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    plants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant'
    }]
       
});

const PlantFamilyModel = mongoose.model("PlantFamily", plantFamilySchema);

export default PlantFamilyModel;