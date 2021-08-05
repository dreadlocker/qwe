<template>
  <div id="app">
    <Navbar v-if="!showLoader" />
    <Loader v-if="showLoader" />
    <router-view v-else />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    Navbar,
    Loader,
  },
  data() {
    return {
      showLoader: true,
      url: "https://qwer-3d393-default-rtdb.europe-west1.firebasedatabase.app/.json",
      // postArgs: {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify([{}]),
      // },
    };
  },
  methods: {
    getData() {
      fetch(this.url)
        .then((response) => response.json())
        .then((response) => {
          this.showLoader = false;
          this.$store.commit("saveProductsInfo", response);
          this.$store.commit("saveFilteredProducts");
        });
    },
    // sendData() {
    //   fetch(`${this.url}?auth=${this.token}`, this.postArgs)
    //     .then((response) => response.json())
    //     .then(({ name }) => {
    //       this.showLoader = false;
    //     });
    // },
    // deleteData() {
    //   fetch(`${this.url}?auth=${this.token}`, {
    //     method: "DELETE",
    //   }).then((response) => {
    //     this.showLoader = false;
    //   });
    // },
  },
  beforeMount() {
    this.getData();
    // this.deleteData();
    // this.sendData();
  },
};
</script>

<style lang="scss">
@import "@/assets/sassVars.scss";

html {
  width: 100%;
  height: 100%;
}
body {
  width: $body-width;
  height: 100%;
  margin: 0 $body-margin-x 20px $body-margin-x;
  padding: 0;
  display: flex;
  justify-content: center;
}
#app {
  width: 100%;
  // max-width: 1000px;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(365deg);
  }
}
</style>
