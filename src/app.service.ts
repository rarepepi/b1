import { Injectable } from '@nestjs/common';
import { AppServiceUtils } from './app.service.utils';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(
    private appServiceUtils: AppServiceUtils,
    // private prisma: PrismaService,
  ) {}

  async getData(query: string): Promise<string> {
    console.log('🟩 Fetching data... 🟩');

    return 'Hello World!';
  }
}
