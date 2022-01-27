<template>
<section>
  <div id="app">
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</section>
</template>

<script>

export default {
  name: "App",
  components: {

},
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
