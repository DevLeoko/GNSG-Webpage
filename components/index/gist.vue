<template>
  <div class="svgCont">
    <v-layout
      id="gistContent"
      row
      wrap
      :class="!$vuetify.breakpoint.smAndDown || 'noAbsolute'"
    >
      <v-flex
        xs12
        md6
        pa-3
        class="c1"
        text-xs-center
        :class="!$vuetify.breakpoint.smAndDown || 'myGrey'"
      >
        <h1>Wann <b>läuft</b> was?</h1>

        <svg class="infoSvg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <!-- <circle cx="50" cy="50" r="45" fill="green" /> -->

          <g transform="translate(50 50)" @mouseleave="hud = defaultHud">
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              :style="{ fill: hud.month == 2 ? '#317b3f' : undefined }"
              @mouseover="hud = { month: 2, text: 'Juli' }"
            />
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-30)"
              :style="{ fill: hud.month == 1 ? '#317b3f' : undefined }"
              @mouseover="hud = { month: 1, text: 'Juni' }"
            />
            <path
              class="detail"
              d="M 0 0 L 50 0 A 50 50 0 0 0 43.30127018922194 -24.999999999999996 L 0 0"
              transform="rotate(-60)"
              :style="{ fill: hud.month == 0 ? '#317b3f' : undefined }"
              @mouseover="hud = { month: 0, text: 'Mai' }"
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
              @mouseover="hud = { text: 'Season 2', subText: 'Ab 12.05.2019' }"
            />

            <path
              class="activator"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(180)"
              @mouseover="hud = { text: 'Season 3', subText: 'Ab 06.09.2019' }"
            />

            <path
              class="activator"
              d="M 0 0 L 45 0 A 45 45 0 0 0 2.7554552980815448e-15 -45 L 0 0"
              transform="rotate(-90)"
              @mouseover="hud = { text: 'Season 4', subText: 'Ab 02.01.2020' }"
            />

            <text x="0" y="0" text-anchor="middle">{{ hud.text }}</text>
            <text id="subText" x="0" y="6" text-anchor="middle">
              {{ hud.subText }}
            </text>

            <g v-if="hud.month !== undefined">
              <rect x="-23" y="-18" width="46" height="6" rx="3" ry="3" />

              <circle
                class="dateActivator"
                cx="-20"
                cy="-15"
                r="3"
                @mouseover="selectDate(0)"
              />
              <circle
                class="dateActivator"
                cx="-10"
                cy="-15"
                r="3"
                @mouseover="selectDate(1)"
              />
              <circle
                class="dateActivator"
                cx="0"
                cy="-15"
                r="3"
                @mouseover="selectDate(2)"
              />
              <circle
                class="dateActivator"
                cx="10"
                cy="-15"
                r="3"
                @mouseover="selectDate(3)"
              />
              <circle
                class="dateActivator"
                cx="20"
                cy="-15"
                r="3"
                @mouseover="selectDate(4)"
              />
            </g>
          </g>
        </svg>
      </v-flex>

      <v-flex
        xs12
        md5
        lg4
        offset-md1
        :pa-5="$vuetify.breakpoint.smAndDown"
        :pa-3="!$vuetify.breakpoint.smAndDown"
        :mt-5="!$vuetify.breakpoint.smAndDown"
        class="liveTicker"
        :class="!$vuetify.breakpoint.smAndDown || 'myGreen'"
      >
        <h1 id="lt_h1">Die Folge mit</h1>
        <h1 id="lt_h2">{{ topic }}</h1>
        <h1 id="lt_h3">kommt in</h1>
        <h1 id="lt_h4">
          {{ hours }}<span>H</span>:{{ minutes }}<span>M</span>
        </h1>
        <br />
        <br />
        <h1 id="lt_h5">KEINE LUST</h1>
        <h1 id="lt_h6">zu warten?!</h1>
        <h1 id="lt_h7">
          <a :href="`https://www.youtube.com/watch?v=${url}`" target="_blank"
            >>> Guck dir jetzt die letzte Folge an</a
          >
        </h1>
      </v-flex>
    </v-layout>
    <svg
      height="900"
      class="hidden-sm-and-down"
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

    <style>
      #gistContent path:hover ~ #innerRest {
        r: 35px;
      }
    </style>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  props: {
    dates: {
      type: Array,
      required: true
    }
  },

  data() {
    const defaultHud = { text: 'Season 1', subText: 'aktuell live' }
    return {
      hud: defaultHud,
      defaultHud,
      hours: '00',
      minutes: '00',
      topic: '---',
      url: null
    }
  },

  mounted() {
    const cTime = new Date().getTime()
    for (const entry of this.dates) {
      const parts = entry.date.match(/(\d+)/g)
      const date = new Date(parts[2], parts[1] - 1, parts[0], 18)
      if (date.getTime() >= cTime) {
        const remaining = date.getTime() - cTime
        this.hours = Math.floor(remaining / 1000 / 60 / 60)
        this.minutes = (Math.floor(remaining / 1000 / 60) % 60) + 1
        this.topic = entry.topic
        this.decreaseMinutes()
        break
      }
    }

    this.$axios.get('/.netlify/functions/currentVideo').then(response => {
      this.url = response.data
    })
  },

  methods: {
    decreaseMinutes() {
      this.minutes = String(parseInt(this.minutes) - 1).padStart(2, '0')
      setTimeout(this.decreaseMinutes, 1000 * 60)
    },
    selectDate(date) {
      const dateDetails = this.dates[this.hud.month * 5 + date]

      this.hud = {
        month: this.hud.month,
        text: dateDetails.date.substring(0, 6),
        subText: dateDetails.topic
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

.liveTicker h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 42pt;
  color: white;
  line-height: 1.05;

  @media (max-width: $breakpoint-sm) {
    font-size: 25pt;
  }
}

.noAbsolute {
  position: relative !important;
}

.infoSvg {
  height: 60%;

  @media (max-width: $breakpoint-sm) {
    height: 70%;
  }
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

  @media (max-width: $breakpoint-sm) {
    font-size: 14pt;
  }
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

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: 20pt;
  }
}

.svgCont {
  width: 100%;
}

#gistContent {
  margin-top: 80px;
  width: 100%;
  position: absolute;

  @media (max-width: $breakpoint-sm) {
    margin-top: 0;
  }
}

.c1 h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 45pt;
  text-align: center;
  color: white;

  @media (max-width: $breakpoint-sm) {
    font-size: 30pt;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}

.myGrey {
  background-color: #323232;
}

.myGreen {
  background-color: #30e953;
}

path.detail {
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke-width: 0.8;
  stroke: #323232;
  fill: #0fb244;
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
  /* stroke-width: 0.5; */
}

circle.dateActivator {
  fill: #30e953;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  stroke: #30e953;
  stroke-width: 0;
}

rect {
  fill: rgba(48, 233, 82, 0.4);
}

circle.dateActivator:hover {
  stroke-width: 1;
}

#innerRest {
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
</style>
