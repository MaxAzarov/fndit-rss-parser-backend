import { Module } from '@nestjs/common';
import { RssParserService } from './rss-parser.service';
import { FeedItemService } from 'src/feed-item/feed-item.service';

@Module({
  providers: [RssParserService, FeedItemService],
})
export class RssParserModule {}
