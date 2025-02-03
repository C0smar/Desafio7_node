import { readFile } from 'fs/promises';

let cafes;

const loadCafes = async () => {
    try {
        const data = await readFile('./data/cafes.json', 'utf-8');
        cafes = JSON.parse(data);
        console.log("Cafes cargados correctamente:", cafes); // Depuración
    } catch (err) {
        console.error('Error al leer el archivo JSON:', err);
    }
};


loadCafes();


export const getCafes = (req, res) => {
    res.status(200).json(cafes);
};


export const getCafeById = (req, res) => {
    const { id } = req.params;
    const cafe = cafes.find(c => c.id == id);
    if (cafe) res.status(200).json(cafe);
    else res.status(404).json({ message: "No se encontró ningún café con ese id" });
};


export const addCafe = (req, res) => {
    const cafe = req.body;
    const { id } = cafe;
    const existeUnCafeConEseId = cafes.some(c => c.id == id);
    if (existeUnCafeConEseId) res.status(400).json({ message: "Ya existe un café con ese id" });
    else {
        cafes.push(cafe);
        res.status(201).json(cafes);
    }
};


export const updateCafe = (req, res) => {
    const cafe = req.body;
    const { id } = req.params;
    if (id != cafe.id) {
        return res.status(400).json({
            message: "El id del parámetro no coincide con el id del café recibido",
        });
    }
    const cafeIndexFound = cafes.findIndex(c => c.id == id);
    if (cafeIndexFound >= 0) {
        cafes[cafeIndexFound] = cafe;
        res.json(cafes);
    } else {
        res.status(404).json({ message: "No se encontró ningún café con ese id" });
    }
};


export const deleteCafe = (req, res) => {
    const jwt = req.header("Authorization");
    if (jwt) {
        const { id } = req.params;
        const cafeIndexFound = cafes.findIndex(c => c.id == id);
        if (cafeIndexFound >= 0) {
            cafes.splice(cafeIndexFound, 1);
            res.json(cafes);
        } else {
            res.status(404).json({ message: "No se encontró ningún café con ese id" });
        }
    } else {
        res.status(400).json({ message: "No recibió ningún token en las cabeceras" });
    }
};