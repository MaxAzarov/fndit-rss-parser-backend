import { IsArray, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateFeedItemDto {
  @IsString()
  @IsNotEmpty()
  creator: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  pubDate: string;

  @IsString()
  @IsNotEmpty()
  'content:encoded': string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  contentSnippet: string;

  @IsString()
  @IsNotEmpty()
  guid: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  categories: string[];

  @IsDateString()
  @IsNotEmpty()
  isoDate: string;
}
