import { Controller, Get, Header, Param, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<string> {
    return 'hello';
  }

  @Get('/:query')
  async getData(@Param('query') query: string): Promise<any> {
    return await this.appService.getData(query);
  }
}
