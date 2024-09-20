import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceUtils } from './app.service.utils';
import { PrismaService } from './prisma.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    AppServiceUtils,
    // PrismaService
  ],
})
export class AppModule {}
