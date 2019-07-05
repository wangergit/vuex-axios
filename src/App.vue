<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted:function(){
    this.init()
  },
  methods : {
    init(){
      console.log("APP init.....")
      this.$store.dispatch('global/store/storeData', {
          name: "xz",
          callback: this.freshData
      })
    },
    freshData(data){
      console.log(" axios success")
      console.log(this.$store.state.global.store.storeData)
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
