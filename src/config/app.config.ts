import { env } from "../core/helpers"

export const appConfig: AppConfig = {
    port: env("APP_PORT"),
    isDebug: env("APP_DEBUG", "false") as string === "true",
}
