import PlantModel from "../../models/plantModel";

/**
 * @fileoverview Controller functions for managing plant documents in the database.
 * @module controllers/plant
 */

/**
 * Retrieves all plant documents from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of plant objects.
 */
async function getAll(){
    const plants = await PlantModel.find();
    return plants;
}

/**
 * Retrieves a plant document from the database by its ID.
 *
 * @param {string} id The ID of the plant document to retrieve.
 *
 * @returns {Promise<Plant>} A promise that resolves to the plant document if found, or null if not found.
 */
async function getById(id){
    const plant = await PlantModel.findById(id);
    return plant;
}

/**
 * Creates a new plant document in the database.
 *
 * @param {string} name The name of the plant.
 * @param {string} description The description of the plant.
 * @param {string} image The image URL of the plant.
 * @param {string} family The family of the plant.
 * @param {Array<string>} [cares=[]] The list of cares of the plant.
 * @param {Array<string>} [plagues=[]] The list of plagues of the plant.
 *
 * @returns {Promise<Plant>} A promise that resolves to the created plant document.
 */
async function create(name,description,image,family,cares=[],plagues=[]){
    const plant = await PlantModel.create({name,description,image,family,cares,plagues});
    return plant;
}

/**
 * Updates an existing plant document in the database.
 *
 * @param {string} _id The ID of the plant document to update.
 * @param {string} name The name of the plant.
 * @param {string} description The description of the plant.
 * @param {string} image The image URL of the plant.
 * @param {string} family The family of the plant.
 * @param {Array<string>} [cares=[]] The list of cares of the plant.
 * @param {Array<string>} [plagues=[]] The list of plagues of the plant.
 *
 * @returns {Promise<Plant>} A promise that resolves to the updated plant document.
 */
async function update(_id,name,description,image,family,cares=[],plagues=[]){
    const plant = await PlantModel.findByIdAndUpdate(_id,{name,description,image,family,cares,plagues});
    return plant;
}

/**
 * Deletes a plant document from the database by its ID.
 *
 * @param {string} _id The ID of the plant document to delete.
 *
 * @returns {Promise<void>} A promise that resolves when the plant document is deleted.
 */
async function remove(_id){
    await PlantModel.findByIdAndDelete(_id);
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;