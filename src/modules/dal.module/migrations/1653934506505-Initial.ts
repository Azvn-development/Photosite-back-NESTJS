import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1653934506505 implements MigrationInterface {
    name = 'Initial1653934506505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "publications" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "release" TIMESTAMP NOT NULL, CONSTRAINT "PK_2c4e732b044e09139d2f1065fae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publication_images" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "creationDate" TIMESTAMP NOT NULL, "publicationId" integer, CONSTRAINT "PK_2ee0542180a3460125470dd243b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "abouts" ("id" SERIAL NOT NULL, "image" character varying NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_26b459c708a47f213dc76c451f1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" integer NOT NULL, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publication_images" ADD CONSTRAINT "FK_b69daf571bad443ad057e3747c1" FOREIGN KEY ("publicationId") REFERENCES "publications"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication_images" DROP CONSTRAINT "FK_b69daf571bad443ad057e3747c1"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "abouts"`);
        await queryRunner.query(`DROP TABLE "publication_images"`);
        await queryRunner.query(`DROP TABLE "publications"`);
    }

}
