import { jest } from '@jest/globals';
import plantController from "../../../src/controllers/plant/plantController.js";
import PlantModel from "../../../src/models/plantModel.js";

// Primero limpiamos todos los mocks
jest.clearAllMocks();

PlantModel.find=jest.fn();
PlantModel.findById=jest.fn();
PlantModel.findByIdAndDelete=jest.fn();
PlantModel.create=jest.fn();
PlantModel.findByIdAndUpdate=jest.fn();

describe("Tests de plantController", () => {
  // Limpiamos los mocks antes de cada test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("buscar todas las plantas", async () => {
    const mockPlants = [
      { _id: '1', name: 'Plant 1', description: "Description 1", image: "Image 1", family: "Family 1", cares: ["Cares 1","Cares 2"], plagues: ["Plagues 1","Plagues 2"]},
      { _id: '2', name: 'Plant 2', description: "Description 2", image: "Image 2", family: "Family 2", cares: ["Cares 3","Cares 4"], plagues: ["Plagues 3","Plagues 4"]},
      { _id: '3', name: 'Plant 3', description: "Description 3", image: "Image 3", family: "Family 3", cares: ["Cares 5","Cares 6"], plagues: ["Plagues 5","Plagues 6"]},
    ];

    // Configuramos el mock para devolver la promesa resuelta
    PlantModel.find.mockResolvedValue(mockPlants);
    
    const result = await plantController.getAll();
    
    // Verificamos que el resultado sea el esperado
    expect(result).toEqual(mockPlants);
    // Verificamos que se llamó al método find
    expect(PlantModel.find).toHaveBeenCalled();
  });
  test("buscar una planta por id", async () => {
    const mockPlant = { _id: '1', name: 'Plant 1', description: "Description 1", image: "Image 1", family: "Family 1", cares: ["Cares 1","Cares 2"], plagues: ["Plagues 1","Plagues 2"]};
    // Configuramos el mock para devolver la promesa resuelta
    PlantModel.findById.mockResolvedValue(mockPlant);
    const result = await plantController.getById("1");
    // Verificamos que el resultado sea el esperado
    expect(result).toEqual(mockPlant);
    // Verificamos que se llamó al método findById
    expect(PlantModel.findById).toHaveBeenCalled();
  });
  test("eliminar una planta por id", async () => {
    // Configuramos el mock para devolver la promesa resuelta
    PlantModel.findByIdAndDelete.mockResolvedValue();
    const result = await plantController.remove("1");
    // Verificamos que el resultado sea el esperado
    expect(result).toBeUndefined();
    // Verificamos que se llamó al método findByIdAndDelete
    expect(PlantModel.findByIdAndDelete).toHaveBeenCalled();
  });
  test("crear una planta", async () => {
    const mockPlant = { _id: '1', name: 'Plant 1', description: "Description 1", image: "Image 1", family: "Family 1", cares: ["Cares 1","Cares 2"], plagues: ["Plagues 1","Plagues 2"]};
    // Configuramos el mock para devolver la promesa resuelta
    PlantModel.create.mockResolvedValue(mockPlant);
    const result = await plantController.create("Plant 1","Description 1","Image 1","Family 1",["Cares 1","Cares 2"],["Plagues 1","Plagues 2"]);
    // Verificamos que el resultado sea el esperado
    expect(result).toEqual(mockPlant);
    // Verificamos que se llamó al método create
    expect(PlantModel.create).toHaveBeenCalled();
  });
  test("actualizar una planta", async () => {
    const mockPlant = { _id: '1', name: 'Plant 1', description: "Description 1", image: "Image 1", family: "Family 1", cares: ["Cares 1","Cares 2"], plagues: ["Plagues 1","Plagues 2"]};
    // Configuramos el mock para devolver la promesa resuelta
    PlantModel.findByIdAndUpdate.mockResolvedValue(mockPlant);
    const result = await plantController.update("1","Plant 1","Description 1","Image 1","Family 1",["Cares 1","Cares 2"],["Plagues 1","Plagues 2"]);
    // Verificamos que el resultado sea el esperado
    expect(result).toEqual(mockPlant);
    // Verificamos que se llamó al método findByIdAndUpdate
    expect(PlantModel.findByIdAndUpdate).toHaveBeenCalled();
  });
});