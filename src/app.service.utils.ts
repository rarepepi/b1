import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppServiceUtils {
  constructor(private prisma: PrismaService) {}

  async getDataHelper(query: string): Promise<string> {
    return 'data';
  }

  @Cron(CronExpression.EVERY_5_MINUTES, { name: 'mainCronJob' })
  async mainCronJob(): Promise<void> {
    console.log('🟩 Updating ranks... 🟩');
  }
}
