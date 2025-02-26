export default defineNitroPlugin((nitroApp) => {
    console.log('Nitro plugin setup')
    nitroApp.hooks.hook("request", async (event) => {
        console.log("1/ in nitro plugin", event.path)
        const t = await useTranslation(event)
        console.log("2/ in nitro plugin", event.path, t("welcome"))
    })
});