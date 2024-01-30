import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return [
      {
        name: 'ilyosbek',
        age: 20,
      },
    ];
  }
}
