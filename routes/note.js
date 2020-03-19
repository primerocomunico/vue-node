const express = require("express");
const router = express.Router();

// Importar el modelo de nota
import Note from "../models/note";

// Método POST - Agregar una nota
router.post("/newnote", async (req, res) => {
  const body = req.body;
  try {
    const noteDB = await Note.create(body);
    res.status(200).json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "TÍTULO DE LA NOTA OBLIGATORIO",
      error: error
    });
  }
});

// Método GET - Mostrar una nota específica
router.get("/note/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const noteDB = await Note.findOne({ _id });
    res.status(200).json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error en GET:id",
      error: error
    });
  }
});

// Método GET - Mostrar todas las tareas
router.get("/notes", async (req, res) => {
  try {
    const noteDB = await Note.find();
    res.status(200).json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error en GET all",
      error: error
    });
  }
});

// Método DELETE - Eliminar una nota específica
router.delete("/note/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const noteDB = await Note.findByIdAndDelete({ _id });
    if (!noteDB) {
      return res.status(400).json({
        message: "Ocurrio un error y no existe el id solicitado",
        error: error
      });
    }
    res.status(200).json(noteDB);
  } catch (error) {}
});

// Método PUT - Editar una nota específica
router.put("/note/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const notaDb = await Note.findByIdAndUpdate(_id, body, { new: true });
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Exportar el router
module.exports = router;
