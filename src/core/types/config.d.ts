interface Config {
    app: AppConfig
    db: DatabaseConfig
    schema: SchemaConfig
}

interface AppConfig {
    port: number
    isDebug: boolean
}

interface SchemaConfig {
    resolverClassSuffix: string
    emitSchemaFile: string | boolean
}

interface DatabaseConfig {
    name: string
    type: "mysql" | "postgres"
    host: string
    port: number
    username: string
    password: string
    database: string
    synchronize: boolean
    logging: boolean
    dropSchema: boolean
    entities: [string]
    migrations: [string]
    subscribers: [string]
    cli: {
        entitiesDir: string
        migrationsDir: string
        subscribersDir: string,
    }
}
