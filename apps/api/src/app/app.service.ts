import { Injectable } from '@nestjs/common';
import { Message } from '@me-and-bro/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
