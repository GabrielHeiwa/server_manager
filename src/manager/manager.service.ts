import { Injectable } from '@nestjs/common';
import { DigitalOcean } from 'src/digital_ocean/digital-ocean';
import { Docker } from 'src/docker/docker';

type serverProps = {
  up: () => unknown;
  down: () => unknown;
  status: () => unknown;
};

type paramsTypes = {
  type: string;
  data: unknown;
};

@Injectable()
export class ManagerService {
  private servers: Map<string, serverProps> = new Map();

  constructor(private docker: Docker, private digital_ocean: DigitalOcean) {}

  async up(params: paramsTypes) {
    const { type, data } = params;
    const server = this[type];

    if (!server) return { error: `Server ${type} not exist` };

    return server.up(data);
  }

  async down(params: paramsTypes) {
    const { type, data } = params;
    const server = this[type];

    if (!server) return { error: `Server ${type} not exist` };

    return server.down(data);
  }

  async status(params: paramsTypes) {
    const { type, data } = params;
    const server = this[type];

    if (!server) return { error: `Server ${type} not exist` };

    return server.status(data);
  }
}
