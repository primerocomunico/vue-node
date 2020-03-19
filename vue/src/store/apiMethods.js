import axios from "axios";
import { Store, mapState } from "vuex";
//axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.baseURL = "https://tareas-vue-node.herokuapp.com/api";

export default {
  namespaced: true,
  state: {
    notes: [],
    note: { id: "", title: "", description: "" },
    editForm: false,
    alert: { type: "warning", message: "", flag: false }
  },
  mutations: {
    // Mostrar todas las notas
    setNotes(state, payload) {
      state.notes = payload;
    },
    // Mostrar una nota
    setNote(state, payload) {
      state.editForm = true;
      state.note = payload;
    },
    // Actualizar una nota
    updateNoteFront(state, payload) {
      const index = state.notes.findIndex(item => item._id == payload._id);
      state.notes[index].title = payload.title;
      state.notes[index].description = payload.description;
    },
    // Borrar una nota
    deleteFrontNote(state, id) {
      // findIndex - función para encontrar el index en el array notas comparado con res
      const index = state.notes.findIndex(item => item._id == id);
      // Operación para actualizar el array (en el front) sin sobrecargas la app
      state.notes.splice(index, 1);
    },
    // Acción del botón cancel y resetar valores
    cancelEdit(state) {
      state.editForm = false;
      state.note.title = "";
      state.note.description = "";
      state.note.id = "";
    },
    // Obtener los datos del alert
    catchAlert(state, payload) {
      state.alert.type = payload.type;
      state.alert.message = payload.message;
      state.alert.flag = true;
    }
  },
  actions: {
    // GET - Para mostrar todas las notas
    getNotes({ commit }) {
      axios
        .get("/notes")
        .then(res => {
          commit("setNotes", res.data);
          commit("cancelEdit");
        })
        .catch(e => {
          commit("catchAlert", {
            type: "error",
            message: "Hubo un error al cargar la página, vuelve a intentarlo"
          });
        });
    },
    // POST - Para crear una nueva nota
    adNote({ commit, dispatch }, note) {
      axios
        .post("/newnote", note)
        .then(res => {
          dispatch("getNotes");
          commit("catchAlert", {
            type: "success",
            message: `La nota "${res.data.title}" se ha añadido correctamente`
          });
        })
        .catch(e => {
          commit("catchAlert", {
            type: "error",
            message: `ERROR ${e.response.status} - ${e.response.data.error.message}`
          });
        });
    },
    // Obtiene el dato de una nota específica para posteriormente ser editada
    activeEdit({ commit }, note) {
      axios
        .get(`/note/${note._id}`)
        .then(res => {
          commit("setNote", res.data);
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    // PUT - Editar una nota especifica
    updateNote({ commit }, note) {
      axios
        .put(`/note/${note._id}`, note)
        .then(res => {
          commit("updateNoteFront", res.data);
          commit("cancelEdit");
          commit("catchAlert", {
            type: "success",
            message: `La nota "${res.data.title}" fue editada satisfactoriamente`
          });
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    // DELETE - Borrar una nota especifica
    deleteNote({ commit }, id) {
      axios
        .delete(`/note/${id}`)
        .then(res => {
          commit("deleteFrontNote", res.data._id);
          commit("catchAlert", {
            type: "warning",
            message: `Has eliminado la nota "${res.data.title}"`
          });
        })
        .catch(e => {
          console.log(e.response);
        });
    }
  }
};
