import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ManagerService } from './manager.service';

type RequestProps = {
  type: string;
  data: unknown;
};

@Controller('manager')
export class ManagerController {
  constructor(private readonly manager: ManagerService) {}

  @Post('up')
  async up(@Body() data: RequestProps) {
    return this.manager.up(data);
  }

  @Delete('down')
  async down(@Body() data: RequestProps) {
    return this.manager.down(data);
  }

  @Get('status')
  async status(@Body() data: RequestProps) {
    return this.manager.status(data);
  }
}
