<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <img v-if="showLoader" src="@/assets/bulb.png" class="loader" />
    <router-view v-else /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    // const myHeaders = new Headers();

    // const myRequest = new Request("flowers.jpg", {
    //   method: "GET",
    //   headers: myHeaders,
    //   mode: "cors",
    //   cache: "default",
    // });
    fetch(
      "https://qwer-e5991-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      // {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ num: 1 }),
      // }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
    // .then((response) => {
    //   console.log(response);
    //   return response.json();
    // })
    // .then((commits) => {
    //   console.log(commits);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .loader {
    animation: loading 1s linear infinite alternate;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@keyframes loading {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
