export default defineEventHandler(async event => {
    // call `useTranslation`, so it return the translation function
    console.log("1/ webhook entered");
    const t = await useTranslation(event);
    console.log("2/ webhook - use translation called", !!t);
    return {
        // call translation function with key of locale messages,
        // and translation function has some overload
        hello: t('welcome'),
        time: new Date().toISOString(),
    }
})