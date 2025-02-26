<script setup>
const { setLocale, locale } = useI18n()

const {data, execute, pending} = await useFetch("/api/hello", {
  query: {
    l: locale
  },
  server: true
});
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ locale }}: {{ $t('welcome') }}</p>
    </div>
    <hr />
    <div>
      From api:
      <span v-if="pending">Loading...</span>
      <span v-else>{{ data }}</span>
      <br>
      <button @click="execute()" type="button">Fetch</button>
    </div>
  </div>
</template>