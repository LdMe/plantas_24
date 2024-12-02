import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
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
    family:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlantFamily'
    },
    cares:[{
        type: String
    }],
    plagues:[{
        type: String
    }]
    
});

const PlantModel = mongoose.model("Plant", plantSchema);

export default PlantModel;