export default defineEventHandler(async (event) => {
  console.log("cron job called")
  return 'Hello Nitro'
})
