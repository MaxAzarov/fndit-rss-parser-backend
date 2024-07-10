import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateFeedItem1720593055577 implements MigrationInterface {
  name = 'UpdateFeedItem1720593055577';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD "id" SERIAL NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP CONSTRAINT "PK_dceeb4448259ae62e1482321c3b"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD CONSTRAINT "PK_a1256741491885ecd2e81efb49b" PRIMARY KEY ("guid", "id")
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP CONSTRAINT "PK_a1256741491885ecd2e81efb49b"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD CONSTRAINT "PK_15e831e9beea6ca204556c64438" PRIMARY KEY ("id")
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP COLUMN "guid"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD "guid" character varying NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP COLUMN "guid"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD "guid" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP CONSTRAINT "PK_15e831e9beea6ca204556c64438"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD CONSTRAINT "PK_a1256741491885ecd2e81efb49b" PRIMARY KEY ("guid", "id")
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP CONSTRAINT "PK_a1256741491885ecd2e81efb49b"
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD CONSTRAINT "PK_dceeb4448259ae62e1482321c3b" PRIMARY KEY ("guid")
        `);
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP COLUMN "id"
        `);
  }
}
