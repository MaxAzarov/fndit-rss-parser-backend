import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { CreateFeedItemDto } from './dto/create-feed-item.dto';
import { FeedItem } from './entities/feed-item.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class FeedItemService {
  constructor(private readonly entityManager: EntityManager) {}

  create(createFeedItemDto: CreateFeedItemDto) {
    const feedRepository = this.entityManager.getRepository(FeedItem);

    return feedRepository.save(feedRepository.create(createFeedItemDto));
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<{ data: FeedItem[]; total: number; page: number }> {
    const { page = 1, limit = 10 } = paginationDto;
    const feedRepository = this.entityManager.getRepository(FeedItem);

    const [data, total] = await feedRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, total, page };
  }
}
