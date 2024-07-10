import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FeedItemService } from './feed-item.service';
import { CreateFeedItemDto } from './dto/create-feed-item.dto';
import { PaginationDto } from './dto/pagination.dto';
import { FeedItem } from './entities/feed-item.entity';

@Controller('feed-item')
export class FeedItemController {
  constructor(private readonly feedItemService: FeedItemService) {}

  @Post()
  create(@Body() createFeedItemDto: CreateFeedItemDto) {
    return this.feedItemService.create(createFeedItemDto);
  }

  @Get()
  findAll(
    @Query() paginationDto: PaginationDto,
  ): Promise<{ data: FeedItem[]; total: number }> {
    return this.feedItemService.findAll(paginationDto);
  }
}
