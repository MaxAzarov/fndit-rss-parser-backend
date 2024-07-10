import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RssParserModule } from './rss-parser/rss-parser.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { ConfigModule } from '@nestjs/config';
import { FeedItemModule } from './feed-item/feed-item.module';

@Module({
  imports: [
    RssParserModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    FeedItemModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
