import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guid: string;

  @Column()
  creator: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  pubDate: string;

  @Column()
  content: string;

  @Column()
  contentSnippet: string;

  @Column('text', { array: true })
  categories: string[];

  @Column()
  isoDate: string;
}
