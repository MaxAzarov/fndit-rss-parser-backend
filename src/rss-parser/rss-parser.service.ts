import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as Parser from 'rss-parser';
import { FeedItemService } from 'src/feed-item/feed-item.service';

interface FeedItem {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
}

@Injectable()
export class RssParserService {
  private readonly logger = new Logger(RssParserService.name);
  private parser = new Parser<FeedItem>();

  constructor(private readonly feedItemService: FeedItemService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    await this.parseRssFeeds();
  }

  async parseRssFeeds() {
    const feedUrl = 'https://lifehacker.com/rss';
    try {
      const feed = await this.parser.parseURL(feedUrl);

      await Promise.all(
        feed.items
          .slice(0, 200) // parse first 200
          .map((item) => this.feedItemService.create(item as FeedItem)),
      );
    } catch (error) {
      this.logger.error(`Error parsing RSS feed: ${error.message}`);
    }
  }
}
