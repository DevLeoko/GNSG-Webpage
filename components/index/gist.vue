<template>
  <div class="svgCont">
    <v-layout id="gistContent" row wrap>
      <v-flex xs6 pa-3 class="c1" text-xs-center>
        <h1>Wann <b>läuft</b> was?</h1>

        <svg height="60%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <!-- <circle cx="50" cy="50" r="45" fill="green" /> -->

          <g transform="translate(50 50)">
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
            />
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-30)"
            />
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-60)"
            />

            <circle id="innerRest" cx="0" cy="0" r="40" fill="#323232" />

            <path
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(90)"
            />

            <path
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(180)"
            />

            <path
              class="inactive"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(-90)"
            />

            <circle cx="0" cy="0" r="35" fill="#323232" />

            <path
              class="activator"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(90)"
              @mouseover="
                season = 2
                subText = 'Ab 12.05.2019'
              "
            />

            <path
              class="activator"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(180)"
              @mouseover="
                season = 3
                subText = 'Ab 06.09.2019'
              "
            />

            <path
              class="activator"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(-90)"
              @mouseover="
                season = 4
                subText = 'Ab 02.01.2020'
              "
            />

            <text x="0" y="0" text-anchor="middle">Season {{ season }}</text>
            <text id="subText" x="0" y="6" text-anchor="middle">
              {{ subText }}
            </text>
          </g>
        </svg>
      </v-flex>

      <v-flex xs4 offset-xs1 pa-3 mt-5 class="liveTicker">
        <h1 id="lt_h1">Die Folge mit</h1>
        <h1 id="lt_h2">Sandro's Aufgabe</h1>
        <h1 id="lt_h3">kommt in</h1>
        <h1 id="lt_h4">70<span>H</span>:30<span>M</span></h1>
        <br />
        <br />
        <h1 id="lt_h5">KEINE LUST</h1>
        <h1 id="lt_h6">zu warten?!</h1>
        <h1 id="lt_h7">>> Guck dir jetzt die letzte Folge an</h1>
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
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <polygon
        points="45,8 100,10 100,105 50,85"
        style="fill:#30e953;"
        filter="url(#f1)"
      />
      <polygon
        points="0,5 49,11 54,95 0,105"
        style="fill:#323232;"
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
      season: 2,
      subText: 'Ab 12.05.2019'
    }
  }
}
</script>

<style scoped>
.liveTicker h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 42pt;
  color: white;
  line-height: 1.05;
}

#lt_h1 {
  font-weight: 400;
}

#lt_h2 {
  font-weight: 700;
}

#lt_h3 {
  font-weight: 400;
  font-style: italic;
}

#lt_h4 {
  font-weight: 900;
  font-style: italic;
}

#lt_h4 span {
  vertical-align: super;
  font-size: 25pt;
  padding-left: 4px;
}

#lt_h5 {
  font-weight: 700;
  line-height: 1;
}

#lt_h6 {
  font-weight: 700;
  font-style: italic;
  line-height: 1;
}

#lt_h7 {
  font-weight: 400;
  font-style: italic;
  line-height: 0.9;
}

.svgCont {
  margin-top: 30%;
  width: 100%;
}

#gistContent {
  margin-top: 80px;
  width: 100%;
  position: absolute;
}

.c1 h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 45pt;
  text-align: center;
  color: white;
  /* transform: rotate(2deg); */
}

path.detail {
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke-width: 0.8;
  stroke: #323232;
  fill: #0fb244;
}

path.detail:hover {
  fill: #0b993a;
}

path.inactive {
  fill: #30e953;
  stroke: #30e953;
}

path.activator {
  transition: all 600ms ease-out;
  fill: rgba(0, 0, 0, 0);
  stroke-width: 0;
  stroke: #30e953;
}

path.activator:hover {
  /* fill: rgba(0, 0, 0, 0.2); */
  fill: rgba(48, 233, 82, 0.1);
  stroke-width: 0.5;
}

#innerRest {
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

path:hover ~ #innerRest {
  r: 35px;
}

text {
  /* vertical-align: middle; */
  fill: white;
  font-size: 8pt;
  font-family: 'Permanent Marker', cursive;
}

#subText {
  font-size: 5pt;
  font-family: 'Permanent Marker', cursive;
}

rect {
  width: 50px;
  height: 50px;
  fill: rgba(0, 0, 0, 0);
}
</style>
