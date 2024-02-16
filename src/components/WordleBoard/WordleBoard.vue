<script setup lang="ts">
import {VICTORY_MESSAGE, DEFEAT_MESSAGE} from "../../../settings";
import fiveLettersWords from "../../../wordsWith5Letters.json"
import {computed, ref} from "vue";

defineProps({
  wordOfTheDay: {
    type: String,
    validator: (wordGiven: string) => fiveLettersWords.includes(wordGiven)
  }
})

const guessInProgress = ref("")
const guessSubmitted = ref("")

const formattedGuessInProgress = computed({
  get() {
    return guessInProgress.value
  },
  set(rawValue: string) {
    guessInProgress.value = rawValue.slice(0, 5)
  }
})
</script>

<template>
  <input
      v-model="formattedGuessInProgress"
      maxlength="5"
      type="text"
      @keydown.enter="guessSubmitted = guessInProgress"
  >
  <p
      v-if="guessSubmitted.length > 0"
      v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"
  />
</template>