import { Module } from '@nestjs/common';
import { FeedItemService } from './feed-item.service';
import { FeedItemController } from './feed-item.controller';

@Module({
  controllers: [FeedItemController],
  providers: [FeedItemService],
})
export class FeedItemModule {}
