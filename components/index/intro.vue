<template>
  <div xs12 pa-3 class="positionBelowFixed">
    <v-layout
      row
      wrap
      justify-space-around
      :class="$vuetify.breakpoint.smAndDown ? 'mobile' : 'desktop'"
    >
      <v-flex xs12 my-5>
        <h1 class="text-xs-center mb-5">Lul, wer sind DIE denn?</h1>
      </v-flex>
      <v-flex
        xs12
        sm10
        lg5
        class="box skrew2"
        :class="$vuetify.breakpoint.smAndDown ? 'pa-4' : 'pa-5'"
        @mouseenter="sh = true"
        @mouseleave="sh = false"
      >
        <h2 class="text-xs-center skrew2Rev">Sandro</h2>
        <v-layout row wrap>
          <v-flex xs3 hidden-sm-and-down>
            <img v-if="sh" src="~assets/graphics/S2.png" class="skrew2Rev" />
            <img v-else class="skrew2Rev" src="~assets/graphics/S1.png" />
          </v-flex>
          <v-flex xs12 sm9>
            <p class="skrew2Rev">
              <span>„</span>
              Sandro.... Eine Person aus der man nicht besonders schlau werden
              kann. Neben der Tatsache, dass naja Sandro eben nicht von
              besonderer Intelligenz gesegnet ist, kann man von seinem Verhalten
              auch nicht besonders viel sinnvolles abgewinnen. Minecraft
              YouTuber am Tag - Partygänger bei Nacht.... Die traurige
              Geschichte eines gescheiterten Möchtegerns.... Und nun der letzte
              Versuch sich noch einmal zu beweisen. Noch einmal nach den Sternen
              zu greifen.. Noch... Ein... Mal....... Geld abzugreifen. Sandro
              GNSG - Vollzeit Vollidiot im Einsatz
              <span>“</span><br />
              <i>(by Frederik)</i>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        sm10
        lg5
        class="box skrew1"
        :mt-5="$vuetify.breakpoint.mdAndDown"
        :class="$vuetify.breakpoint.smAndDown ? 'pa-4' : 'pa-5'"
        @mouseenter="fh = true"
        @mouseleave="fh = false"
      >
        <h2 class="text-xs-center skrew1Rev">Freddie</h2>
        <v-layout row wrap>
          <v-flex xs3 hidden-sm-and-down>
            <img v-if="fh" class="skrew1Rev" src="~assets/graphics/F2.png" />
            <img v-else class="skrew1Rev" src="~assets/graphics/F1.png" />
          </v-flex>
          <v-flex xs12 sm9>
            <p class="skrew1Rev">
              <span>„</span>Ach Freddi. Was gibt es über diesen Menschen zu
              sagen, was man wissen sollte. Kennengelernt hab ich ihn als einen
              lustigen, faulen und ziemlich dämlichen Fettsack. Da hat sich auch
              nicht viel dran geändert. Er ist gerade 18 Jahre alt und hat sein
              Abitur mal so eben bestanden. Mit nem Tetrapack Wein nach jeder
              Mathe Klausur und der Weißweinschorle in den Bars lies er seinen
              alkoholischen Momenten gerne mal freien Lauf und verlor dabei nie
              auch nur eine der oben erwähnten Eigenschaften.<span>“</span
              ><br />
              <i>(by Sandro)</i>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sh: false,
      fh: false
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-sm: 960px;

h1 {
  font-size: 50pt;
  font-family: 'Permanent Marker', cursive;
  transform: rotate(2deg);
}

h2 {
  font-size: 60pt;
  font-family: 'Permanent Marker', cursive;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 20pt;
  line-height: 1.4;
}

p span {
  font-family: 'Permanent Marker', cursive;
}

@media (max-width: $breakpoint-sm) {
  h1 {
    font-size: 45pt;
  }

  h2 {
    font-size: 45pt;
  }

  p {
    font-size: 15pt;
    line-height: 1.3;
  }
}

img {
  max-height: 800px;
  margin-left: -180px;
}

img:hover {
  /* transform: scale(1.1); */
}

.positionBelowFixed {
  padding-top: 520px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 200px;
  margin-top: -500px;
  background-color: #fcfcfc;

  @media (max-width: $breakpoint-sm) {
    padding-bottom: 100px;
  }
}

.box {
  background-color: #e6e6e6;
}

@media (min-width: $breakpoint-sm) {
  .skrew1 {
    transform: skewX(5deg) skewY(3deg);
    /* border-top: 2px solid #30e953 !important; */
    /* border-left: 2px solid #30e953 !important; */
    /* border-top-left-radius: 10px; */
  }

  .skrew1Rev {
    transform: skewX(-5deg) skewY(-3deg);
  }

  .skrew2 {
    transform: skewX(6deg) skewY(-4deg);
  }

  .skrew2Rev {
    transform: skewX(-6deg) skewY(4deg);
  }
}
</style>
