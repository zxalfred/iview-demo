<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<style>
/* global css style */
html {
  height: 100%;
}
body {
  height: 100%;
  background: #30333f;
}
#app {
  /* font anti-aliasing */
  /* only for Apple devices */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
}
.mh-100 {
  height: 100%;
}
</style>
