<script setup>
const { setLocale, locale } = useI18n()

const {data, execute} = await useFetch("/api/hello", {
  query: {
    l: locale
  }
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
      From api: {{ data }}<br/>
      <button @click="execute()" type="button">Fetch</button>
    </div>
  </div>
</template>