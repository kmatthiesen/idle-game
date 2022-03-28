<template>
  <div class="hello">
    <resource-building resourceName="Gold" />

  </div>
</template>

<script>
import ResourceBuilding from "./resources/ResourceBuilding";
import {sleep, TIME} from "../utils/time";
export default {
  name: 'Main',
  components: {ResourceBuilding},
  mounted() {
    this.loop();
  },
  methods: {
    async loop() {
      // this.resource += (this.owned * 1.5);
      // this.canBuyNext = canBuy(this.resource, this.baseCost, this.scaling, this.owned);
      await sleep(TIME.SECOND);
      this.loop();
    }
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

