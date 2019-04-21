<template>
  <div xs12 pa-3 class="positionBelowFixed">
    <v-layout row wrap justify-space-around>
      <v-flex xs12 mb-5>
        <h1 class="text-xs-center mb-5">Lul, wer sind DIE denn?</h1>
      </v-flex>
      <v-flex
        xs5
        grey
        lighten-3
        pa-5
        @mouseenter="sh = true"
        @mouseleave="sh = false"
      >
        <h2 class="text-xs-center">Sandro</h2>
        <v-layout row wrap>
          <v-flex xs3>
            <img v-if="sh" src="~assets/graphics/S2.png" class="fixImg" />
            <img v-else src="~assets/graphics/S1.png" />
          </v-flex>
          <v-flex xs9>
            <p>
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
        xs5
        grey
        lighten-3
        pa-5
        @mouseenter="fh = true"
        @mouseleave="fh = false"
      >
        <h2 class="text-xs-center">Freddie</h2>
        <v-layout row wrap>
          <v-flex xs3>
            <img v-if="fh" src="~assets/graphics/F2.png" />
            <img v-else src="~assets/graphics/F1.png" />
          </v-flex>
          <v-flex xs9>
            <p>
              <span>„</span>
              Ach Freddi. Was gibt es über diesen Menschen zu sagen, was man
              wissen sollte. Kennengelernt hab ich ihn als einen lustigen,
              faulen und ziemlich dämlichen Fettsack. Er ist 18 Jahre alt und
              hat sein Abitur mal so eben bestanden. Mit nem Tetrapack Wein nach
              jeder Mathe Klausur und der Weißweinschorle in den Bars lies er
              seinen alkoholischen Momenten gerne mal freien Lauf und verlor
              dabei nie auch nur eine der oben erwähnten Eigenschaften. Wenn
              mich jemand fragen würde, welche Note ich Freddi als Person geben
              würde, dann wäre das eine 6. Nicht nur auf Intelligenz, sondern
              vor allem auf seine, durch eine Wampe ausgereifte Figur, die
              exzellent zu ihn passt. Aber zum Glück muss ich ihn ja nicht
              benoten, sonst hätte er kein Abitur in der Hand gehalten.
              <span>“</span><br />
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

<style scoped>
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

img {
  max-height: 800px;
  /* max-width: 50%; */
  /* transition: 800ms all cubic-bezier(0.19, 1, 0.22, 1); */
  margin-left: -150px;
}

.fixImg {
  transform-origin: left bottom;
  transform: scale(1.05);
  margin-left: -120px;
}

img:hover {
  /* transform: scale(1.1); */
}

.positionBelowFixed {
  padding-top: 520px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 250px;
  margin-top: -500px;
  background-color: #fcfcfc;
}
</style>
