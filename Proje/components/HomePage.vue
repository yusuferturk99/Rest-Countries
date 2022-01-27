<template>
  <div>
    <h1 id="app">Welcome to the Projects of Zimbabwe!</h1>
    <h5 id="h5">
      Welcome to our website! Here you can see the projects, which government
      plans to build up a better future for Zimbabweans. By sending your bid
      offer with necessary documents, you may win a bid and earn money while
      creating a better life for Zimbabweans!
    </h5>
    <h6 id="h6">
        To see the projects you can click <router-link to="/projects">Projects</router-link> button.
    </h6>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#h5 {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: black;
  max-width: 60%;
  margin: auto;
  margin-top: 15px;
}
#h6 {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: black;
  max-width: 60%;
  margin: auto;
  margin-top: 25px;
}
</style>