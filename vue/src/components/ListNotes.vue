<template>
  <div>
    <!--Begin table-->
    <v-row class="mx-auto">
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-center">TITLE</th>
                <th class="text-center">DESCRIPTION</th>
                <th class="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of notes" :key="item._id">
                <td>{{index + 1}}</td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td class="text-center">
                  <v-btn
                    @click="deleteNote(item._id)"
                    color="error"
                    small
                    dark
                    class="button-err"
                  >Eliminar</v-btn>
                  <v-btn
                    @click="activeEdit(item)"
                    color="warning"
                    small
                    dark
                    class="button-err"
                  >Editar</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <!--End table-->
  </div>
</template>

<script>
// Store
import { mapState, mapActions } from "vuex";

export default {
  name: "ListNotes",
  computed: {
    ...mapState("apiMethods", ["notes"])
  },
  methods: {
    ...mapActions("apiMethods", ["deleteNote", "activeEdit"])
  }
};
</script>

<style scoped>
.button-err {
  margin: 20px 10px;
}
</style>