import { env } from "../core/helpers"
import { appConfig } from "./app.config"

export const databaseConfig: DatabaseConfig = {
    name: "default",
    type: env("DB_CONNECTION", "postgres"),
    host: env("DB_HOSTNAME", "127.0.0.1"),
    port: env("DB_PORT", 5432),
    username: env("DB_USERNAME"),
    password: env("DB_PASSWORD"),
    database: env("DB_NAME"),
    synchronize: false,
    logging: appConfig.isDebug,
    dropSchema: false,
    entities: [
        "src/data/entities/**/*.ts",
    ],
    migrations: [
        "src/data/migrations/**/*.ts",
    ],
    subscribers: [
        "src/data/subscribers/**/*.ts",
    ],
    cli: {
        entitiesDir: "src/data/entities",
        migrationsDir: "src/data/migrations",
        subscribersDir: "src/data/subscribers",
    },
}
