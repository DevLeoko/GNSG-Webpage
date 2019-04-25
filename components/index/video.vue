<template>
  <div class="fixMe">
    <div class="overlay">
      <v-layout
        row
        wrap
        justify-center
        align-center
        fill-height
        class="overlayLayout"
      >
        <v-flex xs8 sm6 md3>
          <v-layout row wrap text-xs-center class="centerContent">
            <v-flex xs12>
              <img width="70%" src="~assets/graphics/logo.png" />
            </v-flex>
            <v-flex xs12 md6>
              <v-btn outline color="#30e953"
                ><v-icon>play_arrow</v-icon> Trailer angucken</v-btn
              >
            </v-flex>
            <v-flex xs12 md6>
              <v-btn outline color="#30e953"
                ><v-icon>ondemand_video</v-icon> &nbsp;Zum Kanal</v-btn
              >
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    <video autoplay muted loop class="hidden-sm-and-down">
      <source src="~assets/graphics/trailer.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

.fixMe {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 70%;
  min-width: 100%;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;

  @media (max-width: $breakpoint-sm) {
    height: 70%;
    background-image: url('~assets/graphics/trailer.png');
    background-size: cover;
  }

  .overlayLayout {
    background-color: rgba(66, 86, 66, 0.8);
    transition: 800ms all cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .overlayLayout:hover {
    background-color: rgba(66, 86, 66, 0.6);
  }
}

.centerContent {
  margin-bottom: 40%;
  padding: 10px;
}

video {
  min-width: 100%;
  min-height: 100%;
}
</style>
