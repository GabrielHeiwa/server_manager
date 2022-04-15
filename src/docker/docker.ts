import { Injectable } from '@nestjs/common';

@Injectable()
export class Docker {
  async up(params) {
    console.log(params);

    return {
      ev: 'Docker up',
    };
  }

  async down(params) {
    console.log(params);

    return {
      ev: 'Docker down',
    };
  }

  async status(params) {
    console.log(params);

    return {
      ev: 'Docker status',
    };
  }
}
