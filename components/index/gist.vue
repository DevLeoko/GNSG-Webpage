<template>
  <div class="svgCont">
    <v-layout row wrap id="gistContent">
      <v-flex xs6 pa-3 mt-5 class="c1" text-xs-center>
        <h1>Wann <b>läuft</b> was?</h1>

        <svg height="60%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <!-- <circle cx="50" cy="50" r="45" fill="green" /> -->
          <g transform="translate(50 50)">
            <path
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
            />
            <path
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-30)"
            />
            <path
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-60)"
            />

            <circle id="innerRest" cx="0" cy="0" r="40" fill="lime" />

            <path
              id="cir_S2"
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(90)"
            />

            <path
              id="cir_S3"
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(180)"
            />

            <circle cx="0" cy="0" r="35" fill="lime" />

            <rect id="rec_S4" x="-50" y="-50" @mouseover="season = 4" />
            <rect id="rec_S3" x="-50" y="0" @mouseover="season = 3" />
            <rect id="rec_S2" x="0" y="0" @mouseover="season = 2" />

            <path
              id="cir_S4"
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(-90)"
            />
          </g>

          <text x="50" y="50" text-anchor="middle">Season {{ season }}</text>
        </svg>
      </v-flex>
      <v-flex xs6 pa-3 mt-3>
        <h1>Hii</h1>
        <h1>Hii</h1>
        <h1>Hii</h1>
        <h1>Hii</h1>
      </v-flex>
    </v-layout>
    <svg
      height="900"
      width="100%"
      viewBox="0 0 100 110"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="f1" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <polygon
        points="45,8 100,10 100,105 50,85"
        style="fill:green;"
        filter="url(#f1)"
      />
      <polygon
        points="0,5 49,11 54,95 0,105"
        style="fill:lime;"
        filter="url(#f1)"
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      season: 0
    }
  }
}
</script>

<style scoped>
.svgCont {
  margin-top: 30%;
  width: 100%;
}

#gistContent {
  margin-top: 50px;
  width: 100%;
  position: absolute;
}

.c1 h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 45pt;
  text-align: center;
  color: #085308;
  /* transform: rotate(2deg); */
}

path {
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke-width: 2;
  stroke: lime;
  fill: #085308;
}

path.inactive {
  stroke-width: 1;
  fill: green;
}

path:hover {
  fill: #003f00;
}

#innerRest {
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

path:hover ~ #innerRest {
  r: 35px;
}

text {
  /* vertical-align: middle; */
  fill: #085308;
  font-size: 8pt;
  font-family: 'Permanent Marker', cursive;
}

rect {
  width: 50px;
  height: 50px;
  fill: rgba(0, 0, 0, 0);
}

#cir_S2,
#cir_S3,
#cir_S4 {
  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

#rec_S2:hover ~ #cir_S2,
#rec_S3:hover ~ #cir_S3,
#rec_S4:hover ~ #cir_S4 {
  fill: #003f00;
}
</style>
