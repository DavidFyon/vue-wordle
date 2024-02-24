<script setup lang="ts">
import {VICTORY_MESSAGE, DEFEAT_MESSAGE, WORD_SIZE} from "../../../settings";
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
    guessInProgress.value = rawValue
        .slice(0, WORD_SIZE)
        .toUpperCase()
        .replace(/[^A-Z]+/gi, "")
  }
})

function onSubmit() {
  if (!fiveLettersWords.includes(guessInProgress.value)) {
    return
  }

  guessSubmitted.value = guessInProgress.value
}
</script>

<template>
  <input
      v-model="formattedGuessInProgress"
      :maxlength="WORD_SIZE"
      type="text"
      @keydown.enter="onSubmit"
  >
  <p
      v-if="guessSubmitted.length > 0"
      v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"
  />
</template>