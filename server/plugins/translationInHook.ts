export default defineNitroPlugin((nitroApp) => {
    console.log('Nitro plugin setup')
    nitroApp.hooks.hook("request", async (event) => {
        console.log("in nitro plugin", event.path)
        const t = await useTranslation(event)
        console.log("in nitro plugin", event.path, t("welcome"))
    })
});