import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveContentEncoded1720593157987 implements MigrationInterface {
  name = ' RemoveContentEncoded1720593157987';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "feed_item" DROP COLUMN "content_encoded"
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "feed_item"
            ADD "content_encoded" character varying NOT NULL
        `);
  }
}
