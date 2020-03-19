const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Estructura de datos
const noteSchema = new Schema(
  {
    title: { type: String, required: [true, "Título obligatorio"] },
    description: String,
    userId: String,
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
  },
  {
    collection: "usernotes"
  }
);

// Conversión a modelo de mongoDB
const Note = mongoose.model("Note", noteSchema);
export default Note;
