import { Injectable } from '@nestjs/common';

interface upProps {
  connection_type: 'ssh' | 'telnet';
  port: string;
}

@Injectable()
export class OwnServer {
  async up(params: upProps) {
    return console.log(params);
  }
}
