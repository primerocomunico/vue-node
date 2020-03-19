<template>
  <div>
    <!--Begin alert-->
    <v-row>
      <v-col>
        <v-alert
          dense
          border="left"
          :type="alert.type"
          class="text-center"
          dismissible
          :value="alert.flag"
        >{{alert.message}}</v-alert>
      </v-col>
    </v-row>
    <!--End alert-->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Alert",
  computed: {
      ...mapState('apiMethods', ['alert'])
  },
  methods: {
      changeFlag() {
          alert.flag = true;
          setTimeout(() => {
        this.alert.flag = false;
      }, 5000);
      }
  },
  updated() {
      this.changeFlag()
  }
};
</script>