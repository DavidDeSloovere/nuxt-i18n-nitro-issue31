export default defineEventHandler(async event => {
    // call `useTranslation`, so it return the translation function
    const t = await useTranslation(event);
    return {
        // call translation function with key of locale messages,
        // and translation function has some overload
        hello: t('hello'),
        time: new Date().toISOString(),
    }
})