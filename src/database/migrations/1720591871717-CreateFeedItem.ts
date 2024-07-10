import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFeedItem1720591871717 implements MigrationInterface {
  name = 'CreateFeedItem1720591871717';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "feed_item" (
                "guid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "creator" character varying NOT NULL,
                "title" character varying NOT NULL,
                "link" character varying NOT NULL,
                "pubDate" character varying NOT NULL,
                "content_encoded" character varying NOT NULL,
                "content" character varying NOT NULL,
                "contentSnippet" character varying NOT NULL,
                "categories" text array NOT NULL,
                "isoDate" character varying NOT NULL,
                CONSTRAINT "PK_dceeb4448259ae62e1482321c3b" PRIMARY KEY ("guid")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "feed_item"
        `);
  }
}
