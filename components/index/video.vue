<template>
  <video ref="myVid" autoplay muted loop>
    <source src="~assets/graphics/trailer.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
/* #fixedPlaceholder {
  height: 70%;
} */

video {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 40%;
  min-width: 100%;
}
</style>
