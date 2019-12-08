import { appConfig } from "./app.config"
import { databaseConfig } from "./database.config"
import { schemaConfig } from "./schema.config"

export const config: Config = {
    app: appConfig,
    db: databaseConfig,
    schema: schemaConfig,
}
