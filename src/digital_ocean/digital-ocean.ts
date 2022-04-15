import { Injectable } from '@nestjs/common';

@Injectable()
export class DigitalOcean {
  up(params) {
    console.log(params);

    return {
      ev: 'Digital ocean up',
    };
  }
  down(params) {
    console.log(params);

    return {
      ev: 'Digital ocean down',
    };
  }
  status(params) {
    console.log(params);

    return {
      ev: 'Digital ocean status',
    };
  }
}
