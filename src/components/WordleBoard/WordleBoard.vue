<script setup lang="ts">
import {VICTORY_MESSAGE} from "../../../settings";

defineProps<{
  wordOfTheDay: string
}>()
</script>

<template>
  <p>{{ VICTORY_MESSAGE }}</p>
</template>