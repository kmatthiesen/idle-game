<template>
  <div class="hello">
    <resource-building resourceName="Gold" />

  </div>
</template>

<script>
import ResourceBuilding from "./resources/ResourceBuilding";
import {sleep, TIME} from "../utils/time";
import {mapActions} from "vuex";
export default {
  name: 'Main',
  components: {ResourceBuilding},
  mounted() {
    this.loop();
  },
  methods: {
    async loop() {
      await sleep(TIME.SECOND / 200);
      this.nextTick();
      this.loop();
    },
    ...mapActions(["nextTick"])
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

