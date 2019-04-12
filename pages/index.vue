<template>
  <v-layout row wrap>
    <v-flex xs12 style="z-index: -1;">
      <landing-video />
    </v-flex>
    <v-flex xs12 style="z-index: 2;">
      <gist />
    </v-flex>
    <v-flex xs12 style="z-index: 1;">
      <intro />
    </v-flex>
  </v-layout>
</template>

<script>
import LandingVideo from '~/components/index/video.vue'
import Gist from '~/components/index/gist.vue'
import Intro from '~/components/index/intro.vue'

export default {
  components: { LandingVideo, Gist, Intro },
  css: ['~assets/scss/pages/index.scss']
}
</script>
