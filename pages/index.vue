<template>
  <v-layout row wrap>
    <v-flex xs12>
      <landing-video />
    </v-flex>
    <v-flex xs12 style="z-index: 2;" class="fixFixedBox">
      <gist :dates="dates" />
    </v-flex>
    <v-flex xs12 style="z-index: 1;">
      <intro />
    </v-flex>
    <v-flex xs12 style="z-index: 1;">
      <landing-footer />
    </v-flex>
  </v-layout>
</template>

<script>
import LandingVideo from '~/components/index/video.vue'
import Gist from '~/components/index/gist.vue'
import Intro from '~/components/index/intro.vue'
import LandingFooter from '~/components/index/footer.vue'

export default {
  components: { LandingVideo, Gist, Intro, LandingFooter },
  css: ['~assets/scss/pages/index.scss'],

  data() {
    return {
      dates: [
        { date: '04.05.2019', topic: "Freddie's Aufgabe" },
        { date: '11.05.2019', topic: "Sandro's Aufgabe" },
        { date: '15.05.2019', topic: 'Sandro VS Freddie' },
        { date: '18.05.2019', topic: "Freddie's Aufgabe" },
        { date: '25.05.2019', topic: "Sandro's Aufgabe" },

        { date: '15.06.2019', topic: "Freddie's Aufgabe" },
        { date: '19.06.2019', topic: "Sandro's Aufgabe" },
        { date: '22.06.2019', topic: 'Sandro VS Freddie' },
        { date: '26.06.2019', topic: "Freddie's Aufgabe" },
        { date: '29.06.2019', topic: "Sandro's Aufgabe" },

        { date: '06.07.2019', topic: "Freddie's Aufgabe" },
        { date: '13.07.2019', topic: "Sandro's Aufgabe" },
        { date: '17.07.2019', topic: 'Sandro VS Freddie' },
        { date: '20.07.2019', topic: "Freddie's Aufgabe" },
        { date: '27.07.2019', topic: "Sandro's Aufgabe" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

.fixFixedBox {
  margin-top: 30%;

  @media (max-width: $breakpoint-sm) {
    margin-top: 70%;
  }
}
</style>
