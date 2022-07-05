import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'nest.js test';
  }
}

export class TestService {
  getTestFunction() : string {
    return 'nest.js API CALL TEST'
  }
}
