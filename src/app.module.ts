import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigitalOcean } from './digital_ocean/digital-ocean';
import { Docker } from './docker/docker';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import { OwnServer } from './own_server/own_server';
import { Telnet } from './telnet';
import { Ssh } from './ssh';

@Module({
  imports: [],
  controllers: [AppController, ManagerController],
  providers: [AppService, Docker, DigitalOcean, ManagerService, OwnServer, Telnet, Ssh],
})
export class AppModule {}
