<template>
  <div>
    <v-container>
      <h1 class="text-center">NOTES</h1>

      <Alert />

      <CreateNote v-if="!editForm" />

      <EditNote v-if="editForm" />

      <ListNotes />
    </v-container>
  </div>
</template>

<script>
// Components
import Alert from "@/components/Alert.vue";
import ListNotes from "@/components/ListNotes";
import CreateNote from "@/components/CreateNote";
import EditNote from "@/components/EditNote";

// Store
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Notes",
  components: {
    Alert,
    ListNotes,
    CreateNote,
    EditNote
  },
  computed: {
    ...mapState("apiMethods", ["editForm"])
  },
  methods: {
    ...mapActions("apiMethods", ["getNotes",])
  },
  created() {
    this.getNotes();
  }
};
</script>

<style scoped>
.button-err {
  margin: 20px 10px;
}
</style>