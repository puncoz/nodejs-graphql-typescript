import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { AUTH_USERS } from "../../core/constants"

export class CreateUsersTable1575811229326 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: AUTH_USERS,
            columns: [
                {name: "id", type: "bigInt", isPrimary: true},
                {name: "username", type: "varchar", length: "50", isUnique: true},
                {name: "email", type: "varchar", length: "150", isUnique: true},
                {name: "full_name", type: "json", isNullable: true},
                {name: "created_at", type: "timestamp"},
                {name: "updated_at", type: "timestamp", isNullable: true},
                {name: "deleted_at", type: "timestamp", isNullable: true},
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(AUTH_USERS)
    }

}
