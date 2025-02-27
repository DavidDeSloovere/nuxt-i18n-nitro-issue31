export default defineEventHandler(async event => {
    // call `useTranslation`, so it return the translation function
    const t = await useTranslation(event);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        // call translation function with key of locale messages,
        // and translation function has some overload
        hello: t('welcome'),
        time: new Date().toISOString(),
    }
})