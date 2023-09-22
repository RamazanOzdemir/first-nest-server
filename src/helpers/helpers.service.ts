import { Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  isString(value: any): boolean {
    return typeof value === 'string';
  }
}
