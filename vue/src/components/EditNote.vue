<template>
  <div>
    <!--Begin form Edit note-->
    <v-row>
      <v-col>
        <h2>EDITAR LA NOTA</h2>
        <v-form @submit.prevent="updateNote(note)">
          <v-text-field label="Título" required v-model="note.title"></v-text-field>
          <v-text-field label="Cuenta todos los detalles" v-model="note.description"></v-text-field>
          <v-btn type="submit" color="warning" class="ma-2 block">ACTUALIZAR</v-btn>
          <v-btn type="button" color="grey" class="ma-2 block" dark @click="cancelEdit">CANCELAR</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <!--End form Edit note-->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "EditNote",
  computed: {
    ...mapState("apiMethods", ["note"])
  },
  methods: {
    ...mapActions("apiMethods", ["updateNote"]),
    ...mapMutations("apiMethods", ["cancelEdit"])
  }
};
</script>