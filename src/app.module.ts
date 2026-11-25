import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TasksModule } from './tasks/tasks.module.js';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), TasksModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})


export class AppModule { }
