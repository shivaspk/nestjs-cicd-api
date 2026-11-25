import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'UP',
      service: 'nestjs-cicd-api',
      timestamp: new Date().toISOString(),
    };
  }
}