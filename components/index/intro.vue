<template>
  <div xs12 pa-3 class="positionBelowFixed">
    <v-layout row wrap>
      <v-flex xs12 mb-4>
        <h1 class="text-xs-center">Lul, wer sind DIE denn?</h1>
      </v-flex>
      <v-flex xs6>
        <h2 class="text-xs-center">Sandro</h2>
      </v-flex>
      <v-flex xs6>
        <h2 class="text-xs-center">Freddie</h2>
      </v-flex>
    </v-layout>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates
      fugiat similique, ducimus adipisci magni iure eos excepturi. Odio tempore,
      reiciendis saepe quis nulla ratione modi ullam dolore reprehenderit
      similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
      voluptates fugiat similique, ducimus adipisci magni iure eos excepturi.
      Odio tempore, reiciendis saepe quis nulla ratione modi ullam dolore
      reprehenderit similique!
    </p>
  </div>
</template>

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

.positionBelowFixed {
  padding-top: 520px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 250px;
  margin-top: -500px;
  background-color: #e3ffe3;
}
</style>
